"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import { useSingleTypesStores } from "@/app/apis/stores/singleTypesStores";
import { getImageURL } from "@/app/libs/function";

import Richtext from "@/app/components/Commons/RichText";
import Heading from "@/app/components/Commons/Heading";

interface AboutInformationProps {}

const AboutInformation = ({}: AboutInformationProps) => {
  const [aboutIntroduction, setAboutIntroduction] = useState<any>({});
  const { getAboutInformation } = useSingleTypesStores();

  useEffect(() => {
    const onSuccess = (res: any) => {
      if (res) setAboutIntroduction(res);
    };
    getAboutInformation(`?populate=*&locale=en`, onSuccess);
  }, [getAboutInformation]);

  return (
    <div className="flex flex-wrap justify-between md:gap-10">
      {aboutIntroduction && (
        <>
          <div className="w-full lg:w-[50%] mb-[25px] lg:mb-0">
            <div>
              <Heading
                headingTag="h2"
                className="underline-title text-[24px] md:text-[40px] text-[#333333] be-vietnam-pro-semibold"
                heading={aboutIntroduction?.Title}
              />
              <div className="text-[16px] md:text-[19px] leading-[140%] tracking-[0.5px] text-[#333333] be-vietnam-pro-light">
                <Richtext richtextContent={aboutIntroduction.Content} />
              </div>
            </div>
          </div>
          <div className="w-full lg:flex-1">
            <div className="rounded-md overflow-hidden relative pb-[33px] ">
              {aboutIntroduction?.Image && (
                <div className="flex space-x-2 h-96 w-full">
                  <div className="relative w-1/3 h-full aspect-w-3 aspect-h-4">
                    <Image
                      src={getImageURL(
                        aboutIntroduction?.Image?.data.attributes?.url
                      )}
                      alt="Sliced Image 1"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="left"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="relative w-1/3 h-full aspect-w-3 aspect-h-4 transform translate-y-6">
                    <Image
                      src={getImageURL(
                        aboutIntroduction?.Image?.data.attributes?.url
                      )}
                      alt="Sliced Image 2"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="relative w-1/3 h-full aspect-w-3 aspect-h-4">
                    <Image
                      src={getImageURL(
                        aboutIntroduction?.Image?.data.attributes?.url
                      )}
                      alt="Sliced Image 3"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="right"
                      className="rounded-xl"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AboutInformation;
