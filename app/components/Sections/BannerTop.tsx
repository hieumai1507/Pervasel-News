"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAnglesRight } from "react-icons/fa6";
import Carousel from "react-multi-carousel";

import { useSingleTypesStores } from "@/app/apis/stores/singleTypesStores";
import { getImageURL } from "@/app/libs/function";
import { initialResponsive } from "@/app/libs/carousel";

import Container from "@/app/components/Commons/Container";
import Richtext from "@/app/components/Commons/RichText";

import LogoImage from "@/public/images/logo.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const BannerTop = () => {
  const [bannerTopList, setBannerTopList] = useState<any>([]);
  const [renderDotsOutside, setRenderDotsOutside] = useState(false);
  const { getBannerTopCarousel, loading } = useSingleTypesStores();

  useEffect(() => {
    const onSuccess = (res: any) => {
      if (res) setBannerTopList(res);
    };

    getBannerTopCarousel(`?populate=*&locale=en`, onSuccess);
  }, [getBannerTopCarousel]);

  useEffect(() => {
    const checkScreenWidth = () => {
      if (typeof window !== "undefined") {
        setRenderDotsOutside(window.innerWidth < 768);
      }
    };
    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  const CustomDot = ({ onMove, index, onClick, active }: any) => {
    return (
      <li
        key={bannerTopList[index]?.id}
        className={`${active ? "active" : "inactive"} relative`}
      >
        <div
          className={`z-[1] relative ${
            active ? "w-[50px] h-[50px]" : "w-[30px] h-[30px]"
          } overflow-hidden transition-all duration-500 cursor-pointer mx-auto`}
          onClick={() => onClick()}
        >
          {bannerTopList[index]?.attributes?.BrandFavicon && (
            <Image
              src={
                getImageURL(
                  bannerTopList[index]?.attributes?.BrandFavicon?.data
                    ?.attributes?.url
                ) || LogoImage
              }
              alt={
                bannerTopList[index]?.attributes?.BrandFavicon?.data?.attributes
                  ?.alternativeText || "Banner top"
              }
              fill
              className="object-cover w-full h-auto"
            />
          )}
        </div>
      </li>
    );
  };

  return (
    <div className="relative overflow-hidden">
      {bannerTopList.length > 0 && (
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              const banner = bannerTopList[index];
              const faviconUrl =
                banner?.attributes?.BrandFavicon?.data?.attributes?.url;
              const altText =
                banner?.attributes?.BrandFavicon?.data?.attributes
                  ?.alternativeText || "Pagination Image";

              return `
                <div class="${className} custom-pagination">
                  <div class="pagination-image-wrapper">
                    <img
                      src="${getImageURL(faviconUrl) || LogoImage.src}"
                      alt="${altText}"
                      class="pagination-image"
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>
              `;
            },
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Thiết lập autoplay
          className="mySwiper"
        >
          {bannerTopList.map((banner: any) => {
            const bannerTopImage = banner?.attributes?.Image?.data?.attributes;

            return (
              <SwiperSlide key={banner.id}>
                <div className="pb-[75%] md:pb-[48.16%] md:h-screen relative">
                  <Image
                    src={getImageURL(bannerTopImage?.url) || LogoImage}
                    alt={bannerTopImage?.alternativeText || "Banner Top"}
                    className="object-cover w-full h-auto"
                    fill
                    priority={true}
                    onClick={() => {
                      if (banner.attributes.Link) {
                        window.open(banner.attributes.Link, "_blank");
                      }
                    }}
                  />
                  <div className="absolute right-0 bottom-[2rem] md:bottom-[6.5rem] left-0 flex text-center justify-center z-[1] text-white">
                    <div className="container mx-auto px-[15px] leading-[3rem] md:leading-7">
                      {banner?.attributes?.BrandLogo?.data?.attributes && (
                        <Image
                          src={
                            getImageURL(
                              banner?.attributes?.BrandLogo?.data?.attributes
                                ?.url
                            ) || LogoImage
                          }
                          alt={
                            bannerTopImage?.alternativeText ||
                            "Banner Top Brand"
                          }
                          className="w-full h-auto max-w-[14rem] max-h-[5rem] mx-auto object-cover"
                          width={100}
                          height={50}
                          priority={false}
                          onClick={() => {
                            if (banner.attributes.Link) {
                              window.open(banner.attributes.Link, "_blank");
                            }
                          }}
                        />
                      )}
                      {banner.attributes.Caption?.length > 0 &&
                        banner.attributes.Caption[0].children?.[0].text !==
                          "" && (
                          <div className="text-[16px] md:text-[32px] be-vietnam-pro-bold leading-[24px]">
                            <Richtext
                              richtextContent={banner.attributes.Caption}
                            />
                          </div>
                        )}
                      {/* {banner.attributes.LinkTitle && (
                        <p>
                          <Link
                            href={banner.attributes.Link || "#"}
                            className="group"
                            target="_blank"
                          >
                            <span>{banner.attributes.LinkTitle}</span>
                            <FaAnglesRight className="inline-block ml-2 text-[12px] group-hover:animate-shakeNext" />
                          </Link>
                        </p>
                      )} */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default BannerTop;
