import React, { useState, useEffect, useRef } from "react";

const ScrambleEmailText = ({ copy, noPadding }) => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const targetText = "Kanehfernandez@gmail.com"; // Desired text on hover
  const [text, setText] = useState(copy);
  const [hovered, setHovered] = useState(false);
  const intervalRef = useRef(null);
  const pRef = useRef(null);

  const handleMouseOver = () => {
    let iterations = 0;
    setHovered(true);
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setText((prevText) =>
        targetText
          .split("")
          .map((char, index) =>
            index < iterations ? targetText[index] : letters[Math.floor(Math.random() * letters.length)]
          )
          .join("")
      );

      iterations += 1;

      if (iterations > targetText.length) {
        clearInterval(intervalRef.current);
      }
    }, 50);
  };

  const handleMouseOut = () => {
    clearInterval(intervalRef.current);
    setHovered(false);
    setText(copy); // Revert to original text
  };

  useEffect(() => {
    const pElement = pRef.current;
    if (pElement) {
      pElement.addEventListener("mouseover", handleMouseOver);
      pElement.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      if (pElement) {
        pElement.removeEventListener("mouseover", handleMouseOver);
        pElement.removeEventListener("mouseout", handleMouseOut);
      }
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <p
      ref={pRef}
      className={`nav-body ${hovered ? "text-[#DC57A0]" : "text-white"} ${noPadding ? "" : "dynamic-x-padding"}  w-fit max-w-fit inline-block`}
    >
      {text}
    </p>
  );
  
};

export default ScrambleEmailText;
