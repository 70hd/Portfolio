"use client";

import React from "react";
import ScrambleText from "./scrambleText";
import Image from "next/image";

export default function TimelineScroll() {
const steps = [
  {
    image: "/reframe-pilates-zoom-call.png",
    title: "Initial call",
    alt: "Screenshot of a video meeting with team members discussing project kickoff",
    description: "First meeting to align on goals and expectations.",
  },
  {
    image: "/reframe-pilates-gantt-chart.svg",
    title: "Gantt chart development",
    alt: "Diagram of a Gantt chart outlining project phases and timelines",
    description: "Mapped project timeline and milestones.",
  },
  {
    image: "/first-design-system-iteration-created.svg",
    title: "First design system iteration",
    alt: "Wireframe showing the first iteration of typography, colors, and layout components",
    description: "Initial design elements like typography and layout.",
  },
  {
    image: "/reframe-pilates-first-design-system.svg",
    title: "Refined to client needs",
    alt: "Mockup of the design system refined with brand‐specific styles and assets",
    description: "Adjusted system to match brand and vision.",
  },
  {
    image: "/reframe-pilates-final-design-system.svg",
    title: "Finalized system",
    alt: "Completed design system guide showing final color palette, icons, and component examples",
    description: "Ready for scalable use.",
  },
];
  return (
    <div className="relative w-full flex flex-col md:flex-row items-start dynamic-gap-9 dynamic-padding">
      <aside
        aria-labelledby="timeline-sidebar-title"
        className="min-w-[475px] flex flex-col gap-3 md:sticky top-10 self-start h-fit "
      >
        <h2 id="timeline-sidebar-title" className="sr-only">
          Reframe Pilates Website design system
        </h2>
        <ScrambleText noPadding copy="Reframe Pilates" />
        <p className="text-white/75">Website design system</p>
      </aside>

      <section
        aria-labelledby="timeline-content-title"
        className="flex-1 flex flex-col"
      >
        <h2 id="timeline-content-title" className="sr-only">
          Project timeline steps
        </h2>
        <ul role="list" className="m-0 p-0 flex flex-col dynamic-gap-9">
          {steps.map((step, idx) => (
            <li key={idx}>
              <figure className="flex flex-col dynamic-gap-3">
                <Image
                  src={step.image}
                  alt={step.alt}
                  width={737}
                  height={285}
                  className="w-full"
                />
                <figcaption className="flex flex-col gap-3">
                  <h3>{step.title}</h3>
                  <p className="text-white/75">{step.description}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}