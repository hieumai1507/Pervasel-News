"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import { useCollectionTypesStores } from "@/app/apis/stores/collectionTypesStore";
import { getImageURL } from "@/app/libs/function";

import Container from "@/app/components/Commons/Container";
import Heading from "@/app/components/Commons/Heading";
import Richtext from "@/app/components/Commons/RichText";

interface OurServicesProps {
  heading: string;
}

const OurServices = ({ heading }: OurServicesProps) => {
  const [services, setServices] = useState<any>({});
  const { getServicesItems } = useCollectionTypesStores();

  useEffect(() => {
    const onSuccess = (res: any) => {
      if (res) setServices(res);
    };
    getServicesItems(`?populate=*&locale=en`, onSuccess);
  }, [getServicesItems]);

  return (
    <div id="our-services" className="mt-20">
      <Container>
        <Heading
          headingTag="h2"
          className="text-left md:text-center text-[24px] md:text-[40px] text-[#333333] be-vietnam-pro-semibold relative after:absolute after:content-[''] after:w-[60px] md:after:w-[80px] after:h-[4px] after:bg-[#FF914D] after:left-0 md:after:left-1/2 md:after:-translate-x-1/2 after:bottom-[-10px] mb-[52px] md:mb-[68px]"
          heading={heading}
        />
        <div className="mt-5 flex flex-wrap -mx-[15px]">
          {services.length > 0 &&
            services.map((item: any, index: number) => (
              <div
                key={index}
                className="w-full lg:w-[50%] mb-[25px] md:px-[15px] md:mb-[30px]"
              >
                <div className="h-full p-5 flex flex-wrap hover:bg-[rgb(var(--second-rgb)_/5%)] rounded-md border-[1px]">
                  <div className="mb-10 mr-[10px] lg:mb-0 lg:mr-10 w-[50px] h-[50px] md:w-[80px] md:h-[80px] flex items-center justify-center rounded-full bg-[rgb(var(--second-rgb)_/50%)]">
                    {item?.attributes?.Image && (
                      <Image
                        src={getImageURL(
                          item?.attributes?.Image?.data.attributes.url
                        )}
                        alt={
                          item?.attributes?.Image.data.attributes
                            .alternativeText
                        }
                        width={40}
                        height={40}
                        priority={false}
                      />
                    )}
                  </div>
                  <div className="w-full flex-1">
                    <Heading
                      headingTag="h3"
                      className="text-[24px] md:text-[32px] leading-[140%] tracking-[0.5px] text-[#333333] !be-vietnam-pro-regular"
                      heading={item?.attributes?.Title}
                    />
                    <div className="text-[15px] md:text-[19px] leading-[140%] tracking-[0.5px] text-[#333333] be-vietnam-pro-light">
                      {item?.attributes?.Content && (
                        <Richtext richtextContent={item?.attributes?.Content} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default OurServices;
