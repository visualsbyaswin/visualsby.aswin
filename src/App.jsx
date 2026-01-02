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
{/* git commit -m "Updated portfolio design and fixes" update */}

      <Routes>
        <Route path="/visualsby.aswin/projects/:slug" element={<Expolore />} />
        <Route path="/visualsby.aswin" element={<Home />} />
        <Route path="/visualsby.aswin/services" element={<About />} />
        <Route path="/visualsby.aswin/projects" element={<Projects />} />
        <Route path="/visualsby.aswin/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </main>
  );
};

export default App;
