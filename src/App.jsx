import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Services from "./pages/Services.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import AdminLogin from "./components/AdminLogin.jsx";
import AdminDashboard from "./components/Dashboard.jsx";
import AdminGuard from "./utils/Adminguard.jsx";

import logo from "./assets/logo.png";

export default function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => {

    // Set page title
    document.title = "Gnana CompuTech Solutions";

    // Set favicon
    let favicon = document.querySelector("link[rel='icon']");

    if (!favicon) {
      favicon = document.createElement("link");
      favicon.rel = "icon";
      document.head.appendChild(favicon);
    }

    favicon.type = "image/png";
    favicon.href = logo;

    // Disable right-click
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Disable common shortcuts
    const handleKeyDown = (e) => {
      const key = e.key.toUpperCase();

      // F12
      if (key === "F12") {
        e.preventDefault();
        return;
      }

      // Ctrl + Shift + I / J / C
      if (
        e.ctrlKey &&
        e.shiftKey &&
        ["I", "J", "C"].includes(key)
      ) {
        e.preventDefault();
        return;
      }

      // Ctrl + U / S
      if (
        e.ctrlKey &&
        ["U", "S"].includes(key)
      ) {
        e.preventDefault();
        return;
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <ScrollToTop />

      {!isAdminRoute && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <AdminGuard>
              <AdminDashboard />
            </AdminGuard>
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>

      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <BackToTop />}
    </>
  );
}