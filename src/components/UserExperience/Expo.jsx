import React, { useEffect, useRef } from "react";
import "./expo.css";
import { animator, collectionofproducts, gifs } from "../../assets/assets";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useParams } from "react-router-dom";
import DecryptText from "../../Animations/DecryptText";

gsap.registerPlugin(ScrollTrigger);

const Expolore = () => {
  const rowrefs = useRef([]);

  useEffect(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const initialClipPaths = [
      "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
      "polygon(33% 0%, 33% 0%, 33% 0%, 33% 0%)",
      "polygon(66% 0%, 66% 0%, 66% 0%, 66% 0%)",
      "polygon(0% 33%, 0% 33%, 0% 33%, 0% 33%)",
      "polygon(33% 35%, 33% 33%, 35% 33%, 33% 33%)",
      "polygon(66% 35%, 66% 35%, 66% 35%,66% 33%)",
      "polygon(0% 66%, 0% 66%, 0% 66%, 0% 66%)",
      "polygon(33% 66%, 33% 66%, 33% 66%, 33% 66%)",
      "polygon(66% 66%, 66% 66%, 66% 66%, 66% 66%)",
    ];

    const finalClipPaths = [
      "polygon(0% 0%, 33.5% 0%, 33.5% 33.5%, 0% 33.5%)",
      "polygon(33% 0%, 66.5% 0%, 66.5% 33.5%, 33% 33.5%)",
      "polygon(66% 0%, 100% 0%, 100% 33.5%, 66% 33.5%)",
      "polygon(0% 33%, 33.5% 33%, 33.5% 66.5%, 0% 66.5%)",
      "polygon(33% 33%, 66.5% 33%, 66.5% 66.5%, 33% 66.5%)",
      "polygon(66% 33%, 100% 33%, 100% 66.5%, 66% 66.5%)",
      "polygon(0% 66%, 33.5% 66%, 33.5% 100%, 0% 100%)",
      "polygon(33% 66%, 66.5% 66%, 66.5% 100%, 33% 100%)",
      "polygon(66% 66%, 100% 66%, 100% 100%, 66% 100%)",
    ];

    rowrefs.current.forEach((rows) => {
      if (!rows) return;

      const images = rows.querySelectorAll(".img-containers");

      images.forEach((img) => {
        const masks = img.querySelectorAll(".masks");

        masks.forEach((mask, index) => {
          gsap.set(mask, { clipPath: initialClipPaths[index] });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: rows, // <-- FIXED
            start: "top 85%",
            // scrub: true,
          },
        });

        const animationOrder = [
          [".m-0"],
          [".m-1", ".m-3"],
          [".m-2", ".m-4", ".m-6"],
          [".m-5", ".m-7"],
          [".m-8"],
        ];

        animationOrder.forEach((targets, index) => {
          const elements = targets
            .map((cls) => img.querySelector(cls))
            .filter(Boolean);

          if (elements.length > 0) {
            tl.to(
              elements,
              {
                clipPath: (i, el) =>
                  finalClipPaths[Array.from(masks).indexOf(el)],
                duration: 0.5,
                stagger: 0.1,
                ease: "power3.out",
              },
              index * 0.15
            );
          }
        });
      });
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);
  const { slug } = useParams();
  const project = collectionofproducts.find((p) => p.slug === slug);
  if (!project) return <h4>Unavailable content</h4>;

  const addrefs = (el) => {
    if (el && !rowrefs.current.includes(el)) {
      rowrefs.current.push(el);
    }
  };

  const ImageMask = ({ index }) => {
    const imgsrc = project?.images?.[index];

    if (!imgsrc) return null; // <-- FIXED

    return (
      <>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className={`masks m-${i}`}>
            <img src={imgsrc} alt="" />
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="main-animator">
      <section className="product-name">
        <h4 className="decrypt">New era of</h4>
        <h4 className="decrypt">{project.slug}</h4>
      </section>
      <DecryptText selector=".decrypt" duration={1} />
      <section className="infoof-product">
        <div className="plinks">
          <p>Explore the details.</p>
          <p>Where ideas evolve into experiences.</p>
        </div>
        <div className="alinks">
         
          <a href={project.links}>
            <p>Live Preview :</p>
            {project.links}
          </a>
        </div>
      </section>
      <section className="section-spacer">
        <div className="rows" ref={addrefs}>
          <div className="img-containers">
            <ImageMask index={0} />
          </div>
        </div>
      </section>
      <section className="section-spacer">
        <div className="rows" ref={addrefs}>
          <div className="img-containers">
            <ImageMask index={1} />
          </div>
          <div className="img-containers">
            <ImageMask index={2} />
          </div>
        </div>
      </section>
      <section className="section-spacer">
        <div className="rows" ref={addrefs}>
          <div className="img-containers">
            <ImageMask index={3} />
          </div>
          <div className="img-containers">
            <ImageMask index={4} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expolore;
