"use client";
import React from "react";
import Image from "next/image";

export default function ProsCons() {
  const items = [
    {
      image: "/rose.png",
      title: "Rose",
      alt: "Styled UI card with sparkles and a circular rotating-number overlay, symbolizing highlights and wins",
      description:
        "I mastered implementing databases to manage user authentication and product storage.",
    },
    {
      image: "/thorn.png",
      title: "Thorn",
        alt: "Terminal window displaying the command npm install, representing a technical hurdle",
      description:
        "I had trouble saving user data before login and syncing it after they logged in—but by the end of this project, I learned how to do it smoothly.",
    },
  ];

  return (
    <section
      aria-labelledby="roses-thorns-heading"
      className="w-full z-100 bg-[#151515] dynamic-padding flex flex-col dynamic-gap-9"
    >
      <div className="w-full max-w-[606px] flex flex-col dynamic-gap-3">
        <h2 id="roses-thorns-heading" className="h2">
          Roses & thorns
        </h2>
        <p className="text-white/75">
          I experienced both roses and thorns throughout this project — each one
          teaching me something valuable.
        </p>
      </div>

      <ul role="list" className="w-full h-fit flex dynamic-gap-9 md:flex-row flex-col">
        {items.map(({ image, title, description,alt }, i) => (
          <li key={i} className="w-full flex flex-col dynamic-gap-6">
            <figure>
              <Image
                src={image}
                width={606}
                height={484}
                alt={alt}
                aria-hidden="true"
              />
              <figcaption className="w-full flex flex-col dynamic-gap-3 mt-3">
                <h3 className="h2">{title}</h3>
                <p className="text-white/75">{description}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}