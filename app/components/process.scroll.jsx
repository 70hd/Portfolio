"use client";
import React, { useState, useEffect } from "react";
import TestimonialSelect from "./testimonial-select";
import Image from "next/image";

export default function ProcessScroll() {
  const [scrollIndex, setScrollIndex] = useState(0);

  const timeline = [
    {
      name: "Research & strategy",
      text: "I kicked off the project on June 5, 2025, by diving into research on Everlane, their competitors, and target audience—laying the groundwork for a focused game plan.",
    },
    {
      name: "Component design",
      text: "With a clear plan in place, I moved into design—creating components that felt on-brand and user-friendly.",
    },
    {
      name: "UI design completion",
      text: "As the designs took shape, I focused on making them intuitive and effective, using research and psychology to guide decisions.",
    },
    {
      name: "Development & integration",
      text: "Then came development. I connected third-party tools, built out the full site based on my Figma design, and added animations to bring it to life.",
    },
    {
      name: "Performance & accessibility",
      text: "Next, I fine-tuned for performance and accessibility—making sure everything was fast, clean, and usable for everyone.",
    },
    {
      name: "Final launch",
      text: "Finally, I launched it on Vercel and set up analytics to keep things running smoothly and bug-free.",
    },
  ];

  const body = timeline.map(item => ({
    title: item.name,
    desc: item.text,
  }));

  const images = [
    "/everlane-research-and-strategy.png",
    "/everlane-component-design.png",
    "/everlane-ui-design-completion.png",
    "/development-and-integration.svg",
    "/performance-and-accessibility.svg",
    "/everlane-logo.svg",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const sectionTop = document.getElementById("process-scroll")?.offsetTop || 0;
      const sectionHeight = 2000; // match your container height

      const relative = scrollTop - sectionTop;
      const progress = Math.max(0, Math.min(relative / sectionHeight, 1));
      const idx = Math.floor(progress * timeline.length);
      setScrollIndex(Math.min(idx, timeline.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [timeline.length]);

  return (
    <section
      id="process-scroll"
      aria-labelledby="process-scroll-label"
      className="bg-[#151515] relative h-[3000px]"
    >
      {/* Accessible label */}
      <h2 id="process-scroll-label" className="sr-only">
        Spec Everlane project – Our process timeline
      </h2>

      <div className="bg-[#151515] sticky md:top-10 top-2 z-10 flex flex-col dynamic-gap-9 h-fit md:h-screen dynamic-padding">
        {/* Visible headings */}
        <div className="flex flex-col dynamic-gap-3 md:hidden">
          <h2 className="text-white">Spec Everlane project</h2>
          <p className="text-white/75">Our process</p>
        </div>
        <div className="hidden md:flex flex-col dynamic-gap-3">
          <h2 className="text-white">Spec Everlane project</h2>
          <p className="text-white/75">Our process</p>
        </div>

        <div className="flex flex-col-reverse md:flex-row dynamic-gap-9 w-full">
          {/* Navigation dots */}
          <div className="w-full h-fit flex flex-col gap-24 pr-6">
            <nav aria-label="Process steps">
              <TestimonialSelect
                testimonials={timeline}
                setIsHoveredTestimonial={setScrollIndex}
                isHoveredTestimonial={scrollIndex}
                fill
              />
            </nav>
          </div>

          {/* Current step image & text */}
          <div className="flex flex-col lg:flex-row dynamic-gap-9 items-start">
            <div
              role="region"
              aria-live="polite"
              aria-label={`Step ${scrollIndex + 1}: ${body[scrollIndex].title}`}
              className="
                flex justify-center items-center lg:p-6
                w-[185px] sm:w-[225px] md:w-[285px]  /* responsive widths */
                h-auto lg:h-[540px]
              "
            >
              <Image
                src={images[scrollIndex]}
                width={285}
                height={178}
                alt={`${body[scrollIndex].title} illustration`}
                className="w-full h-auto object-contain"
              />
            </div>

            <div
              role="region"
              aria-labelledby="process-step-title"
              className="flex flex-col dynamic-gap-3 min-w-[285px] max-w-[285px] h-fit"
            >
              <h3 id="process-step-title" className="text-white">
                {body[scrollIndex].title}
              </h3>
              <p className="text-white/75">{body[scrollIndex].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}