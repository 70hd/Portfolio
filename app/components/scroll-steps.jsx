"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const frameCount = 31;
const imagePaths = Array.from({ length: frameCount }, (_, i) => `/step-${i + 1}.png`);

export default function ScrollSteps() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const containerRef = useRef(null);
  const requestRef = useRef(null);
  const targetFrame = useRef(0);
  const currentLerp = useRef(0);

  const EXTRA_SCROLL_PX = 1000;

  const animate = () => {
    currentLerp.current += (targetFrame.current - currentLerp.current) * 0.1;
    const rounded = Math.round(currentLerp.current);
    if (rounded !== currentFrame) {
      setCurrentFrame(rounded);
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.offsetTop;
      const scrollTop = window.scrollY - containerTop;
      const scrollHeight = containerRef.current.offsetHeight - window.innerHeight;

      // Include the extra sticky space in the scroll range
      const extendedScroll = scrollHeight + EXTRA_SCROLL_PX;
      const scrollFraction = Math.min(1, Math.max(0, scrollTop / extendedScroll));

 targetFrame.current = Math.floor((1 - scrollFraction) * (frameCount - 1));
    };

    window.addEventListener("scroll", handleScroll);
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(requestRef.current);
    };
  }, [currentFrame]);

  return (
<div
  ref={containerRef}
  className="relative w-full h-[300px] md:min-h-[2000px] lg:min-h-[2500px] xl:min-h-[3000px]"
>
      <div className="sticky top-0 h-screen w-full flex flex-col items-start justify-start dynamic-gap-9 dynamic-y-padding">
        <div className="flex flex-col dynamic-gap-3 dynamic-x-padding w-full "> 
          <h2>Components</h2>
          <p className="text-white/75">Components designed and devloped with the user in mind</p>
        </div>
         <div className="flex dynamic-x-padding w-full "> 
        <Image
          src={imagePaths[currentFrame]}
          alt={`Scrolling animation of all everlanes spec components`}
          width={800}
          height={600}
          priority
          className="flex-1  w-full "
        />
        </div>
      </div>
    </div>
  );
}