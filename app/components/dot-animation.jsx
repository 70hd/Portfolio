"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DotCarousel({ number, setNumber, setDirection, total }) {
  const next = () => {
    setDirection(1);
    setNumber((number + 1) % total);
  };
  const prev = () => {
    setDirection(-1);
    setNumber((number - 1 + total) % total);
  };

  const visible = [
    (number - 1 + total) % total,
    number,
    (number + 1) % total,
  ];

  return (
    <nav
      aria-label="Component carousel navigation"
      className="select-none relative w-[80px] h-5 flex items-center justify-center gap-2"
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 h-full w-4 bg-gradient-to-r from-[#151515] to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 h-full w-4 bg-gradient-to-l from-[#151515] to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />

      <ul role="list" className="flex items-center justify-center gap-2 w-full h-full">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((idx) => {
            const isActive = idx === number;
            return (
              <li key={idx}>
                <motion.button
                  type="button"
                  layout
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: 1,
                    scale: isActive ? 1.4 : 1,
                    backgroundColor: isActive
                      ? "rgb(255,255,255)"
                      : "rgba(255,255,255,0.3)",
                  }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-[8px] h-[8px] rounded-full cursor-pointer"
                  onClick={() => {
                    if (idx === (number - 1 + total) % total) prev();
                    else if (idx === (number + 1) % total) next();
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  aria-current={isActive ? "true" : "false"}
                />
              </li>
            );
          })}
        </AnimatePresence>
      </ul>
    </nav>
  );
}