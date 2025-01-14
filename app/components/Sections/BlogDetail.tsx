"use client";
import { useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import Image from "next/image";

import { formatDateFromDate, getImageURL } from "@/app/libs/function";
import { useCollectionTypesStores } from "@/app/apis/stores/collectionTypesStore";
import PageLoading from "@/app/components/Commons/PageLoading";
import Heading from "@/app/components/Commons/Heading";
import Markdown from "@/app/components/Commons/Markdown";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import { useBlogsStore } from "@/app/apis/stores/blogsStores";

const BlogDetail = ({ repo }: { repo?: any }) => {
  const [blogsList, setBlogsList] = useState<any>([]);
  const param = useParams();
  const { getBlogs } = useBlogsStore();
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [BlogById, setBlogById] = useState<any>({});
  const { getBlogsDetail, loading } = useCollectionTypesStores();
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

  useEffect(() => {
    const onSuccess = (res: any) => {
      if (res) setBlogsList(res);
    };
    getBlogs(`?populate=*&locale=en`, onSuccess);
  }, [getBlogs]);
  useEffect(() => {
    const onSuccess = (res: any) => {
      if (res) setBlogById(res);
    };
    getBlogsDetail(`${param.id}`, `?populate=*&locale=en`, onSuccess);
  }, [getBlogsDetail, param]);

  return (
    <>
      <div className="flex flex-wrap items-start mt-[15px] sm:mt-20">
        {loading && <PageLoading />}
        <div className="md:sticky md:top-[140px] md:w-[30%] transition-all">
          <Heading
            heading={BlogById?.Title}
            headingTag="h2"
            className="text-[24px] md:text-[32px] tracking-[0%] leading-[110%] be-vietnam-pro-semibold text-[#333333]"
          />
          <ul className="flex flex-wrap items-center gap-5 py-2">
            <li className="uppercase text-[rgb(var(--second-rgb))] cursor-pointer">
              {BlogById?.Collection?.data?.attributes?.Title}
            </li>
            <li>{formatDateFromDate(BlogById?.createdAt)}</li>
            <li className="cursor-pointer hover:text-[rgb(var(--second-rgb))] capitalize">
              {BlogById?.Author?.data?.attributes?.username}
            </li>
          </ul>
          <div className="group overflow-hidden rounded-lg relative pb-[66.79%]">
            {BlogById?.Image && (
              <>
                <Image
                  src={getImageURL(BlogById?.Image?.data?.attributes?.url)}
                  alt={
                    BlogById?.Image?.data?.alternativeText ||
                    BlogById?.attributes?.Image?.data?.name
                  }
                  className="object-cover w-full group-hover:scale-[1.2] transition-all duration-700"
                  fill
                />
              </>
            )}
          </div>
        </div>
        <div className="md:flex-1 be-vietnam-pro-light text-[#333333] text-[15px] sm:text-[19px] md:pl-10 blog-detail-content">
          <Markdown markdownContent={BlogById?.Content} />
          <div className="mt-[50px] flex flex-wrap items-center">
            <label>Tags:</label>
            <ul className="flex-1 ml-2">
              {BlogById?.Tags?.data?.map((tag: any) => (
                <li
                  key={tag.id}
                  className="inline-block mx-1 border  px-3 rounded-full bg-[#CEEAFF] text-[#055087]"
                >
                  {tag?.attributes?.Title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`relative flex justify-between mt-[92px] items-center  ${
            isIntersecting ? " animate__fadeInUp" : ""
          }`}
        >
          <Heading
            headingTag="h2"
            className="!mb-0 text-[24px] md:text-[40px] text-[#333333] be-vietnam-pro-semibold"
            heading="Relate article"
          />

          <div className="text-right">
            <a
              href="/blogs"
              className="text-[16px] md:text-[24px] text-blue-500 be-vietnam-pro-regular"
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
                  </div>
                );
              })}
            </Carousel>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogDetail;
