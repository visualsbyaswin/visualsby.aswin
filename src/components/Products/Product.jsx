import React, { useRef, useState } from "react";
import "./product.css";
import { collectionofproducts } from "../../assets/assets";
import { Link } from "react-router-dom";
import SVGIconAroow from "../../assets/Arrow";
import { runDecrypt } from "../../Animations/HoverDecrypt";
import gsap from "gsap";
import HeroAnimation from "../AntiGravity/AntiGravity";
const Product = () => {
  const btnref=useRef(null)
const handlemove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();

  // Distance from button center
  const x = e.clientX - (rect.left + rect.width / 2);
  const y = e.clientY - (rect.top + rect.height / 2);

  gsap.to(btnref.current, {
    x: x * 0.25,   // 25% follow — feels magnetic
    y: y * 0.25,
    duration: 0.4,
    ease: "power3.out",
  });
};

const handleleave = () => {
  gsap.to(btnref.current, {
    x: 0,
    y: 0,
    duration: 0.5,
    ease: "power3.out",
  });
};


  return (
    <section className="product-grid">
      <div className="product-grid-heading-main">
        <h4>Featured products</h4>
      </div>
  
      <div className="product-grid-main">
        {collectionofproducts.map((product, i) => (
          <Link to={`/visualsby.aswin/projects/${product.slug}`} key={i}>
            <div className="designs-mockup">
              <div className="mockup-designs">
                <div className="mockup-image">
                  <img src={product.thumbnail} alt="" />
                </div>
                <div className="mockup-contents">
                  <div className="mockup-fhead">
                    <h4>{product.title}</h4>
                  </div>
                  <div className="mocup-shead">
                    <h4>Scope</h4>
                    <div className="bround"></div>
                    <h4>(DIGITAL ,FRAMER)</h4>
                  </div>
                </div>
                       <div  ref={btnref}
             
                className="hover-me-button"
                onMouseMove={handlemove}
                onMouseLeave={handleleave}
              >
                <h4 >view project</h4>
                <SVGIconAroow />
              </div>
              </div>
       
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Product;
