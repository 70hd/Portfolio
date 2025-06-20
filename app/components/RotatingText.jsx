import { useEffect, useRef } from "react";
import "./RotatingText.css";

export default function RotatingText() {
  const circleRef = useRef(null);
  const PHONE_BREAKPOINT = 576; // px

  useEffect(() => {
    const letters = "200911★302009★".split("");
    const radius = 50;
    const angleStep = (2 * Math.PI) / letters.length;

    const draw = () => {
      const circle = circleRef.current;
      if (!circle) return;
      circle.innerHTML = "";
      letters.forEach((letter, i) => {
        const span = document.createElement("span");
        span.innerText = letter;
        const angle = i * angleStep;
        span.style.position = "absolute";
        span.style.transform = `
          translate(${radius * Math.cos(angle)}px, ${radius * Math.sin(angle)}px)
          rotate(${(angle * 180) / Math.PI}deg)
        `;
        circle.appendChild(span);
      });
    };

    const clear = () => {
      const circle = circleRef.current;
      if (circle) circle.innerHTML = "";
    };

    const handleResize = () => {
      if (window.innerWidth > PHONE_BREAKPOINT) {
        draw();
      } else {
        clear();
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // initial run

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="rotating-text-container p1 text-[#DC57A0]">
      <div ref={circleRef} className="rotating-text"></div>
    </div>
  );
}