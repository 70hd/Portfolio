"use client";
import React, { useState } from "react";
import TestimonialSelect from "./testimonial-select";

export default function NavTestimonialContext() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const info = [
    { name: "Context", text: "Full-stack ecommerce..." },
    { name: "Description", text: "Smart search, clean UI…" },
    { name: "Duration", text: "Apr 30 - Jan 5" },
    { name: "Tools", text: "Figma + Visual Studio Code" },
    { name: "Collaborators", text: "Kane Fernandez" },
    { name: "Role", text: "Head designer/developer" },
  ];

  const descriptions = [
    "As a spec project to improve my design and development skills, I rebuilt the Everlane ecommerce experience from scratch. This included creating branded assets like newsletters and coding features such as product pages and database integration.",
    "Designed and built a responsive ecommerce site with login, saved carts, wishlists, popups, animations, product filtering, smart search, and a searchable FAQ with 50+ answers—all powered by a MySQL database.",
    "I began planning and designing this spec project on January 5th, building a full design system. Development started January 28th, and over nearly three months I built a robust database, integrated product data, and user authentication.",
    "I used two powerful tools: Figma and Visual Studio Code. In Figma, I quickly designed pages while building a reusable component library for future designers. Visual Studio Code gave me full control over development, ensuring clean, high-performance code without bugs.",
    "I independently planned, designed, and developed this website from start to finish—handling everything from layout and component structure to front-end development, user experience, and database integration.",
    "I led both design and development—making all key decisions with UX and conversion in mind, while ensuring the site stayed authentic to Everlane’s original experience.",
  ];

  return (
    <section
      aria-labelledby="testimonial-context-heading"
      className="bg-white dynamic-padding flex flex-col md:flex-row dynamic-gap-9 items-center justify-center"
    >
      {/* Selection panel */}
      <div className="flex flex-col dynamic-gap-3 w-full max-w-[492px]">
        <h2 id="testimonial-context-heading" className="text-black">
          Context
        </h2>
        <nav aria-label="Select testimonial item">
          <TestimonialSelect
            fill
            testimonials={info}
            setIsHoveredTestimonial={setSelectedIndex}
            nav
            isHoveredTestimonial={selectedIndex}
          />
        </nav>
      </div>

      {/* Description panel */}
      <div
        role="region"
        aria-live="polite"
        aria-label="Testimonial description"
        className="h-fit md:px-12 md:py-6 w-full max-w-[492px]"
      >
        <p className="text-black/50">
          {descriptions[selectedIndex]}
        </p>
      </div>
    </section>
  );
}