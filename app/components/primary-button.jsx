"use client";
import React from "react";
import Link from "next/link";

export default function PixelButton({ cta, onClick, link }) {
  const isExternal = link.startsWith("http");

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
      {/* Visible button text */}
      <span className="pixel-text mb-2">{cta}</span>
    </Link>
  );
}