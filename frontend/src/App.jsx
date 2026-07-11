import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import CourseDetail from './pages/CourseDetail.jsx'
import Services from './pages/Services.jsx'
import AdminLogin from './components/AdminLogin.jsx'
import logo from './assets/logo.png'

export default function App() {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')

  useEffect(() => {
    document.title = 'GananCompuTech'

    let favicon = document.querySelector("link[rel='icon']")
    if (!favicon) {
      favicon = document.createElement('link')
      favicon.rel = 'icon'
      document.head.appendChild(favicon)
    }

    favicon.type = 'image/png'
    favicon.href = logo
  }, [location.pathname])

  return (
    <>
      {!isAdminRoute && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="*" element={<Home />} />
      </Routes>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <BackToTop />}
    </>
  )
}