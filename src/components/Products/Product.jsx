import React from "react";
import "./product.css";
import { collectionofproducts } from "../../assets/assets";
import { Link } from "react-router-dom";
import SVGIconAroow from "../../assets/Arrow";
import gsap from "gsap";

const Product = () => {

  const handleMove = (e) => {
    const container = e.currentTarget;
    const btn = container.querySelector(".hover-me-button");

    const rect = container.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 6);
    const y = e.clientY - (rect.top + rect.height / 6);

    gsap.to(btn, {
      x: x * 0.6,
      y: y * 0.6,
      duration: 0.9,
      ease: "power3.out",
    });
  };

  const handleLeave = (e) => {
    const btn = e.currentTarget.querySelector(".hover-me-button");

    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <section className="product-grid">
      <div className="product-grid-main">
        {collectionofproducts.map((product, i) => (
          <Link to={`/visualsby.aswin/projects/${product.slug}`} key={i}>
            <div
              className="designs-mockup"
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
            >
              <div className="mockup-image">
                <img src={product.thumbnail} alt="mocups" />
              </div>

              <div className="mockup-contents">
                <h4>{product.title}</h4>
              </div>

              <div className="hover-me-button">
                <h4>View Project</h4>
                <SVGIconAroow />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Product;
