"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

import AboutImage from "@/public/images/logo.png";
import { useSingleTypesStores } from "@/app/apis/stores/singleTypesStores";
import Heading from "@/app/components/Commons/Heading";
import { getImageURL } from "@/app/libs/function";

interface TalkingNumberProps {
  talkingNumberItems: string[];
}

const TalkingNumber = ({ talkingNumberItems }: TalkingNumberProps) => {
  const [talkingNumber, setTalkingNumber] = useState<any>({});
  const { getTalkingNumber } = useSingleTypesStores();

  useEffect(() => {
    const onSuccess = (res: any) => {
      if (res) setTalkingNumber(res);
    };
    getTalkingNumber(`?populate=*&locale=en`, onSuccess);
  }, [getTalkingNumber]);

  const dataNumber = [
    {
      number: talkingNumber?.Years,
      title: talkingNumberItems[0],
    },
    {
      number: talkingNumber?.Staff,
      title: talkingNumberItems[1],
    },
    {
      number: talkingNumber?.Branch,
      title: talkingNumberItems[2],
    },
    {
      number: talkingNumber?.Partners,
      title: talkingNumberItems[3],
    },
  ];

  return (
    <div className="mt-[36px] md:mt-20 flex flex-wrap -mx-[15px] ">
      <div className="px-[15px] w-full lg:w-[50%] order-2 lg:order-1">
        <div className="flex space-x-2 h-96 w-full">
          {/* Slice 1: Cắt ảnh từ phần bên trái */}
          <div className="relative w-1/3 h-full aspect-w-3 aspect-h-4">
            <Image
              src={
                getImageURL(talkingNumber?.Image?.data?.attributes?.url) ||
                AboutImage
              }
              alt="Sliced Image 1"
              layout="fill"
              objectFit="cover"
              objectPosition="left"
              className="rounded-xl"
            />
          </div>

          {/* Slice 2: Cắt ảnh từ phần trung tâm và dịch chuyển xuống */}
          <div className="relative w-1/3 h-full aspect-w-3 aspect-h-4 transform translate-y-6">
            <Image
              src={
                getImageURL(talkingNumber?.Image?.data?.attributes?.url) ||
                AboutImage
              }
              alt="Sliced Image 2"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-xl"
            />
          </div>

          {/* Slice 3: Cắt ảnh từ phần bên phải */}
          <div className="relative w-1/3 h-full aspect-w-3 aspect-h-4">
            <Image
              src={
                getImageURL(talkingNumber?.Image?.data?.attributes?.url) ||
                AboutImage
              }
              alt="Sliced Image 3"
              layout="fill"
              objectFit="cover"
              objectPosition="right"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="px-[15px] w-full lg:w-[50%] order-1 lg:order-2 mb-[30px] lg:mb-0 ">
        <Heading
          headingTag="h2"
          heading={talkingNumber?.Title}
          className=" underline-title text-[24px] md:text-[40px] text-[#333333] be-vietnam-pro-semibold"
        />
        <div className="">
          {dataNumber.map((item, index) => (
            <div
              key={index}
              className="flex flex-wrap items-center md:mt-[20px] mb-[30px] last:mb-0 group"
            >
              <span className="text-[#F16A23] text-3xl lg:text-5xl font-semibold min-w-[80px] lg:min-w-[120px] group-hover:scale-125 transition-all duration-500">
                {item.number} +
              </span>
              <p className="ml-6 flex-1 text-[16px] text-[#333333] md:text-[24px] leading-[140%] tracking-[0.5px] be-vietnam-pro-regular ">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TalkingNumber;
