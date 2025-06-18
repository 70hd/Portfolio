"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import DotCarousel from "./dot-animation";

export default function ComponentShowcase() {
  const [number, setNumber] = useState(0);
  const [direction, setDirection] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHasMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const components = [
    {
      image1: "/reframe-component-image-1.png",
      image1Alt:
        "Woman performing Pilates on a reformer in a clean, modern studio layout",
      image2: "/reframe-component-1.png",
      image2Alt: "Single-column section with CTA and supportive copy",
      title: "Multi section layout",
      desc: "Split layout that pairs key content with a featured image to spotlight a product or service.",
    },
    {
      image1: "/reframe-component-image-2.png",
      image1Alt: "Woman in pink leggings performing a plank on a yoga mat",
      image2: "/reframe-component-2.png",
      image2Alt: "Hero section with strong visual anchor and CTA",
      title: "Hero",
      desc: "Drive attention and clicks with a strong visual anchor and compelling CTA placement.",
    },
    {
      image1: "/reframe-component-image-3.png",
      image1Alt: "Woman performing glute bridge on a reformer during a class",
      image2: "/reframe-component-3.png",
      image2Alt: "Carousel-style section showcasing paid online sessions",
      title: "Class display",
      desc: "Use this carousel-style section to showcase paid online sessions.",
    },
    {
      image1: "/reframe-component-image-4.png",
      image1Alt:
        "Three-column grid showing benefits with icons and descriptions",
      image2: "/reframe-component-4.png",
      image2Alt: "Benefits highlight in three-part layout",
      title: "Benefits highlight section",
      desc: "Communicate your offering’s core benefits in a concise, digestible three-part layout.",
    },
    {
      image1: "/reframe-component-image-5.png",
      image1Alt:
        "Instructor doing advanced reformer Pilates move with arms extended",
      image2: "/reframe-component-5.png",
      image2Alt: "Image + text engaging content layout",
      title: "Image + text layout",
      desc: "Transforms static text sections into engaging content with dynamic visuals.",
    },
    {
      image1: "/reframe-component-image-6.png",
      image1Alt: "Fitness instructor smiling on a balcony in athletic wear",
      image2: "/reframe-component-6.png",
      image2Alt: "Get in touch form with image and fields",
      title: "Get in touch module",
      desc: "Encourage user inquiries by combining visual trust signals with a clean, functional form layout.",
    },
  ];

  const fadeMotion = {
    initial: hasMounted ? { opacity: 0, y: 6 } : false,
    animate: hasMounted ? { opacity: 1, y: 0 } : false,
    exit: hasMounted ? { opacity: 0, y: -6 } : false,
    transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
  };

  return (
    <section
      aria-labelledby="component-showcase-heading"
      className="dynamic-padding flex dynamic-gap-9"
    >
      {/* Screen-reader-only heading for the region */}
      <h2 id="component-showcase-heading" className="sr-only">
        Component showcase carousel
      </h2>

      {/* Left image preview */}
      <div
        role="region"
        aria-live="polite"
        aria-label={`${components[number].title} preview image`}
        className="px-3 lg:px-[64px] w-full hidden md:flex relative"
      >
        <AnimatePresence mode="wait">
          <motion.div key={number} {...fadeMotion} className="absolute inset-0">
            <Image
              src={components[number].image1}
              alt={components[number].image1Alt}
              fill
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right content & carousel */}
      <div
        role="region"
        aria-label="Component details and navigation"
        className="w-full md:max-w-[720px] flex flex-col items-center dynamic-gap-6"
      >
        {/* Animated second image */}
        <div className="flex dynamic-gap-6 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={number + "-inner"}
              {...fadeMotion}
              className="relative flex-1 h-[263.9px]"
            >
              <Image
                src={components[number].image2}
                alt={components[number].image2Alt}
                fill
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Title, description, and dot navigation */}
        <div className="flex flex-col items-center text-center dynamic-gap-3 w-[392px]">
          <h3>{components[number].title}</h3>
          <p className="text-white/75">{components[number].desc}</p>

          <DotCarousel
            number={number}
            setNumber={setNumber}
            setDirection={setDirection}
            total={components.length}
          />
        </div>
      </div>
    </section>
  );
}