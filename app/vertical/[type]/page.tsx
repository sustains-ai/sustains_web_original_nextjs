import featuresTabData from "@/app/common/components/Features/featuresTabData";
import SidebarLink from "../../common/components/SidebarLink";
import { Metadata } from "next";
import Image from "next/image";

export default function Vertical({ params,
}: {
  params: { type: string }
}) {

  const feature = featuresTabData.find(f => f.link === params.type)

  if (!feature) {
    return null
  }

  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Welcome to {feature?.title}</h1>

                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[542/492] w-full">
                    <Image
                      src={feature.image}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <p className="mb-5">{feature.desc1}</p>
                <p className="w-11/12">{feature.desc2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
