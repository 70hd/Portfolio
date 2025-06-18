"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TwoSectionScroll({
  title,
  desc,
  image1,
  image2,
  image1Alt,
  image2Alt,
}) {
  const wrapperRef = useRef(null);

  // Watch scroll progress over this section
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Parallax values
  const containerY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={wrapperRef}
      className="relative w-full h-[200vh] dynamic-x-padding"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: containerY, opacity }}
          className="flex flex-col dynamic-gap-9 items-center justify-center w-full"
        >
          {/* Title & Description */}
          <div className="flex flex-col dynamic-gap-3 text-center max-w-[606px] w-full">
            <h2>{title}</h2>
            <p className="text-white/75">{desc}</p>
          </div>

          {/* Images */}
          <div className="w-full flex sm:flex-row dynamic-gap-3 overflow-hidden">
            <motion.div
              style={{ y: imageY }}
              className="w-full max-w-[606px]"
            >
              <Image
                src={image1}
                alt={image1Alt}
                width={606}
                height={606}
                className="w-full object-contain"
              />
            </motion.div>

            <motion.div
              style={{ y: imageY }}
              className="w-full max-w-[606px]"
            >
              <Image
                src={image2}
                alt={image2Alt}
                width={606}
                height={606}
                className="w-full object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}