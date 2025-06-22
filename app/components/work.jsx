"use client";

import React, { useRef } from "react";
import Image from "next/image";
import ScrambleText from "./scrambleText";

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
    alt: "Three models wearing neutral-tone outfits in an Everlane spec redesign mockup",
    title: "Everlane Spec",
    description: "Spec redesign & development",
    gridPosition: "lg:col-start-1 lg:row-start-2",
    video: "/everlane-showreal.mp4",
  },
  {
    href: "/work/tlc",
    image: "/tlc-t-shirt.svg",
    alt: "Bearded man wearing a black The Little Chihuahua logo t-shirt against a painted mural backdrop",
    title: "The Little Chihuahua Merch",
    description: "E-commerce design/development",
    gridPosition: "lg:col-start-2 lg:row-span-2",
    isTLC: true,
  },
];

export default function Work() {
  return (
    <main className="w-full dynamic-padding flex flex-col dynamic-gap-9">
      {/* … */}
      <ul className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-6 w-full">
        {projects.map(
          ({
            href,
            image,
            alt,
            title,
            description,
            gridPosition,
            video,
            isTLC,
          }) => {
            // <-- just useRef(null) here
            const videoRef = useRef(null);

            return (
              <li key={href} className={`h-full ${gridPosition || ""}`}>
                <article
                  className="group flex flex-col h-full overflow-hidden"
                  onMouseEnter={() => videoRef.current?.play()}
                  onMouseLeave={() => {
                    const v = videoRef.current;
                    v?.pause();
                    if (v) v.currentTime = 0;
                  }}
                >
                  <a
                    href={href}
                    aria-label={`View project ${title}`}
                    className="flex flex-col h-full"
                  >
                    <div
                      className={`relative ${
                        isTLC ? "flex-1 min-h-[492px]" : ""
                      }`}
                    >
                      {video && (
                        <video
                          ref={videoRef}
                          src={video}
                          muted
                          playsInline
                          width={606}
                          height={400}
                          loop
                          preload="metadata"
                          className="object-cover w-full h-auto absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      )}
                      <Image
                        src={image}
                        alt={alt}
                        {...(isTLC
                          ? { fill: true }
                          : { width: 606, height: 400 })}
                        className={`object-cover w-full h-auto ${
                          video
                            ? "group-hover:opacity-0 transition-opacity duration-300"
                            : ""
                        }`}
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
          }
        )}
      </ul>
    </main>
  );
}
