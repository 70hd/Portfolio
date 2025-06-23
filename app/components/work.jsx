"use client";

import React, { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    href: "/work/reframe",
    image: "/reframe-pilates-hero.svg",
    alt: "Woman performing a Pilates reformer exercise in a minimalist studio",
    title: "Reframe Pilates",
    description: "Design system",
  },
  {
    href: "/work/everlane",
    image: "/everlane.svg",
    alt: "Everlane Logo",
    title: "Everlane Spec",
    description: "Spec redesign & development",
    video: "/everlane-showreal.mp4",
  },
  {
    href: "/work/tlc",
    image: "/tlc-preview-image.svg",
    alt: "The Little Chihuahua Logo",
    title: "The Little Chihuahua Merch/Marketing",
    description: "E-commerce design/development + email marketing",
    video: "/tlc-showreal.mp4",
    isTLC: true,
  },
];

export default function Work() {
  return (
    <main className="w-full dynamic-padding flex flex-col dynamic-gap-9">
      <ul className="flex flex-wrap gap-6 w-full">
        {projects.map(({ href, image, alt, title, description, video, isTLC }) => {
          const mediaRef = useRef(null);
          const hasVideo = Boolean(video);

          return (
            <li
              key={href}
              className={`flex flex-col ${isTLC ? "h-full" : "h-fit"} w-full lg:w-[606px]`}
            >
              <article
                className={`group flex flex-col overflow-hidden ${isTLC ? "h-full" : "h-fit"}`}
                onMouseEnter={() => mediaRef.current?.play()}
                onMouseLeave={() => {
                  if (mediaRef.current) {
                    mediaRef.current.pause();
                    mediaRef.current.currentTime = 0;
                  }
                }}
              >
                <a
                  href={href}
                  aria-label={`View project ${title}`}
                  className={`flex flex-col w-full ${isTLC ? "min-h-[710px] h-full" : "h-fit max-w-[606px]"}`}
                >
                  <div
                    className={`relative ${
                      isTLC
                        ? "flex-1 min-h-[492px] w-full lg:min-w-[606px] h-full"
                        : "h-fit max-w-[606px] w-full"
                    }`}
                  >
                    {hasVideo && (
                      <video
                        ref={mediaRef}
                        src={video}
                        muted
                        playsInline
                        loop
                        preload="metadata"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    )}
                    <Image
                      src={image}
                      alt={alt}
                      {...(isTLC ? { fill: true } : { width: 606, height: 400 })}
                      className={`object-cover w-full h-auto ${hasVideo ? "group-hover:opacity-0 transition-opacity duration-300" : ""}`}
                    />
                  </div>

                  <div className="flex flex-col py-6 shrink-0">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="text-white/75">{description}</p>
                  </div>
                </a>
              </article>
            </li>
          );
        })}
      </ul>
    </main>
  );
}