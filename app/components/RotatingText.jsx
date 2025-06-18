import { useEffect, useRef } from "react";
import "./RotatingText.css"; // Import the CSS file

export default function RotatingText() {
  const circleRef = useRef(null);

  useEffect(() => {
    const letters = "200911★302009★".split(""); // Your circular text
    const circle = circleRef.current;
    const radius = 50; // Adjust radius for spacing
    const angleStep = (2 * Math.PI) / letters.length;

    // Clear previous text
    circle.innerHTML = "";

    letters.forEach((letter, i) => {
      const span = document.createElement("span");
      span.innerText = letter;
      const angle = i * angleStep;

      span.style.position = "absolute";
      span.style.transform = `translate(${radius * Math.cos(angle)}px, ${
        radius * Math.sin(angle)
      }px) rotate(${(angle * 180) / Math.PI}deg)`;
      circle.appendChild(span);
    });
  }, []);

  return (
    <div className="rotating-text-container p1 text-[#DC57A0]">
      <div ref={circleRef} className="rotating-text"></div>
    </div>
  );
}
