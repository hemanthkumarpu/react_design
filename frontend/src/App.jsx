import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import Home from './pages/Home.jsx'
import CourseDetail from './pages/CourseDetail.jsx'
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
       
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  )
}
