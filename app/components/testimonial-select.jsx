import React from "react";

export default function TestimonialSelect({
  testimonials,
  fill,
  setIsHoveredTestimonial,
  isHoveredTestimonial,
  setHoveredText,
  images,
  nav,
  noHover
}) {
  return (
    <div
      className={`${fill ? "w-full" : "w-full max-w-[606px]"} h-fit flex flex-col gap-0`}
    >
      {testimonials.map((item, index) => {
        const isActive = isHoveredTestimonial === index;
        return (
          <div
            key={index}
            onMouseEnter={() => {
              if (!noHover ) {
                setIsHoveredTestimonial(index);
              }
              if (images && !nav) {
                setHoveredText(images[index]);
              }
            }}
            onMouseLeave={() => {
              if (images && !nav) {
                setHoveredText("");
              }
            }}
            className={`relative w-full items-center h-fit ${
              nav ? "md:p-3 p-[6px]" : "md:px-3 px-[6px] md:py-6 py-3"
            } border border-b-0 border-l-0 border-r-0 ${
              nav ? "flex justify-between" : ""
            } ${
              isActive
                ? nav
                  ? "bg-black border-t-black text-white"
                  : "bg-[#DC57A0] border-t-[#DC57A0] text-white"
                : nav
                ? "border-black/10"
                : "border-t-white"
            }`}
          >
            <p
              className={`${
                nav
                  ? isActive
                    ? "text-white w-[285px]"
                    : "w-[285px] text-black/75"
                  : isActive
                  ? "text-white"
                  : "text-white/75"
              }`}
            >
              {item.name}
            </p>
            {nav && (
              <p
                className={`${
                  !isActive ? "text-black/50" : "text-white"
                } w-[285px]`}
              >
                {item.text}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}