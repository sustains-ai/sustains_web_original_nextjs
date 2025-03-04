import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, image, link } = featureTab;

  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="mb-7 text-3xl font-bold text-black xl:text-sectiontitle2">
            {title}
          </h2>
          <p className="mb-5">{desc1}</p>
          <a
            href={`/vertical/${link}`}
            className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary"
          >
            <span className="duration-300 group-hover:pr-2 text-primary">Know More</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                fill="#0ABF53"
              />
            </svg>
          </a>
        </div>
        <div className="relative mx-auto hidden aspect-[542/492] max-w-[550px] md:block md:w-1/2">
          <Image src={image} alt={title} fill />
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
