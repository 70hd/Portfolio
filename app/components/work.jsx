"use client";

import React from "react";
// import Link from "next/link";
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
    <main
      role="main"
      className="w-full dynamic-padding flex flex-col dynamic-gap-9"
    >
      {/* Header */}
      <header
        aria-labelledby="work-header"
        className="max-w-[606px] flex flex-col dynamic-gap-3"
      >
        <h1 id="work-header" className="sr-only">
          Projects
        </h1>
        <ScrambleText noPadding copy="Projects" />
        <p className="text-white/75">What I’ve been working on</p>
      </header>

      {/* Projects grid */}
      <ul
        role="list"
        className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-6 w-full"
      >
        {projects.map(({ href, image, alt, title, description, gridPosition, isTLC }) => (
          <li key={href} className={`h-full ${gridPosition || ""}`}>
            <article className="group flex flex-col h-full overflow-hidden">
              <a href={href} aria-label={`View project ${title}`} className="flex flex-col h-full">
                {/* Image */}
                <div className={isTLC ? "relative flex-1 w-full min-h-[492px]" : ""}>
                  <Image
                    src={image}
                    alt={alt}
                    {...(isTLC
                      ? { fill: true }
                      : { width: 606, height: 400 })}
                    className="object-cover w-full h-auto"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col py-6 shrink-0">
                  <h2 className="text-xl font-semibold">{title}</h2>
                  <p className="text-white/75">{description}</p>
                </div>
              </a>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}