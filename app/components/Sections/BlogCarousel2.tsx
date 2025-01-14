"use client";
import { useEffect, useRef, useState } from "react";

import { useBlogsStore } from "@/app/apis/stores/blogsStores";
import Container from "../Commons/Container";
import BackgroundEllipse from "./BackgroundEllipse";
import Heading from "../Commons/Heading";
import Image from "next/image";
import Link from "next/link";
import { formatDateFromDate, getImageURL } from "@/app/libs/function";
import Carousel from "react-multi-carousel";
import Markdown from "@/app/components/Commons/Markdown";

interface BlogCarouselProps {}

const BlogCarousel = ({}: BlogCarouselProps) => {
  const ref = useRef<any>(null);
  const [blogsList, setBlogsList] = useState<any>([]);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const { getBlogs } = useBlogsStore();
  const commentResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const bgItems = [
    {
      width: 6.99,
      width_desktop: 9,
      top: 0,
      right: 2,
      bg: "linear-gradient(44.11deg, rgba(245, 198, 39, 0.6) 8.94%, rgba(255, 255, 255, 0) 86.73%)",
    },
  ];

  useEffect(() => {
    const onSuccess = (res: any) => {
      if (res) setBlogsList(res);
    };
    getBlogs(`?populate=*&locale=en`, onSuccess);
  }, [getBlogs]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative">
      <Container>
        <div
          className={`relative flex justify-between items-center mb-6 ${
            isIntersecting ? " animate__fadeInUp" : ""
          }`}
        >
          <Heading
            headingTag="h2"
            className="underline-title text-[24px] md:text-[40px] text-[#333333] be-vietnam-pro-semibold"
            heading="Blog"
          />

          <div className="text-right">
            <a
              href="/blogs"
              className="text-blue-500 text-[16px] md:text-[24px] leading-[24px] be-vietnam-pro-regular"
            >
              Read more &rarr;
            </a>
          </div>
        </div>
        {blogsList.length > 0 && (
          <div className={`mt-8 ${isIntersecting ? " animate__fadeInUp" : ""}`}>
            <Carousel
              responsive={commentResponsive}
              arrows={false}
              renderDotsOutside
              // showDots
              autoPlay
              infinite
              autoPlaySpeed={3000}
            >
              {blogsList.map((item: any) => {
                const itemTitle = item?.attributes?.Title;
                return (
                  <div
                    key={item?.id}
                    className="p-7 transition-all duration-300 hover:shadow-2xl mr-5 border-[2px]  ease-in-out  rounded-2xl"
                  >
                    <Link
                      className="group block rounded-lg overflow-hidden relative pb-[60%]"
                      href={{
                        pathname: `/blogs/${item?.id}`,
                      }}
                      title={itemTitle}
                    >
                      {item?.attributes?.Image && (
                        <Image
                          src={getImageURL(
                            item?.attributes?.Image?.data?.attributes?.url
                          )}
                          alt={
                            item?.attributes?.Image?.data?.attributes
                              ?.alternativeText || "Blog Post"
                          }
                          className="w-full  transition-all duration-700"
                          fill
                        />
                      )}
                    </Link>

                    <Link
                      className="group block rounded-lg overflow-hidden"
                      href={{
                        pathname: `/blogs/${item.id}`,
                      }}
                      title={itemTitle}
                    >
                      <h3 className="text-[18px] mt-[12px] sm:mt-[20px] sm:text-[24px]  line-clamp-1 text-[#333333] be-vietnam-pro-semibold ">
                        {itemTitle}
                      </h3>
                    </Link>
                    <div className="line-clamp-3 text-[#333333] text-[14px] leading-[140%] mt-2 sm:text-[16px] be-vietnam-pro-light">
                      <Markdown
                        markdownContent={item?.attributes?.Introduction}
                      />
                    </div>
                    <ul className="flex flex-wrap items-center mt-2 mb-[12px]  sm:mb-[20px] ">
                      {item?.attributes?.Collection && (
                        <li className="uppercase pr-2 text-[rgb(var(--second-rgb))] cursor-pointer">
                          {
                            item?.attributes?.Collection?.data?.attributes
                              ?.Title
                          }
                        </li>
                      )}
                      {item?.attributes?.publishedAt && (
                        <li className="text-[#C4C4C4] pr-2 text-[14px] sm:text-[16px] leading-[110%] be-vietnam-pro-regular">
                          {formatDateFromDate(
                            item?.attributes?.publishedAt,
                            "MMMM DD. YYYY"
                          )}
                        </li>
                      )}
                      {/* {item?.attributes?.Author && (
                        <li className="cursor-pointer  capitalize">
                          {item?.attributes?.Author?.data?.attributes?.username}
                        </li>
                      )} */}
                    </ul>
                    <Link
                      className="group"
                      href={{
                        pathname: `/blogs/${item.id}`,
                      }}
                    >
                      <div className="flex items-center text-[14px] md:text-[16px] be-vietnam-pro-regular leading-[24px] text-blue-500 hover:text-orange-500 hover:underline">
                        Read{" "}
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          ></path>
                        </svg>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </Carousel>
          </div>
        )}

        <BackgroundEllipse activeBlock={isIntersecting} data={bgItems} />
      </Container>
    </div>
  );
};

export default BlogCarousel;
