import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"; // adjust to your firebase config file's export path

export default function AdminGuard({ children }) {
  const [status, setStatus] = useState("checking"); // "checking" | "authed" | "blocked"

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // If you restrict admin access to specific accounts (custom claims,
      // an "admins" collection, an allowlisted email, etc.) check that here
      // instead of just checking for any logged-in user.
      setStatus(user ? "authed" : "blocked");
    });
    return () => unsubscribe();
  }, []);

  if (status === "checking") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600" />
      </div>
    );
  }

  if (status === "blocked") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
        <p className="text-lg font-semibold text-gray-900">Access denied</p>
        <p className="mt-1 text-sm text-gray-500 max-w-xs">
          You need to be signed in as an admin to view this page.
        </p>
        <a
          href="/admin"
          className="mt-4 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white"
        >
          Go to login
        </a>
      </div>
    );
  }

  return children;
}