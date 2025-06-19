"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const frameCount = 31;
const imagePaths = Array.from(
  { length: frameCount },
  (_, i) => `/step-${i + 1}.png`
);

// how many pixels of scroll you want the full animation to span
const SCROLL_RANGE = 1500;

export default function ScrollSteps() {
  const [currentFrame, setCurrentFrame] = useState(frameCount - 1);
  const containerRef = useRef(null);
  const requestRef = useRef();
  const targetFrame = useRef(frameCount - 1);
  const currentLerp = useRef(frameCount - 1);

  // update targetFrame on scroll
  const handleScroll = () => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const scrollTop = window.scrollY - containerTop;

    // clamp scroll position 0 → SCROLL_RANGE
    const clamped = Math.max(0, Math.min(scrollTop, SCROLL_RANGE));
    const frac = clamped / SCROLL_RANGE;      // 0 at top, 1 at bottom of our range

    // invert so 0→last frame, 1→first frame
    targetFrame.current = Math.floor((1 - frac) * (frameCount - 1));
  };

  // lerp loop
  const animate = () => {
    currentLerp.current +=
      (targetFrame.current - currentLerp.current) * 0.1;
    const next = Math.round(currentLerp.current);
    if (next !== currentFrame) {
      setCurrentFrame(next);
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // init values
    handleScroll();
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(requestRef.current);
    };
  }, [currentFrame]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[300px] md:min-h-[1000px]"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-start justify-start dynamic-gap-9 dynamic-padding">
        <div className="flex flex-col dynamic-gap-3 w-full">
          <h2>Components</h2>
          <p className="text-white/75">
            Components designed and developed with the user in mind
          </p>
        </div>
        <div className="flex w-full">
          <Image
            src={imagePaths[currentFrame]}
            alt={`Frame ${currentFrame + 1}`}
            width={800}
            height={600}
            priority
            className="flex-1 w-full"
          />
        </div>
      </div>
    </div>
  );
}