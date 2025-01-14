"use client";
import React, { useEffect, useRef, useState } from "react";
import Sidebar from "@/app/components/Commons/Sidebar";
import BlogSideBar from "@/app/components/Sections/BlogSidebar";
import BlogMainContent from "@/app/components/Sections/BlogMainContent";
import Heading from "../Commons/Heading";

const BlogContent = () => {
  const ref = useRef<any>(null);
  const [blogsList, setBlogsList] = useState<any>([]);
  const totalBlogs = blogsList.length;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const handleBlogsList = (data: any) => {
    setBlogsList(data);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });
  }, []);
  return (
    <div className="flex flex-wrap md:py-10">
      <Sidebar>
        <BlogSideBar handleBlogs={handleBlogsList} />
      </Sidebar>
      <div className="">
        <div
          className={`relative md:ml-6 flex justify-between items-center mb-[15px] md:mb-6 ${
            isIntersecting ? " animate__fadeInUp" : ""
          }`}
        >
          <Heading
            headingTag="h2"
            className="underline-title text-[24px] md:text-[40px] text-[#333333] be-vietnam-pro-semibold"
            heading={`Blogs (${totalBlogs})`}
          />
        </div>
        <BlogMainContent data={blogsList} />
      </div>
    </div>
  );
};

export default BlogContent;
