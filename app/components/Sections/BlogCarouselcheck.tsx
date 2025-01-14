"use client";
import Image from "next/image";
import Link from "next/link";
import { FaAnglesRight } from "react-icons/fa6";
import { formatDateFromDate, getImageURL } from "@/app/libs/function";
import router, { useRouter } from "next/navigation";

interface BlogCarouselItemProps {
  blogItem: any;
  isActive: boolean;
  isFirst: boolean;
}

const BlogCarouselItem = ({
  blogItem,
  isActive,
  isFirst,
}: BlogCarouselItemProps) => {
  const itemTitle = blogItem?.attributes?.Title;
  const router = useRouter();
  const handleNavigation = () => {
    router.push(`/blogs/${blogItem.id}`);
  };
  return (
    <div
      onClick={handleNavigation}
      className={`w-full mx-auto max-w-[900px] border-[1px] transition-all duration-300 hover:shadow-2xl  ease-in-out items-center gap-3 md:gap-5  group p-5 rounded-2xl ${
        isFirst ? "flex flex-col" : "flex flex-row"
      }`}
    >
      {blogItem && (
        <>
          {/* Image Container with Conditional Height */}
          <div
            className={`relative overflow-hidden rounded-lg ${
              isFirst ? "w-full md:h-[220px]" : "w-2/5 md:w-[40%]"
            }`}
          >
            <div
              className={`relative block rounded-lg ${
                isFirst ? "h-[220px] md:h-[220px]" : "h-[19vh]"
              } ${isActive ? "animate-scaleInCenter" : ""} pb-[60%]`}
            >
              {blogItem?.attributes?.Image && (
                <Image
                  src={getImageURL(
                    blogItem?.attributes?.Image?.data.attributes.url
                  )}
                  alt={
                    blogItem?.attributes?.Image?.data.attributes.alternativeText
                  }
                  className={`object-cover transition-transform duration-500 ease-out h-[auto] ${
                    isFirst ? "md:!h-[220px]" : ""
                  }`}
                  fill
                />
              )}
            </div>
          </div>

          <div className="w-full md:w-full mt-[20px] md:flex-1">
            <h3
              className={`text-base mb-3 text-[24px] leading-[140%] group-hover:text-[#FF914D] text-[#333333] be-vietnam-pro-medium line-clamp-2 ${
                isActive ? "animate-fadeInRight" : ""
              }`}
              style={{ animationDuration: ".5s", animationDelay: ".2s" }}
            >
              {itemTitle}
            </h3>

            <div
              className={`text-[16px] leading-[140%] text-[#333333] be-vietnam-pro-light mb-3 ${
                isFirst ? "line-clamp-4" : "line-clamp-3"
              }`}
            >
              <p style={{ animationDelay: ".8s" }}>
                {blogItem?.attributes?.Introduction}
              </p>
            </div>
            <ul className="flex flex-wrap text-[16px] leading-[110%] be-vietnam-pro-regular text-[#C4C4C4] items-center gap-5">
              {blogItem?.attributes?.publishedAt && (
                <li>
                  {formatDateFromDate(
                    blogItem?.attributes?.publishedAt,
                    "MMMM DD. YYYY"
                  )}
                </li>
              )}
              {blogItem?.attributes?.Author && (
                <li className="cursor-pointer capitalize">
                  {blogItem?.attributes?.Author?.data?.attributes?.username}
                </li>
              )}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogCarouselItem;
