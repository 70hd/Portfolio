import React, { useState, useEffect, useRef } from "react";

const ScrambleText = ({ copy, noPadding }) => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const [text, setText] = useState(copy);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef(null);
  const h1Ref = useRef(null);

  const handleMouseOver = () => {
    let iterations = 0;
    setAnimating(true);

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setText((prevText) =>
        prevText
          .split("")
          .map((char, index) =>
            index < iterations ? copy[index] : letters[Math.floor(Math.random() * letters.length)]
          )
          .join("")
      );

      iterations += 1;

      if (iterations > copy.length) {
        clearInterval(intervalRef.current);
        setAnimating(false);
      }
    }, 50);
  };

  useEffect(() => {
    const h1Element = h1Ref.current;
    if (h1Element) {
      h1Element.addEventListener("mouseover", handleMouseOver);
    }

    return () => {
      if (h1Element) {
        h1Element.removeEventListener("mouseover", handleMouseOver);
      }
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    // <div>
      <h1
        ref={h1Ref}
        className={`h1 ${animating ? "text-[#DC57A0]" : "text-white"} ${noPadding ? "" : "dynamic-x-padding"} w-fit max-w-fit`}
      >
        {text}
      </h1>
  
  );
};

export default ScrambleText;