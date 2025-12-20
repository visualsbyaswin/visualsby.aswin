import React, { useEffect } from "react";
import gsap from "gsap";

const DecryptText = ({ selector, duration = 2 }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXY";

  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    elements.forEach((el) => {
      const originalText = el.textContent;
      el.style.userSelect = "none"; // prevent text selection
      el.textContent = "";

      const charsArray = originalText.split("");

      // Create span for each char
      charsArray.forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        el.appendChild(span);
      });

      const spans = el.querySelectorAll("span");

      // Pick random 3-4 spans to animate
      const animateCount = Math.min(3 + Math.floor(Math.random() * 2), spans.length);
      const indices = [];

      while (indices.length < animateCount) {
        const randIndex = Math.floor(Math.random() * spans.length);
        if (!indices.includes(randIndex)) indices.push(randIndex);
      }

      indices.forEach((index) => {
        const span = spans[index];
        let iterations = 0;
        const maxIterations = 10 + Math.floor(Math.random() * 10);

        const animateChar = () => {
          if (iterations < maxIterations) {
            span.textContent = letters[Math.floor(Math.random() * letters.length)];
            iterations++;
            requestAnimationFrame(animateChar);
          } else {
            span.textContent = charsArray[index];
          }
        };

        // Delay each letter slightly for stagger effect
        setTimeout(() => {
          animateChar();
        }, index * (duration * 50));
      });
    });
  }, [selector, duration]);

  return null;
};

export default DecryptText;
