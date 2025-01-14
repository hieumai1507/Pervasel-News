"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import { formatDateFromDate, getImageURL } from "@/app/libs/function";
import SidebarHeading from "@/app/components/Commons/SidebarHeading";

const BlogRecentPost = ({ data }: { data: any }) => {
  const currentDate = new Date();
  const [firstPost, setFirstPost] = useState<any>(null);

  useEffect(() => {
    if (data.length > 0) {
      const filteredData = data?.filter(
        (item: any) => new Date(item?.attributes?.publishedAt) <= currentDate
      );
      const sortedData = filteredData.sort((a: any, b: any) => {
        const dateA: Date = new Date(a.time_start);
        const dateB: Date = new Date(b.time_start);
        return dateB.getTime() - dateA.getTime();
      });
      setFirstPost(sortedData[0]); // Chỉ lấy bài viết đầu tiên
    }
  }, [data]);

  return (
    <div>
      <SidebarHeading title="Recent Post" />
      {firstPost && (
        <div className="flex flex-wrap mb-7 last:mb-0">
          <div className="w-[70px] h-[70px] rounded-full overflow-hidden relative">
            {firstPost?.attributes?.Image && (
              <Image
                src={getImageURL(
                  firstPost?.attributes?.Image?.data?.attributes?.url
                )}
                alt={`${firstPost?.attributes?.Title}`}
                className="object-cover"
                fill
              />
            )}
          </div>
          <div className="flex-1 pl-5">
            <h3
              className="text-[12px] md:text-[18px] be-vietnam-pro-regular leading-[18px] md:leading-[140%] hover:text-[#055087] text-[#333333] line-clamp-3"
              title={firstPost?.attributes?.Title}
            >
              {firstPost?.attributes?.Title}
            </h3>
            <p className="text-[10px] md:text-[16px] be-vietnam-pro-light leading-[18px] md:leading-[140%] text-[#475569]">
              {formatDateFromDate(
                firstPost?.attributes?.publishedAt,
                "MMMM DD. YYYY"
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogRecentPost;
