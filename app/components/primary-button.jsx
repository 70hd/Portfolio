"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function CtaText({ cta, link, onClick, isExternal = false }) {
  const [pixelFontLoaded, setPixelFontLoaded] = useState(false);

  useEffect(() => {
    document.fonts.load('1em "PressStart2P"').then((loadedFonts) => {
      if (loadedFonts.length > 0) {
        setPixelFontLoaded(true);
      }
    });
  }, []);

  const content = pixelFontLoaded
    ? <span className="pixel-text mb-2">{cta}</span>
    : <p className="mb-2">{cta}</p>;

  return (
    <Link
      href={link}
      className="pixel-button cursor-pointer"
      onClick={onClick}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      aria-label={cta}
    >
      {/* Decorative background image */}
      <img
        src="/blurry-button.png"
        alt="Primary Pixel Button"
        aria-hidden="true"
        className="pixel-image"
      />
      {/* Visible button text or fallback */}
      {content}
    </Link>
  );
}