"use client";
import { useEffect, useState } from "react";
import NoData from "@/app/components/Commons/NoData";
import BlogCarouselcheck from "./BlogCarouselcheck";

const BlogMainContent = ({ data }: any) => {
  const [blogList, setBlogList] = useState<any>([]);
  const [activeSlide, setActiveSlide] = useState<any>();

  useEffect(() => {
    setBlogList(data);
  }, [data]);

  return (
    <div className="w-full md:flex-1">
      {!blogList.length && <NoData />}
      {blogList?.map((blog: any, index: number) => (
        <div
          key={index}
          data-index={index + 1}
          data-active={activeSlide}
          className="md:px-3 md:m-5 mt-5"
        >
          <BlogCarouselcheck
            blogItem={blog}
            isActive={activeSlide === index + 1}
            isFirst={index === 0} // Pass `isFirst` prop for the first item
          />
        </div>
      ))}
    </div>
  );
};

export default BlogMainContent;
