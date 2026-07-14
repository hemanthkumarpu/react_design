import { useEffect, useState, useMemo } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase"; // adjust to your firebase config file's export path

const STATUS_OPTIONS = ["New", "Contacted", "Resolved"];

const STATUS_STYLES = {
  New: "bg-blue-100 text-blue-700",
  Contacted: "bg-amber-100 text-amber-700",
  Resolved: "bg-green-100 text-green-700",
};

function formatDate(timestamp) {
  if (!timestamp?.toDate) return "—";
  return timestamp.toDate().toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default function AdminDashboard() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("desc"); // "desc" = newest first
  const [expandedId, setExpandedId] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    const q = query(collection(db, "enquiries"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const rows = snapshot.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data(),
        }));
        setEnquiries(rows);
        setLoading(false);
      },
      (err) => {
        console.error("Failed to load enquiries:", err);
        if (err.code === "permission-denied") {
          setError("You don't have permission to view this. Please sign in as an admin.");
        } else {
          setError("Couldn't load enquiries. Check your connection and try again.");
        }
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const filteredEnquiries = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    const filtered = enquiries.filter((enquiry) => {
      const matchesStatus =
        statusFilter === "All" || enquiry.status === statusFilter;
      const matchesSearch =
        !term ||
        enquiry.name?.toLowerCase().includes(term) ||
        enquiry.email?.toLowerCase().includes(term) ||
        enquiry.phone?.toLowerCase().includes(term);
      return matchesStatus && matchesSearch;
    });

    const sorted = [...filtered].sort((a, b) => {
      const aTime = a.createdAt?.toMillis?.() ?? 0;
      const bTime = b.createdAt?.toMillis?.() ?? 0;
      return sortOrder === "desc" ? bTime - aTime : aTime - bTime;
    });

    return sorted;
  }, [enquiries, statusFilter, searchTerm, sortOrder]);

  const counts = useMemo(() => {
    const base = { All: enquiries.length, New: 0, Contacted: 0, Resolved: 0 };
    enquiries.forEach((e) => {
      if (base[e.status] !== undefined) base[e.status] += 1;
    });
    return base;
  }, [enquiries]);

  async function handleStatusChange(id, newStatus) {
    setUpdatingId(id);
    try {
      await updateDoc(doc(db, "enquiries", id), { status: newStatus });
    } catch (err) {
      console.error("Failed to update status:", err);
      alert("Couldn't update status. Please try again.");
    } finally {
      setUpdatingId(null);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Delete this enquiry? This can't be undone.")) return;
    setDeletingId(id);
    try {
      await deleteDoc(doc(db, "enquiries", id));
    } catch (err) {
      console.error("Failed to delete enquiry:", err);
      alert("Couldn't delete this enquiry. Please try again.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4 sm:px-6">
        <h1 className="text-2xl font-semibold text-gray-900 text-center">Enquiries</h1>
        <p className="text-sm text-gray-500 mt-0.5 text-center">
          {counts.All} total · {counts.New} new
        </p>

        {/* Search + sort */}
        <div className="mt-3 flex gap-2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name, email, or phone"
            className="flex-1 min-w-0 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() =>
              setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"))
            }
            title={sortOrder === "desc" ? "Newest first" : "Oldest first"}
            className="shrink-0 flex items-center gap-1 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-600"
          >
            <span aria-hidden="true">{sortOrder === "desc" ? "↓" : "↑"}</span>
            <span className="hidden sm:inline">
              {sortOrder === "desc" ? "Newest" : "Oldest"}
            </span>
          </button>
        </div>

        {/* Status filter tabs */}
        <div className="mt-3 flex gap-2 overflow-x-auto no-scrollbar">
          {["All", ...STATUS_OPTIONS].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                statusFilter === status
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {status} ({counts[status]})
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 mt-4">
        {loading && (
          <div className="flex flex-col items-center justify-center py-16 text-gray-400">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600 mb-3" />
            <p className="text-sm">Loading enquiries…</p>
          </div>
        )}

        {!loading && error && (
          <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {!loading && !error && filteredEnquiries.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-gray-500 text-sm">
              {searchTerm || statusFilter !== "All"
                ? "No enquiries match your filters."
                : "No enquiries yet. New submissions will show up here."}
            </p>
          </div>
        )}

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredEnquiries.map((enquiry) => {
            const isExpanded = expandedId === enquiry.id;
            return (
              <li
                key={enquiry.id}
                className="rounded-xl bg-white border border-gray-200 p-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="font-medium text-gray-900 truncate">
                      {enquiry.name || "Unnamed"}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {enquiry.email}
                    </p>
                    {enquiry.phone && (
                      <p className="text-sm text-gray-500 truncate">
                        {enquiry.phone}
                      </p>
                    )}
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
                      STATUS_STYLES[enquiry.status] || "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {enquiry.status || "New"}
                  </span>
                </div>

                <p
                  className={`mt-3 text-sm text-gray-700 whitespace-pre-wrap ${
                    isExpanded ? "" : "line-clamp-3"
                  }`}
                >
                  {enquiry.message}
                </p>
                {enquiry.message && enquiry.message.length > 140 && (
                  <button
                    onClick={() =>
                      setExpandedId(isExpanded ? null : enquiry.id)
                    }
                    className="mt-1 text-xs font-medium text-blue-600"
                  >
                    {isExpanded ? "Show less" : "Show more"}
                  </button>
                )}

                <p className="mt-3 text-xs text-gray-400">
                  {formatDate(enquiry.createdAt)}
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <select
                    value={enquiry.status || "New"}
                    disabled={updatingId === enquiry.id}
                    onChange={(e) =>
                      handleStatusChange(enquiry.id, e.target.value)
                    }
                    className="flex-1 rounded-lg border border-gray-300 px-2 py-1.5 text-sm disabled:opacity-50"
                  >
                    {STATUS_OPTIONS.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => handleDelete(enquiry.id)}
                    disabled={deletingId === enquiry.id}
                    className="rounded-lg border border-red-200 px-3 py-1.5 text-sm text-red-600 disabled:opacity-50"
                  >
                    {deletingId === enquiry.id ? "…" : "Delete"}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}