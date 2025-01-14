"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { useSingleTypesStores } from "@/app/apis/stores/singleTypesStores";
import { useCollectionTypesStores } from "@/app/apis/stores/collectionTypesStore";

import Container from "../Commons/Container";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import CopyRight from "./CopyRight";
import Logo from "../Header/Logo";

const Footer = () => {
  const ref = useRef<any>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [contactInformation, setContactInformation] = useState<any>({});
  const { getContactInformation } = useSingleTypesStores();
  const { getEcosystem } = useCollectionTypesStores();

  // const quickLinks = [
  //   { label: "About Us", href: "/about-us" },
  //   { label: "Contact Us", href: "/contact" },
  //   { label: "Our Service", href: "/our-services" },
  //   { label: "Recruitment", href: "/tuyen-dung" },
  //   { label: "Blog", href: "/blogs" },
  // ];

  const quickLinks1 = [
    { label: "100 Best Companies", href: "/#" },
    { label: "Fortune 500", href: "/#" },
    { label: "Global 500", href: "/#" },
    { label: "Future 500 Europe", href: "/#" },
    { label: "Most Powerful Women", href: "/#" },
    { label: "Future 50", href: "/#" },
    { label: "World’s Most Admired Companies", href: "/#" },
    { label: "See All Rankings", href: "/#" },
  ];

  const quickLinks1Part1 = quickLinks1.slice(0, 4); // 4 phần tử đầu
  const quickLinks1Part2 = quickLinks1.slice(4);
  const quickLinks2 = [
    { label: "Finance", href: "/#" },
    { label: "Leadership", href: "/#" },
    { label: "Success", href: "/#" },
    { label: "Tech", href: "/#" },
    { label: "Asia", href: "/#" },
    { label: "Europe", href: "/#" },
    { label: "Environment", href: "/#" },
    { label: "Fortune Crypto", href: "/#" },
    { label: "Health", href: "/#" },
    { label: "Well", href: "/#" },
    { label: "Retail", href: "/#" },
    { label: "Lifestyle", href: "/#" },
    { label: "Politics", href: "/#" },
    { label: "Newsletters", href: "/#" },
    { label: "Magazine", href: "/#" },
    { label: "Features", href: "/#" },
    { label: "Commentary", href: "/#" },
    { label: "MPW", href: "/#" },
    { label: "CEO Initiative", href: "/#" },
    { label: "Conferences", href: "/#" },
    { label: "Personal Finance", href: "/#" },
    { label: "Recommends", href: "/#" },
  ];
  const quickLinks2Part1 = quickLinks2.slice(0, 4);
  const quickLinks2Part2 = quickLinks2.slice(4, 8);
  const quickLinks2Part3 = quickLinks2.slice(8, 13);
  const quickLinks2Part4 = quickLinks2.slice(13, 17);
  const quickLinks2Part5 = quickLinks2.slice(17);

  const quickLinks3 = [
    { label: "Frequently Asked Questions", href: "/#" },
    { label: "Customer Service Portal", href: "/#" },
    { label: "Privacy Policy", href: "/#" },
    { label: "Terms of Use", href: "/#" },
    { label: "Single Issues for Purchase", href: "/#" },
    { label: "International Print", href: "/#" },
  ];

  const quickLinks4 = [
    { label: "Fortune Brand Studio", href: "/#" },
    { label: "Fortune Analytics", href: "/#" },
    { label: "Fortune Conferences", href: "/#" },
    { label: "Advertising", href: "/#" },
    { label: "Business Development", href: "/#" },
  ];

  const quickLinks5 = [
    { label: "About Us", href: "/#" },
    { label: "Editorial Calendar", href: "/#" },
    { label: "Press Center", href: "/#" },
    { label: "Work at Fortune", href: "/#" },
    { label: "Diversity and Inclusion", href: "/#" },
    { label: "Terms and Conditions", href: "/#" },
    { label: "Site Map", href: "/#" },
  ];

  useEffect(() => {
    const onSuccess = (res: any) => {
      if (res) setContactInformation(res);
    };

    getContactInformation(`?populate=*&locale=en`, onSuccess);
  }, [getContactInformation, getEcosystem]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className=" relative mt-10 md:mt-20">
      <Container>
        <footer className="">
          <div className="flex flex-wrap pt-10 -mx-[15px]">
            <div
              className={` px-[15px] w-full md:w-3/12 lg:w-3/12 xl:w-[24%] border-r-[1px] border-r-[#D1D1D6] ${
                isIntersecting ? " animate__fadeInUp" : ""
              }`}
            >
              <h3 className="text-[#E4121A] text-[16px] be-vietnam-pro-semibold">
                Rankings
              </h3>
              <div
                className="grid gap-4"
                style={{ gridTemplateColumns: "repeat(2, auto)", gap: "1rem" }}
              >
                <FooterLinks items={quickLinks1Part1} title="" />
                <FooterLinks items={quickLinks1Part2} title="" className="" />
              </div>
            </div>
            <div
              className={` px-[15px] w-full md:w-3/12 lg:w-3/12 xl:w-[33%] border-r-[1px] border-r-[#D1D1D6] ${
                isIntersecting ? " animate__fadeInUp" : ""
              }`}
            >
              <h3 className="text-[#E4121A] text-[16px] be-vietnam-pro-semibold">
                Sections
              </h3>
              <div
                className="grid gap-4"
                style={{ gridTemplateColumns: "repeat(5, auto)", gap: "1rem" }}
              >
                <FooterLinks items={quickLinks2Part1} title="" />
                <FooterLinks items={quickLinks2Part2} title="" />
                <FooterLinks items={quickLinks2Part3} title="" />
                <FooterLinks items={quickLinks2Part4} title="" />
                <FooterLinks items={quickLinks2Part5} title="" />
              </div>
            </div>
            <div
              className={` px-[15px] w-full md:w-3/12 lg:w-3/12 xl:w-[13%] border-r-[1px] border-r-[#D1D1D6] ${
                isIntersecting ? " animate__fadeInUp" : ""
              }`}
            >
              <FooterLinks items={quickLinks3} title="Customer Support" />
            </div>
            <div
              className={` px-[15px] w-full md:w-3/12 lg:w-3/12 xl:w-[15%] border-r-[1px] border-r-[#D1D1D6] ${
                isIntersecting ? " animate__fadeInUp" : ""
              }`}
            >
              <FooterLinks items={quickLinks4} title="Commercial Services" />
            </div>
            <div
              className={` px-[15px] w-full md:w-3/12 lg:w-3/12 xl:w-[13%]  ${
                isIntersecting ? " animate__fadeInUp" : ""
              }`}
            >
              <FooterLinks items={quickLinks5} title="About Us" />
            </div>
          </div>
          <div className={`${isIntersecting ? "animate__fadeInUp" : ""}`}>
            <CopyRight />
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
