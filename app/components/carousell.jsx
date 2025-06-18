"use client";

import React from "react";
import Image from "next/image";

const carouselItems = [
  {
    src: "/tlc-product-image.png",
    alt: "Close-up of two carnitas tacos in a metal tray with lime wedge",
  },
  {
    src: "/tlc-cart-card.png",
    alt: "Product page snippet showing size selector (XS S M L XL) and 'Quick Add' button",
  },
  {
    src: "/tlc-product-preview-card.png",
    alt: "Cart item card labeled 'Low Stock' for Carnitas Taco with price range $25–$35",
  },
  {
    src: "/tlc-how-do-i-get-it.png",
    alt: "Section titled 'How to Get It' listing pickup address and available time window",
  },
  {
    src: "/tlc-calendar.png",
    alt: "Inline calendar widget showing a month grid with selectable dates",
  },
  {
    src: "/tlc-custom-pickup-time.png",
    alt: "Modal titled 'Customize Pickup Time' with dropdowns for location, date, and time",
  },
  {
    src: "/tlc-left-right.png",
    alt: "Two-column call-to-action: 'EAT, EARN, ENJOY!' text beside a photo of a man in a The Little Chihuahua t-shirt",
  },
];

export default function LoopingStrip() {
  return (
    <section
      aria-labelledby="component-showcase-heading"
      className="relative flex flex-col w-full overflow-hidden dynamic-gap-9 dynamic-padding"
    >
      {/* Heading */}
      <div className="flex flex-col dynamic-gap-3 dynamic-padding max-w-[606px] w-full">
        <h2 id="component-showcase-heading">Component showcase</h2>
        <p className="text-white/75">
          Conversion-focused components, designed and built for performance
          and conversions.
        </p>
      </div>

      {/* Animated looping list (decorative) */}
      <ul
        role="list"
        aria-hidden="true"
        className="flex w-max dynamic-gap-9 animate-slide"
      >
        {[...carouselItems, ...carouselItems].map((item, i) => (
           <li key={i} className="h-[333px] w-auto flex-shrink-0">
            <Image
              src={item.src}
              alt={item.alt}
              width={1000}
              height={1000}
              className="h-full w-auto object-contain"
              unoptimized
            />
          </li>
        ))}
      </ul>

      {/* Keyframes scoped to this component */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 30s linear infinite;
        }
      `}</style>
    </section>
  );
}