"use client";
import React from "react";

export default function ReframeNav() {
  const primaryInfo = [
    {
      title: "Context",
      description:
        "Natalie Gabellone is the proud founder of Reframe Pilates a Mobility and Pilates studio based in Berlin, Germany. Natalie was in need of a high quality system which conveys their brand values.",
    },
    {
      title: "Description",
      description:
        "Natalie Gabellone, the founder of Reframe Pilates, reached out to me for a full website redesign and development. After careful consideration, we decided to focus solely on system design.",
    },
  ];

  const secondaryInfo = [
    { title: "Role", description: "Head designer" },
    { title: "Collaborators", description: ["Kane Fernandez"] },
    { title: "Duration", description: "Oct 20 - Mar 6" },
    { title: "Tools", description: ["Figma", "Jitter"] },
  ];

  return (
    <section
      aria-labelledby="reframe-nav-heading"
      className="w-full h-fit dynamic-padding bg-white"
    >
      <div className="w-full h-fit flex flex-col dynamic-gap-9 md:flex-row md:justify-between items-start text-black">
        {/* Title */}
        <div className="min-w-[392px] flex flex-col dynamic-gap-3">
          <h1 id="reframe-nav-heading">Reframe Pilates</h1>
          <p className="text-black/75">Design system</p>
        </div>

        {/* Info panels */}
        <div className="flex flex-col dynamic-gap-6">
          {/* Context & Description */}
          <dl className="w-full flex dynamic-gap-9 flex-wrap">
            {primaryInfo.map((item, idx) => (
              <React.Fragment key={idx}>
                <dt className="sr-only">{item.title}</dt>
                <dd className="w-full h-fit flex flex-col dynamic-gap-3">
                  <p className="text-black/75">{item.title}</p>
                  <p className="text-black/50">{item.description}</p>
                </dd>
              </React.Fragment>
            ))}
          </dl>

          {/* Role, Collaborators, Duration, Tools */}
          <dl
            aria-label="Project details"
            className="w-full flex justify-between flex-wrap"
          >
            {secondaryInfo.map((item, idx) => (
              <React.Fragment key={idx}>
                <dt className="sr-only">{item.title}</dt>
                <dd className="w-fit h-fit flex flex-col dynamic-gap-3">
                  <p className="text-black/75">{item.title}</p>
                  {Array.isArray(item.description) ? (
                    <ul role="list" className="flex flex-col dynamic-gap-3">
                      {item.description.map((desc, i2) => (
                        <li key={i2} className="text-black/50">
                          <p>{desc}</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-black/50">{item.description}</p>
                  )}
                </dd>
              </React.Fragment>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}