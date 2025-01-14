"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Carousel from "react-multi-carousel";

import { useCollectionTypesStores } from "@/app/apis/stores/collectionTypesStore";
import { getImageURL } from "@/app/libs/function";

import Container from "@/app/components/Commons/Container";
import Heading from "@/app/components/Commons/Heading";

interface BoardMemberProps {}

const BoardMember = ({}: BoardMemberProps) => {
  const [members, setMembers] = useState<any>([]);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const { getBoardMember } = useCollectionTypesStores();
  const ref = useRef<any>(null);

  useEffect(() => {
    const onSuccess = (res: any) => {
      if (res) {
        const result = res.sort(
          (a: any, b: any) =>
            a.attributes.member_position.data.attributes.Level -
            b.attributes.member_position.data.attributes.Level
        );
        setMembers(result);
      }
    };

    getBoardMember(`?populate=*&locale=en`, onSuccess);
  }, [getBoardMember]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full">
      <Container>
        <Heading
          headingTag="h2"
          heading="Board member"
          className={`underline-title text-[24px] md:!mb-0 leading-[140%] md:text-[40px] text-[#333333] be-vietnam-pro-semibold ${
            isIntersecting ? "animate__fadeInUp" : ""
          }`}
        />
        <p
          className={`w-[auto] lg:w-[912px] text-[16px] mt-[14px] md:mt-[35px] md:text-[24px] text-[#333333] be-vietnam-pro-light leading-[140%] tracking-[0.5px] ${
            isIntersecting ? "animate__fadeInUp" : ""
          }`}
        >
          They provide strategic guidance, oversee management, ensure
          accountability, and help shape policies to achieve the Pervasel’s
          goals.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-5 md:gap-[65px] mt-[36px] md:mt-[68px]">
          {members?.map((item: any, index: number) => (
            <div
              key={item.id}
              className="col-span-1 md:col-span-2 animate__fadeInUp text-center"
            >
              {item?.attributes?.Avartar?.data?.attributes && (
                <div
                  className={`relative w-[125px] h-[125px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden border-4 border-solid 
                    ${isIntersecting ? "animate__fadeInUp" : ""}
                    ${
                      index % 2 === 0
                        ? "border-[rgb(var(--link-rgb))]"
                        : "border-[black]"
                    } inline-block`}
                >
                  <Image
                    src={getImageURL(
                      item?.attributes?.Avartar?.data?.attributes?.url
                    )}
                    alt={
                      item?.attributes?.Avartar?.data?.attributes
                        ?.alternativeText || "Manager"
                    }
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div
                className={`w-full max-w-[25rem] mx-auto  ${
                  isIntersecting ? "animate__fadeInUp" : ""
                }`}
              >
                <Heading
                  headingTag="h4"
                  heading={item?.attributes?.Name}
                  className="!mb-0 mt-3 text-[18px] tracking-[0.5px] md:text-[24px] be-vietnam-pro-semibold"
                />
                <i className="text-[16px] text-[#333333 be-vietnam-pro-light tracking-[0.5px]">
                  {item.attributes.member_position.data.attributes.Position}
                </i>
                <div className="my-3 text-[11px] md:text-[18px] text-[#333333] be-vietnam-pro-regular tracking-[0.5px] leading-[140%]">
                  {item.attributes.Quote}
                </div>
                <ul className="flex flex-wrap items-center justify-center gap-5  mt-3">
                  <li>
                    <Link href={`tel: ${item?.attributes?.Phone}` || "#"}>
                      <BsTelephoneFill size={18} />
                    </Link>
                  </li>
                  <li>
                    <Link href={`mailto: ${item?.attributes?.Email}` || "#"}>
                      <MdEmail size={22} />
                    </Link>
                  </li>
                  <li>
                    <Link href={item?.attributes?.Facebook || "#"}>
                      <FaFacebook size={20} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BoardMember;
