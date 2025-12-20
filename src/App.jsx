import React from "react";

import { Route, Routes } from "react-router-dom";
import LenisScroll from "./Lenisscroll/lenis";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";

import Expolore from "./components/UserExperience/Expo";

// import Home from "./home/Home";

const App = () => {
  LenisScroll();
  return (
    <main>
      <Navbar />

      <Routes>
        <Route path="/visualsbyaswin/projects/:slug" element={<Expolore />} />
        <Route path="/visualsbyaswin" element={<Home />} />
        <Route path="/visualsbyaswin/services" element={<About />} />
        <Route path="/visualsbyaswin/projects" element={<Projects />} />
        <Route path="/visualsbyaswin/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </main>
  );
};

export default App;
