import React from "react";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-[#151515] z-10 flex justify-between w-full h-[75px] sm:flex-row flex-col items-start dynamic-padding border border-t-white/10 border-l-0 border-r-0 border-b-0"
    >
      <a href="/" aria-label="Home" className="cursor-pointer">
        <p className="text-white nav-body">Kane Fernandez</p>
      </a>

      <address className="not-italic m-0">
        <a
          href="mailto:kanehfernandez@gmail.com"
          aria-label="Send email to Kane Fernandez"
          className="cursor-pointer"
        >
          <p className="nav-body">kanehfernandez@gmail.com</p>
        </a>
      </address>
    </footer>
  );
}