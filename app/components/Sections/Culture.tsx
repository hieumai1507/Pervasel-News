"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";

import { useSingleTypesStores } from "@/app/apis/stores/singleTypesStores";
import { initialResponsive } from "@/app/libs/carousel";
import { getImageURL } from "@/app/libs/function";

import Container from "../Commons/Container";
import Richtext from "../Commons/RichText";
import Heading from "../Commons/Heading";
import BackgroundEllipse from "./BackgroundEllipse";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

interface CultureProps {}

const Culture = ({}: CultureProps) => {
  const [culture, setCulture] = useState<any>({});
  const [cultureList, setCultureList] = useState<any>({});
  const [isIntersecting, setIsIntersecting] = useState(false);

  const { getCulture, getCultureItems, loading } = useSingleTypesStores();
  const ref = useRef<any>(null);
  const bgItems = [
    {
      width: 10,
      width_desktop: 20,
      top: 0,
      right: -5,
      bg: "linear-gradient(44.11deg, rgba(251, 137, 4, 0.6) 8.94%, rgba(255, 255, 255, 0) 86.73%)",
    },
    {
      width: 20,
      width_desktop: 40,
      left: -5,
      bottom: 2,
      bottom_mobile: -10,
      bg: "linear-gradient(44.11deg, rgba(241, 75, 33, 0.75) 8.94%, rgba(255, 255, 255, 0) 86.73%)",
    },
  ];

  useEffect(() => {
    const onSuccess = (res: any) => {
      if (res) setCulture(res);
    };

    const onSuccessCultureItem = (res: any) => {
      if (res) setCultureList(res);
    };

    getCulture(`?populate=*&locale=en`, onSuccess);
    getCultureItems(`?populate=*&locale=en`, onSuccessCultureItem);
  }, [getCulture, getCultureItems]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      }
      // { rootMargin: "-300px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative">
      <Container>
        {culture && (
          <div className="flex flex-wrap md:gap-10">
            <div
              className={`w-full md:flex-1 mb-[18px] md:mb-0 ${
                isIntersecting ? " animate__fadeInUp" : ""
              }`}
            >
              {culture.attributes?.Title && (
                <Heading
                  className="underline-title text-[24px] md:text-[40px] leading-[140%] tracking-[-1%] text-[#333333] be-vietnam-pro-semibold"
                  heading={culture.attributes?.Title}
                  headingTag="h2"
                />
              )}
              {culture.attributes?.Content && (
                <div className="text-[16px] md:text-[19px] leading-[140%] tracking-[0.5px] text-[#333333] be-vietnam-pro-light">
                  <Richtext richtextContent={culture.attributes?.Content} />
                </div>
              )}
            </div>
            <div
              className={`w-full md:w-[60%] culture-carousel ${
                isIntersecting ? " animate__fadeInUp" : ""
              }`}
            >
              {cultureList.length > 0 && (
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={true}
                  // pagination={{ clickable: true }}
                  navigation={true}
                  modules={[Pagination, Navigation, Autoplay]}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  className="-mx-3 md:mx-0 abc text-[20px] sm:text-[32px] leading-[140%] tracking-[0.5px] text-[#333333] be-vietnam-pro-semibold"
                >
                  {cultureList?.map((item: any) => (
                    <SwiperSlide key={item.id}>
                      {item.attributes?.Image && (
                        <div
                          className={`relative w-full pb-[56%] mb-[23px] md:mb-10 rounded-xl overflow-hidden`}
                        >
                          <Image
                            src={getImageURL(
                              item.attributes?.Image?.data?.attributes?.url
                            )}
                            alt={
                              item.attributes?.Image?.data?.attributes
                                ?.alternativeText || "Culture"
                            }
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div
                        className={`text-[15px] md:text-[19px] leading-[140%] tracking-[0.5px] text-[#333333] be-vietnam-pro-light  max-w-[750px] mx-auto px-2 md:px-10 line-clamp-[8] md:line-clamp-[8]`}
                      >
                        <Richtext richtextContent={item.attributes?.Content} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
        )}
      </Container>
      <BackgroundEllipse activeBlock={isIntersecting} data={bgItems} />
    </div>
  );
};

export default Culture;
