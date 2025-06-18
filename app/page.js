"use client";
import Image from "next/image";
import ScrambleText from "./components/scrambleText";
import { useIsHoveringContext } from "./context/cusor-context";
import Testimonial from "./components/testimonials";
import Work from "./components/work";

export default function Home() {
  const { isHovering, setIsHovering } = useIsHoveringContext();

  const servicesData = [
    {
      title: "Design",
      image: "/figma-icon.svg",
      alt: "Figma logo",
      color: "#FF99EE",
      services: [
        "Portfolio",
        "Website",
        "#E-commerce",
        "#Email design",
        "#Design system",
      ],
    },
    {
      title: "Development",
      image: "/Next-Js-icon.svg",
      alt: "Next.js logo",
      color: "#99B1FF",
      services: [
        "#Portfolio",
        "#Website",
        "#E-commerce",
        "#Email marketing",
      ],
    },
  ];

  return (
    <div className="w-full h-fit flex flex-col dynamic-gap-9 mt-6">
      <Work />

      <Testimonial setHoveredText={setIsHovering} />

      <div className="w-full h-fit dynamic-y-padding flex flex-col dynamic-gap-9">
        <ScrambleText copy={"Services"} />

        <div className="w-full h-fit dynamic-gap-9 flex md:flex-row flex-col dynamic-x-padding">
          {servicesData.map((item, index) => (
            <div
              key={index}
              className="w-full min-h-[434px] h-full dynamic-gap-9 flex flex-col justify-between p-6"
              style={{ backgroundColor: item.color }}
              onMouseEnter={() => setIsHovering(item.image)}
              onMouseLeave={() => setIsHovering("")}
            >
              <div className="w-fit h-fit flex flex-col dynamic-gap-3">
                {item.services.map((service, si) => (
                  <a
                    key={si}
                    href={`mailto:kanehfernandez@gmail.com?subject=Inquiry%20about%20a%20custom%20${service
                      .replace("#", "")
                      .toLowerCase()}%20project`}
                    className="inline-block w-fit"
                  >
                    <div className="w-fit h-fit flex p-3 bg-white hover:bg-[#DC57A0] hover:text-white border border-black text-black cursor-pointer">
                      <p className="text-black/75">{service}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="w-full h-fit flex dynamic-gap-3 items-center">
                <div className="w-fit h-fit flex p-3 bg-white border border-black text-black">
                  <Image
                    src={item.image}
                    width={15.27}
                    height={24}
                    alt={item.alt}
                    className="min-h-[24px] w-auto"
                  />
                </div>
                <ScrambleText copy={item.title} noPadding={true} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}