"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import ScrambleText from "./scrambleText";
import TestimonialSelect from "./testimonial-select";

export default function Testimonial({ setHoveredText }) {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [isInViewport, setIsInViewport] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  const testimonials = [
    {
      text: "Kane is a warm and friendly person with clearly a passion for website design and development. His sincere desire to do things well was appreciated and noted. I have no doubt that given the right project setting Kane will deliver above and beyond expectations.",
      name: "Natalie Gabellone – design, design system",
    },
    {
      text: "Working with Kane was an absolute pleasure. He took our vague ideas and turned them into a sleek, responsive, and fast website that perfectly represents our brand. The best part? He delivered ahead of schedule!",
      name: "Andrew Johnstone – design/development, website",
    },
    {
      text: "Kane doesn’t just build websites—he crafts digital experiences. His expertise in both design and development meant we got a site that’s not only visually stunning but also functions flawlessly across all devices. Couldn’t be happier!",
      name: "Andy Johnson – mentor",
    },
    {
      text: "Kane’s ability to bring creative ideas to life is unmatched. From concept to launch, he was professional, communicative, and committed to delivering top-tier work. Our website now looks better than ever!",
      name: "Ryan Holmes – mentor",
    },
    {
      text: "I needed a developer who could handle both frontend and backend work seamlessly, and Kane exceeded all expectations. His coding is clean, his designs are intuitive, and his problem-solving skills are top-notch. Will definitely work with him again!",
      name: "Dan Wittmer – mentor",
    },
  ];

  const images = [
    "/reframe-logo.png",
    "/tlc-logo.png",
    "/andy-logo.png",
    "/ryan-logo.png",
    "/youtube-logo.png",
  ];

  const onIntersect = useCallback((entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      const { top } = entry.target.getBoundingClientRect();
      const threshold = 100;
      if (top <= threshold && top >= 0) {
        setIsInViewport(true);
        setIsAnimating(true);
      }
    } else {
      setIsInViewport(false);
      setIsAnimating(false);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      threshold: 0.1,
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [onIntersect]);

  return (
    <section
      ref={containerRef}
      aria-labelledby="testimonials-heading"
      className="w-full h-fit dynamic-padding flex flex-col dynamic-gap-9 z-0"
    >
      <h2 id="testimonials-heading" className="sr-only">
        Testimonials
      </h2>

      <ScrambleText copy="Testimonials" noPadding={true} />

      <div className="w-full h-fit flex md:flex-row items-center flex-col dynamic-gap-9">
        <nav className="w-full" aria-label="Select testimonial">
          <TestimonialSelect
            testimonials={testimonials}
            setIsHoveredTestimonial={setSelectedIndex}
            isHoveredTestimonial={selectedIndex}
            setHoveredText={setHoveredText}
            images={images}
          />
        </nav>

        <div
          role="region"
          aria-live="polite"
          aria-label={`Testimonial by ${testimonials[selectedIndex].name}`}
          className="w-full max-w-[606px] h-fit flex flex-col dynamic-gap-3 md:dynamic-y-padding md:px-12"
        >
          <blockquote className="text-white/75 m-0">
            {testimonials[selectedIndex].text}
          </blockquote>
          <p className="text-white mt-2">
        {testimonials[selectedIndex].name}
          </p>
        </div>
      </div>
    </section>
  );
}