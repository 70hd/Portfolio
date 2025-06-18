"use client";
import React, { useRef, useEffect } from "react";

export default function BeforeAfterSlider({
  title,
  desc,
  beforeImage,
  afterImage,
  prevAlt,
  afterAlt
}) {
  const containerRef = useRef(null);
  const beforeRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const slider = container.querySelector("input[type=range]");
    if (!(slider instanceof HTMLInputElement)) return;

    const updatePositions = (value) => {
      container.style.setProperty("--slider-position", `${value}%`);
      if (beforeRef.current) {
        beforeRef.current.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
      }
    };

    const handleInput = (e) => {
      const percent = Number(e.currentTarget.value);
      updatePositions(percent);
    };

    // initialize on mount
    updatePositions(Number(slider.value));

    slider.addEventListener("input", handleInput);
    return () => {
      slider.removeEventListener("input", handleInput);
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center dynamic-padding dynamic-gap-9">
      {/* Title & Description */}
      <div className="flex flex-col w-full md:w-[800px] dynamic-gap-3 text-center items-center justify-center">
        <h2>{title}</h2>
        <p className="text-white/75">{desc}</p>
      </div>

      {/* Slider */}
      <div className="w-full flex justify-center">
        <div
          ref={containerRef}
          className="relative w-[820px] h-[285px] md:h-[500px] overflow-hidden"
          style={{ "--slider-position": "50%" }}
        >
          {/* After Image (background) */}
          <img
            src={afterImage}
            alt={afterAlt}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Before Image (clipped) */}
          <img
            ref={beforeRef}
            src={beforeImage}
            alt={prevAlt}
            className="absolute inset-0 w-full h-full object-cover z-10"
            style={{ clipPath: "inset(0 50% 0 0)", filter: "grayscale(25%)" }}
          />

          {/* Invisible but accessible range input */}
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="50"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-30"
            aria-label="Before/after image slider"
          />

          {/* Divider line */}
          <div
            role="presentation"
            aria-hidden="true"
            className="absolute top-0 bottom-0 w-[2px] bg-white z-20 pointer-events-none"
            style={{
              left: "var(--slider-position)",
              transform: "translateX(-50%)",
            }}
          />

          {/* Slider handle */}
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-[var(--slider-position)] -translate-x-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full z-20 pointer-events-none shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              {/* Left arrow */}
              <path
                d="M10 12H4M8 8l-4 4 4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Right arrow */}
              <path
                d="M14 12h6M16 8l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
