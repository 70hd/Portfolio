import React, { useState } from "react";

export default function TlcNav() {
  const [openIndex, setOpenIndex] = useState(null);

  const info = [
    {
      name: "Context",
      text: "For the past couple of years, The Little Chihuahua’s outdated merch website was managed through Square, but they were ready for an upgrade.",
    },
    {
      name: "Description",
      text: "I designed and built a clean, high-converting website with email automation that clearly represents The Little Chihuahua brand.",
    },
    { name: "Duration", text: "May 1 - Jun 6" },
    { name: "Tools", text: "Figma, Mailchimp, Zapier, Visual Studio Code, and Vercel" },
    { name: "Collaborators", text: "Kane Fernandez" },
    { name: "Role", text: "Head designer/developer" },
  ];

  return (
    <div className="w-full overflow-x-hidden box-border dynamic-padding bg-white">
      <div className="w-full flex flex-col dynamic-gap-9 md:flex-row md:justify-between items-start text-black">
        {/* Title */}
        <div className="md:min-w-[392px] flex flex-col dynamic-gap-3 break-words">
          <h1>The Little Chihuahua</h1>
          <p className="text-black/75">Website design/development</p>
        </div>

        {/* Accessible accordion */}
        <section
          aria-labelledby="project-details-heading"
          className="flex flex-col w-full max-w-[492px] box-border"
        >
          <h2 id="project-details-heading" className="sr-only">
            Project details
          </h2>
          <dl>
            {info.map((item, index) => (
              <div
                key={index}
                className="group p-3 relative overflow-hidden"
              >
                {/* Hover underline */}
                <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-black/20 to-black/70 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

                {/* Toggle button */}
                <dt>
                  <button
                    type="button"
                    aria-expanded={openIndex === index}
                    aria-controls={`panel-${index}`}
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="cursor-pointer text-black/75 w-full text-left"
                  >
                    {item.name}
                  </button>
                </dt>

                {/* Collapsible panel */}
                <dd
                  id={`panel-${index}`}
                  className={`overflow-hidden transition-all duration-500 text-black/50 ${
                    openIndex === index ? "max-h-[200px] mt-2" : "max-h-0"
                  }`}
                >
                  <p>{item.text}</p>
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </div>
  );
}