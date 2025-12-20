import React, { useEffect, useRef, useState } from "react";
import "./nav.css";
import StarIcon from "../../assets/Staricon";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

import { runDecrypt } from "../../Animations/HoverDecrypt";
const Navbar = () => {
  const starref = useRef(null);

  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current.fromTo(
      navRef.current,
      { height: "100vh" },
      {
        height: "100vh",
        display: "flex",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      }
    );
    // const starts = starref.current.querySelectorAll(".starticons svg");

    // gsap.to(starts, {
    //   rotate: 360,
    //   ease: "none",
    //   scrollTrigger: {
    //     start: "top top",
    //     trigger: document.body,
    //     end: "bottom bottom",
    //     scrub: true,
    //   },
    // });
  }, []);

  // toggle animation
  const handleClick = () => {
    if (open) {
      tl.current.reverse();
      document.body.style.position = "inherit";
    } else {
      tl.current.play();

      document.body.style.position = "fixed";
    }
    setOpen(!open);
  };

  return (
    <header>
      <nav>
        <div className="staricons" >
          <StarIcon />
          <StarIcon />
        </div>
        <div className="menu" onClick={handleClick}>
          {open ? "CLOSE" : "MENU"}
        </div>
      </nav>
      <div className="menu-overlay" ref={navRef}>
        <div className="manubar">
          <Link
            to="/visualsbyaswin"
            onClick={() => {
              tl.current.reverse();
              setOpen(false);
              document.body.style.position = "inherit";
            }}
          >
            <div className="menucol">
              <h4>home</h4>
            </div>
          </Link>

          <Link
            to="/visualsbyaswin/projects"
            onClick={() => {
              tl.current.reverse();
              setOpen(false);
              document.body.style.position = "inherit";
            }}
          >
            <div className="menucol" onMouseEnter={(e) => runDecrypt(e.target)}>
              <h4>Projects</h4>
            </div>
          </Link>
          <Link
            to="/visualsbyaswin/services"
            onClick={() => {
              tl.current.reverse();
              setOpen(false);
              document.body.style.position = "inherit";
            }}
          >
            <div className="menucol" onMouseEnter={(e) => runDecrypt(e.target)}>
              <h4>services</h4>
            </div>
          </Link>

          <Link
            to="/visualsbyaswin/contact"
            onClick={() => {
              tl.current.reverse();
              setOpen(false);
              document.body.style.position = "inherit";
            }}
          >
            <div className="menucol" onMouseEnter={(e) => runDecrypt(e.target)}>
              <h4>contact</h4>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
