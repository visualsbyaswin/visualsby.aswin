import React from "react";

// SVGIcon.jsx
// Simple, reusable React component for the provided SVG.
// Props:
//  - color: string (defaults to 'currentColor')
//  - size: number|string (applies to width and height; defaults to '100%')
//  - className, style, and other svg props are forwarded

export default function SVGIconAroow({
  color = 'currentColor',

}) {
  // The original SVG used an outer 100x100 svg that contained a smaller 8x8 viewBox.
  // Here we return a single svg using the inner viewBox so it scales correctly.
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10px"
      height="10px" 

      display="flex"
    
      viewBox="0 0 10 10"
      preserveAspectRatio="xMidYMid meet"


    >
      {/* Use the passed color (defaults to currentColor). If you prefer the original CSS variable use fill: "var(--token-..., rgb(...))" instead. */}
      <path
        d="M0.390625 4.80817V3.49217H6.03263L4.59062 1.63017L5.44463 0.972168L7.86663 4.13617L5.44463 7.32817L4.59062 6.67017L6.03263 4.80817H0.390625Z"
        fill={color}
      />
    </svg>
  );
}
