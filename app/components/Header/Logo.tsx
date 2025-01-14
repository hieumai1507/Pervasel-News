"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/public/images/logo.png";
import LogoImage1 from "@/public/images/pervalsel.png";
import { getImageURL } from "@/app/libs/function";
import { useSingleTypesStores } from "@/app/apis/stores/singleTypesStores";
import debounce from "lodash.debounce";

interface LogoProps {
  pathName?: string[];
  isHeader?: boolean;
}

const Logo = ({ pathName, isHeader }: LogoProps) => {
  const [dataLogo, setDataLogo] = useState<any>({});
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { getLogo } = useSingleTypesStores();

  const onSuccess = useCallback((res: any) => {
    if (res) setDataLogo(res);
  }, []);

  useEffect(() => {
    getLogo(onSuccess);

    const updateScreenSize = debounce(() => {
      setIsSmallScreen(window.innerWidth < 678);
    }, 300);
    updateScreenSize();

    window.addEventListener("resize", updateScreenSize);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, [getLogo, onSuccess]);

  const headerLogoDimensions = useMemo(() => {
    const defaultWidth = 50;
    const defaultHeight = 50;
    return {
      width: isSmallScreen ? 50 : dataLogo?.LogoWidth || defaultWidth,
      height: isSmallScreen ? 50 : dataLogo?.LogoHeight || defaultHeight,
    };
  }, [isSmallScreen, dataLogo]);

  const renderHeaderLogoImage = () => {
    const imageSrc =
      getImageURL(dataLogo?.Logo?.data?.attributes?.url) || LogoImage;

    return (
      <Link href="/">
        <span
          className="relative block cursor-pointer"
          style={{
            width: `${headerLogoDimensions.width}px`,
            height: `${headerLogoDimensions.height}px`,
          }}
        >
          <Image
            src={imageSrc}
            alt="Logo"
            priority
            className="absolute top-0 left-0 w-full h-full object-cover"
            width={headerLogoDimensions.width}
            height={headerLogoDimensions.height}
          />
        </span>
      </Link>
    );
  };

  const renderFooterLogoImage = () => {
    return (
      <Link href="/">
        <div className="w-full h-auto max-w-[300px] flex flex-wrap items-center md:justify-left justify-center xl:justify-start flex-1 xl:flex-[initial] cursor-pointer">
          <Image
            src={
              getImageURL(dataLogo?.LogoFooter?.data?.attributes?.url) ||
              LogoImage1
            }
            alt="Logo"
            width={1020}
            height={536}
          />
          {dataLogo?.LogoFooter?.data?.attributes?.caption && (
            <div className="max-w-[410px] text-[16px] text-[#333333] be-vietnam-pro-regular">
              {dataLogo?.LogoFooter?.data?.attributes?.caption}
            </div>
          )}
        </div>
      </Link>
    );
  };

  return (
    <div className="flex flex-wrap md:justify-left justify-center flex-1 xl:flex-[initial]">
      {isHeader ? (
        <div className="items-center xl:justify-start">
          {renderHeaderLogoImage()}
        </div>
      ) : (
        <div className="items-center md:justify-left justify-center xl:justify-start">
          {renderFooterLogoImage()}
        </div>
      )}
    </div>
  );
};

export default Logo;
