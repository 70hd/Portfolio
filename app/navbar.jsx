import React, { useEffect, useState } from "react";
import ScrambleEmailText from "./components/scrambleEmailText";
import NavTestimonialContext from "./components/nav-testimonial-context";
import TlcNav from "./components/tlc-nav";
import ReframeNav from "./components/reframe-nav";

export default function Navbar() {
  const [isWorkPage, setIsWorkPage] = useState(false);
  const [reframe, setReframe] = useState(false);
  const [everlane, setEverlane] = useState(false);
  const [tlc, setTlc] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      if (path.includes("/work/reframe")) {
        setReframe(true);
        setIsWorkPage(true);
      } else if (path.includes("/work/everlane")) {
        setEverlane(true);
        setIsWorkPage(true);
      } else if (path.includes("/work/tlc")) {
        setTlc(true);
        setIsWorkPage(true);
      }
    }
  }, []);

  return (
    <header>
      {/* Primary navbar */}
      <nav
        aria-label="Main navigation"
        className="sticky top-0 z-[999] bg-[#151515] flex justify-between w-full h-[75px] items-center dynamic-padding"
      >
        <a href="/" aria-label="Home" className="cursor-pointer">
          <div className="type-writer w-fit">
            <p className="nav-body">Kane Fernandez</p>
          </div>
        </a>
        <a
          href="mailto:kanehfernandez@gmail.com"
          aria-label="Send email to Kane Fernandez"
          className="inline-block w-fit"
        >
          <ScrambleEmailText copy="San Francisco, California" noPadding={true} />
        </a>
      </nav>

      {/* Secondary content for non-work pages */}
      {!isWorkPage && (
        <section
          aria-labelledby="about-heading"
          className="w-full h-fit dynamic-padding bg-white"
        >
          <div className="w-full h-fit flex flex-col dynamic-gap-9 md:flex-row md:justify-between items-start text-black">
            {/* About Section */}
            <article className="max-w-[492px] w-full flex flex-col dynamic-gap-3">
              <h2 id="about-heading">About</h2>
              <p className="text-black/75">
                Kane Fernandez is a 15-year-old website designer/developer.
                <br /> He thrives in building high-end websites for small businesses.
                <br /> He has received mentorship from professional designers and developers, including{' '}
                <a
                  href="https://www.linkedin.com/in/ryandavidholmes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Ryan Holmes Postscript
                </a>,{' '}
                <a
                  href="https://www.linkedin.com/in/asjohnson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Andy Johnson United Dsn
                </a>, and{' '}
                <a
                  href="https://www.linkedin.com/in/ryandavidholmes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Dan Wittmer Youtube
                </a>. If you have an interesting idea, please get in touch{' '}
                <span className="text-[#DC57A0]" aria-hidden="true">
                  ↗
                </span>
                .
              </p>
            </article>

            {/* Accomplishments Section */}
            <article className="max-w-[492px] w-full flex flex-col dynamic-gap-3">
              <h2 id="accomplishments-heading">Accomplishments</h2>
              <p className="text-black/50">
                <span className="text-black/75">
                  Reframe Pilates project
                  <br /> 2024 - 2025
                </span>
                <br /> Incorporating brand personality and stunning visuals to craft the Reframe Pilates design system.
                <br /> <br />
                <span className="text-black/75">
                  The Little Chihuahua project
                  <br /> 2025
                </span>
                <br /> Working with The Little Chihuahua to create a seamless and easy-to-use online presence.
                <br /> <br />
                <span className="text-black/75">
                  Everlane Spec Project <br /> 2025
                </span>
                <br /> Recreated Everlane e-commerce website spec. Mastered developing and designing operational e-commerce site.
                <br /> <br />
                <span className="text-black/75">
                  The Little Chihuahua Merch<br /> 2025
                </span>
                <br /> Designing and developing an e-commerce website for The Little Chihuahua merch while maintaining brand integrity.
              </p>
            </article>
          </div>
        </section>
      )}

      {/* Contextual sub-navigation */}
      {reframe && <ReframeNav />}
      {tlc && <TlcNav />}
      {everlane && <NavTestimonialContext />}
    </header>
  );
}