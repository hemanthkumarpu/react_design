import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../components/Hero";
import About from "../components/About";
import Courses from "../components/Courses";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

import { scrollToSection } from "../utils/scrollToSection";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scrollToSection(location.state.scrollTo);
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Courses />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}