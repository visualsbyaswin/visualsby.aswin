
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import "./ant.css"
gsap.registerPlugin(CustomEase);

const HeroAnimation = () => {
  const headerRef = useRef(null);
  const counterRef = useRef(null);
  const heroRef = useRef(null);
  const overlayRef = useRef(null);
  const heroImgRef = useRef(null);
  const zayRef = useRef(null);

  // Split text into spans
  const splitTextIntoSpans = (element) => {
    const text = element.innerText;
    element.innerHTML = text
      .split("")
      .map((char) => `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`)
      .join("");
  };

  useEffect(() => {
    // Create custom ease
    CustomEase.create(
      "hop",
      "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1"
    );

    // Split header text
    if (headerRef.current) splitTextIntoSpans(headerRef.current);

    // Counter animation
    const animationCounter = () => {
      const counterElement = counterRef.current;
      let currentValue = 0;
      const updateInterval = 300;
      const maxDuration = 2000;
      const endValue = 100;
      const startTime = Date.now();

      const update = () => {
        const elapsed = Date.now() - startTime;
        if (elapsed < maxDuration) {
          currentValue = Math.min(currentValue + Math.floor(Math.random() + 30) + 5, endValue);
          counterElement.textContent = currentValue;
          setTimeout(update, updateInterval);
        } else {
          counterElement.textContent = currentValue;
          setTimeout(() => {
            gsap.to(counterElement, {
              y: -20,
              opacity: 0,
              duration: 1,
              ease: "power3.inOut",
              onStart: revealLandingPage,
            });
          }, -500);
        }
      };

      update();
    };

    // Animate counter initially
    gsap.to(counterRef.current, {
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 1,
      onComplete: animationCounter,
    });

    // Reveal landing page animation
    const revealLandingPage = () => {
      gsap.to(heroRef.current, {
        duration: 2,
        ease: "hop",
        clipPath: `polygon(0% 100%,100% 100%,100% 0%,0% 0%)`,
        onStart: () => {
          gsap.to(heroRef.current, {
            transform: "translate(-50%,-50%) scale(1)",
            duration: 2.25,
            ease: "power3.inOut",
            delay: 0.25,
          });

          gsap.to(overlayRef.current, {
            duration: 2,
            ease: "hop",
            delay: 0.5,
            clipPath: `polygon(0% 100%,100% 100%,100% 0%,0% 0%)`,
          });

          gsap.to(heroImgRef.current, {
            transform: "scale(1)",
            duration: 2.25,
            ease: "power3.inOut",
            delay: 0.25,
          });

          gsap.to(headerRef.current.querySelectorAll("span"), {
            y: 0,
            stagger: 0.1,
            duration: 2,
            ease: "power4.inOut",
            delay: 0.75,
          });
        },
      });
    };

    // 3D hover animation for .zay
    const zayElement = zayRef.current;

    const handleMouseMove = (e) => {
      const rect = zayElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = (x / rect.width - 0.5) * 20;
      const rotateX = (y / rect.height - 0.5) * -20;

      gsap.to(zayElement, {
        rotationY: rotateY,
        rotationX: rotateX,
        transformPerspective: 1000,
        ease: "power2.out",
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(zayElement, {
        rotationY: 0,
        rotationX: 0,
        ease: "elastic.out(1,0.5)",
        duration: 1,
      });
    };

    zayElement.addEventListener("mousemove", handleMouseMove);
    zayElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      zayElement.removeEventListener("mousemove", handleMouseMove);
      zayElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div>
      <div className="counter">
        <p ref={counterRef}>0</p>
      </div>

      <div className="hero" ref={heroRef}>
        <div className="overlay" ref={overlayRef}></div>
        <div className="hero-img" ref={heroImgRef}>
          <img src="/hero.png" alt="Hero" />
        </div>
      </div>

      <div className="header">
        <h1 ref={headerRef}>Welcome to Our Site</h1>
      </div>

      <div className="zay" ref={zayRef}>
        Hover Me
      </div>
    </div>
  );
};

export default HeroAnimation;