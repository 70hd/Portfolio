"use client";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";
import {
  IsHoveringProvider,
  useIsHoveringContext,
} from "@/app/context/cusor-context";
import Lenis from "lenis";
import { useEffect } from "react";
import RotatingText from "./components/RotatingText";
import Image from "next/image";

export default function RootLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  useEffect(() => {
    const tracker = document.querySelector(".tracker");
    document.body.addEventListener("mousemove", (e) => {
      tracker.style.left = `${e.clientX}px`;
      tracker.style.top = `${e.clientY}px`;
    });
  }, []); // Ensure the effect runs once after the initial render

  return (
    <IsHoveringProvider>
      <html lang="en">
        <body className="antialiased">
          <CursorTracker />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </IsHoveringProvider>
  );
}

function CursorTracker() {
  const { isHovering } = useIsHoveringContext();

  return (
    <div className="tracker">
      {isHovering ? (
        <Image
          src={isHovering}
          width={150}
          height={33}
          alt="Cursor Image"
          className="min-w-[150px] h-auto"
        />
      ) : (
        <RotatingText />
      )}
    </div>
  );
}
