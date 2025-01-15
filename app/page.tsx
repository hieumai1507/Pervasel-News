import { callApi } from "@/app/apis";
import { getImageURL } from "@/app/libs/function";
import { constants as c } from "@/app/libs/constant";

import NewsSection from "@/app/components/Sections/HomeSection";
import BoardMember from "@/app/components/Sections/BoardMember";
import BlogCarousel from "@/app/components/Sections/BlogCarousel";
import BlogCarousel2 from "@/app/components/Sections/BlogCarousel2";
import Partners from "@/app/components/Sections/Partners";
import Milestones from "@/app/components/Sections/Milestones";
import HeaderBanner from "@/app/components/Sections/HeaderBanner";

import LogoImage from "@/public/images/logo.png";

import BlogMainContent from "./components/Sections/BlogMainContent";

export async function generateMetadata() {
  // const fetchMeta = await callApi("/api/meta-tags?populate=*&locale=en", "get");

  // const metaHome = await fetchMeta?.data?.data?.find(
  //   (item: any) => item?.attributes?.Page === "home"
  // );

  return {
    // title: metaHome?.attributes?.Title,
    // description: metaHome?.attributes?.Description || c.META_DESCRIPTION,
    // openGraph: {
    //   images: [
    //     getImageURL(metaHome?.attributes?.Image?.data?.attributes?.url) ||
    //       LogoImage,
    //   ],
    // },
  };
}

export default async function Home() {
  return (
    <div className="bg-gray-50">
      <div className="mb-[30px] md:mb-0">
        <HeaderBanner />
      </div>
      <div className="pb-[27px] md:pb-10 md:pt-[96px]">
        <NewsSection />
      </div>
      <div className="pb-[27px] md:py-10">{/* <BoardMember /> */}</div>
      <div className="pb-[27px] md:py-10">{/* <Partners /> */}</div>
      <div className="pb-[27px] md:py-10">{/* <Milestones /> */}</div>
      <div className="pb-[27px] md:py-10">{/* <BlogCarousel2 /> */}</div>
    </div>
  );
}
