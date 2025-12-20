import React, { useRef, useEffect, useState, useCallback } from "react";
import "./slider.css";


export default function InfiniteSlider({ items = [], speed = 120, pauseOnHover = true }) {
  const containerRef = useRef(null);
  const firstSetRef = useRef(null);   // ref to the original set (not the duplicate)
  const rafRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const offsetRef = useRef(0);        // current translateX in px (negative moves left)
  const [measure, setMeasure] = useState(0); // width of first set in px
  const [running, setRunning] = useState(true);

  // Build two sets: items and items (duplicate)
  const rendered = [...items, ...items];

  // Measure width of the first set after images/layout stable
  const measureWidth = useCallback(() => {
    if (!firstSetRef.current) return;
    const rect = firstSetRef.current.getBoundingClientRect();
    setMeasure(rect.width);
  }, []);

  // RAF animation loop
  useEffect(() => {
    if (!measure || !containerRef.current) return;

    function step(ts) {
      if (!lastTimestampRef.current) lastTimestampRef.current = ts;
      const dt = (ts - lastTimestampRef.current) / 1000; // seconds elapsed
      lastTimestampRef.current = ts;

      if (running) {
        // move left by speed * dt
        offsetRef.current -= speed * dt;

        // When we've moved a full original-set width, wrap forward by +measure
        // This avoids jumps because duplicate set is identical and placed right after original.
        if (offsetRef.current <= -measure) {
          offsetRef.current += measure;
        }

        // Apply transform
        if (containerRef.current) {
          containerRef.current.style.transform = `translateX(${offsetRef.current}px)`;
        }
      }

      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTimestampRef.current = null;
    };
  }, [measure, speed, running]);

  // Re-measure on load and resize
  useEffect(() => {
    measureWidth();
    const ro = new ResizeObserver(measureWidth);
    if (firstSetRef.current) ro.observe(firstSetRef.current);
    if (window) window.addEventListener("load", measureWidth);
    window.addEventListener("resize", measureWidth);

    return () => {
      ro.disconnect();
      window.removeEventListener("load", measureWidth);
      window.removeEventListener("resize", measureWidth);
    };
  }, [measureWidth]);

  // Pause on hover
  const onMouseEnter = () => { if (pauseOnHover) setRunning(false); };
  const onMouseLeave = () => { if (pauseOnHover) setRunning(true); };

  return (
    <div className="is-wrapper">
      <div
        className="is-track"
        ref={containerRef}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        // initial inline style ensures no jump until JS sets transform
        style={{ transform: "translateX(0px)" }}
      >
        {/* first set (measured) */}
        <div className="is-set" ref={firstSetRef}>
          {items.map((it, i) => (
            <div className="is-slide" key={"a-" + i}>
              {typeof it === "string" ? <img src={it} alt="" /> : it}
            </div>
          ))}
        </div>

        {/* duplicate set (no ref) */}
        <div className="is-set">
          {items.map((it, i) => (
            <div className="is-slide" key={"b-" + i}>
              {typeof it === "string" ? <img src={it} alt="" /> : it}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
