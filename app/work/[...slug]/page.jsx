"use client";

import React from "react";
import BeforeAfterSlider from "@/app/components/before-after";
import ProductCarousel from "@/app/components/carousell";
import ComponentShowcase from "@/app/components/component-showcase";
import PixelButton from "@/app/components/primary-button";
import ProcessScroll from "@/app/components/process.scroll";
import ProsCons from "@/app/components/pros-cons";
import ScrambleText from "@/app/components/scrambleText";
import ScrollSteps from "@/app/components/scroll-steps";
import TwoSectionScroll from "@/app/components/two-section-scroll";
import TimelineScroll from "@/app/components/timeline-scroll";

const Testimonial = ({ desc, title, cta, link }) => (
  <section
    aria-labelledby={`testimonial-${cta.replace(/\s+/g, "-")}`}
    className="bg-[#151515] overflow-x-hidden flex flex-col md:flex-row-reverse dynamic-padding justify-between gap-6 px-6 py-12"
  >
    <h2 id={`testimonial-${cta.replace(/\s+/g, "-")}`} className="sr-only">
      Testimonial
    </h2>
    <div className="flex flex-col gap-3 max-w-[606px]">
      <p className="text-white/75">{desc}</p>
      <p className="text-white">{title}</p>
    </div>
    <PixelButton cta={cta} link={link} />
  </section>
);

const Timeline = [
  {
    total: 4,
    title: "Website design",
    desc: "Designed to reflect TLC’s identity, using the same fonts, colors, and overall aesthetic to make it instantly recognizable as The Little Chihuahua",
    image1: "/tlc-merch-design-website-image2.png",
    image1Alt: "TLC merch design layout",
    image2: "/tlc-merch-design-website-image1.png",
    image2Alt: "TLC merch design detail",
  },
  {
    total: 4,
    title: "Website development",
    desc: "Built for conversions, UX, and accessibility—ensuring a simple and exceptional experience for everyone",
    image1: "/tlc-merch-development-website-image1.png",
    image1Alt: "TLC merch development layout",
    image2: "/tlc-merch-development-website-image2.png",
    image2Alt: "TLC merch development detail",
  },
  {
    total: 4,
    title: "Email automation",
    desc: "Integrated third-party tools to automate user confirmation and contact form emails",
    image1: "/tlc-merch-email-automation-image1.png",
    image1Alt: "Email automation flow",
    image2: "/tlc-merch-email-automation-image2.png",
    image2Alt: "Automation settings",
  },
  {
    total: 4,
    title: "Email marketing/design",
    desc: "Designed and marketed high-converting promotional emails for various campaigns",
    image1: "/tlc-merch-email-design-image1.png",
    image1Alt: "Email marketing design",
    image2: "/tlc-merch-email-design-image2.png",
    image2Alt: "Campaign result preview",
  },
];

function ReframeSection() {
  return (
    <section className="w-full overflow-x-hidden flex flex-col dynamic-gap-9">
      <ComponentShowcase />
      <TimelineScroll />
      <Testimonial
        desc="Kane is a warm and friendly person with a passion for design. His sincere desire to do things well was appreciated."
        title="-Kane Fernandez"
        cta="View live website"
        link="https://everlane-spec-project.vercel.app/"
      />
    </section>
  );
}

function TLCSection() {
  return (
    <section className="w-full overflow-x-hidden flex flex-col dynamic-gap-9">
      <BeforeAfterSlider
        title="Before and after"
        desc="A side-by-side comparison of the old TLC Merch website and the current live TLC Merch site."
        beforeImage="/tlc-merch-before.png"
        afterImage="/tlc-merch-after.png"
        prevAlt="The Little Chihuahuas old merch website"
        afterAlt="The Little Chihuahuas new merch redesigned website"
      />
      <ProductCarousel />
      <div className="relative overflow-x-hidden">
        {Timeline.map((item, index) => (
          <TwoSectionScroll
            key={index}
            title={item.title}
            desc={item.desc}
            image1={item.image1}
            image1Alt={item.image1Alt}
            image2={item.image2}
            image2Alt={item.image2Alt}
          />
        ))}
      </div>
      <Testimonial
        desc="Kane is a warm and friendly person with a passion for design. His sincere desire to do things well was appreciated."
        title="-Kane Fernandez"
        cta="View live website"
        link="https://www.thelittlechihuahuamerch.com/"
      />
    </section>
  );
}

const EverlaneSection = () => (
  <div className="flex flex-col dynamic-gap-9 items-center justify-center">
    <BeforeAfterSlider
      title="Before and after"
      desc="A side-by-side comparison of my Everlane spec website and the current live Everlane site."
      beforeImage="/everlane-before.png"
      afterImage="/everlane-after.png"
      prevAlt="Everlanes current live website"
      afterAlt="Everlanes spec redesigned website"
    />
    <div className="sticky top-0 z-[-100] overflow-hidden h-fit">
      <ScrollSteps />
    </div>

    <div className="bg-[#151515] flex flex-col gap-9 z-10">
      <ProsCons />
      <ProcessScroll />
      <Testimonial
        cta={"View website"}
        link={"https://everlane-spec-project.vercel.app/"}
      />
    </div>
  </div>
);

const Work = ({ params }) => {
  const { slug } = React.use(params);

  if (!slug || !["reframe", "everlane", "tlc"].includes(slug[0])) {
    return <p>Not Found</p>;
  }

  return (
    <div className="mt-6">
      {slug[0] === "tlc" && <TLCSection />}
      {slug[0] === "reframe" && <ReframeSection />}
      {slug[0] === "everlane" && <EverlaneSection />}
    </div>
  );
};

export default Work;
