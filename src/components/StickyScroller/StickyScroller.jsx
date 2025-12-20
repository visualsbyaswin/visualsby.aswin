import React, { useRef, useEffect, useState } from "react";
import "./stick.css";
import { sticky } from "../../assets/assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { runDecrypt } from "../../Animations/HoverDecrypt";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const StickyScroller = () => {
  const container = useRef(null);
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPos({
      x: e.clientX - rect.left - 60, // center adjust
      y: e.clientY - rect.top - 15,
    });
  };
useGSAP(() => {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    const cards = container.current.querySelectorAll(".stics");

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
        });
      }
    });
  });

  // cleanup when component unmounts
  return () => mm.revert();
}, { scope: container });


  return (
    <section className="stickyscroller" ref={container}>
      <div className="scroller">
        {/* CARD 1 */}
        <div className="stics">
          <div className="imageofstick">
            <div className="stk st1">
              <img src={sticky.stick1} />
            </div>
            <div className="stk st2">
              <img src={sticky.stick01} />
            </div>
          </div>
          <div className="content-stick">
            <div className="brand-name">
              <h4>VAER</h4>
            </div>
            <div className="brand-category">
              <h4>scope</h4>
              <div className="bround"></div>
              <h4>(Ecommerce, Brand, Digital)</h4>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="stics">
          <div className="imageofstick">
            <div className="stk st2">
              <img src={sticky.stick02} />
            </div>
            <div className="stk st1">
              <img src={sticky.stick2} />
            </div>
          </div>
          <div className="content-stick">
            <div className="brand-name">
              <h4>CHARMENT</h4>
            </div>
            <div className="brand-category">
              <h4>scope</h4>
              <div className="bround"></div>
                     <h4>(Ecommerce, Brand, Digital)</h4>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="stics">
          <div className="imageofstick">
            <div className="stk st1">
              <img src={sticky.stick3} />
            </div>
            <div className="stk st2">
              <img src={sticky.stick03} />
            </div>
          </div>
          <div className="content-stick">
            <div className="brand-name">
              <h4>SLICETOWN</h4>
            </div>
            <div className="brand-category">
              <h4>scope</h4>
              <div className="bround"></div>
              <h4>(Strategy, Brand, Digital)</h4>
            </div>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="stics">
          <div className="imageofstick">
            <div className="stk st2">
              <img src={sticky.stick04} />
            </div>
            <div className="stk st1">
              <img src={sticky.stick4} />
            </div>
          </div>
          <div className="content-stick">
            <div className="brand-name">
              <h4>PALMER</h4>
            </div>
            <div className="brand-category">
              <h4>scope</h4>
              <div className="bround"></div>
              <h4>(Strategy, Brand, Digital)</h4>
            </div>
          </div>
        </div>
      </div>

      <div
        className="sticsh2"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onMouseMove={handleMove}
      >
        <Link to="/visualsby.aswin/projects" >
          <h2>( Explore all work )</h2>
        </Link>
        {show && (
          <div className="hover-btn" style={{ top: pos.y, left: pos.x }}>
            <span>VIEW SERVICES</span>
            <span className="arrow">→</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default StickyScroller;
