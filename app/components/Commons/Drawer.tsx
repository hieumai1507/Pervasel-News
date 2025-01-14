"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import LogoImage from "@/public/images/logo.png";
import { getImageURL } from "@/app/libs/function";
import { useSingleTypesStores } from "@/app/apis/stores/singleTypesStores";

import { IoCloseOutline } from "react-icons/io5";

interface DrawerProps {
  isOpen: boolean;
  heading?: string;
  closeModal: () => void;
  content: React.ReactNode;
  className?: string;
  position?: "left" | "right";
}

const Drawer = ({
  isOpen,
  heading,
  closeModal,
  content,
  className,
  position,
}: DrawerProps) => {
  const [dataLogo, setDataLogo] = useState<any>({});
  const { getLogo } = useSingleTypesStores();

  useEffect(() => {
    const onSuccess = (res: any) => {
      if (res) setDataLogo(res);
    };

    getLogo(onSuccess);
  }, [getLogo]);

  const DrawerContent = (
    <div
      className="bg-white text-black w-full h-full max-w-[600px] overflow-y-auto"
      style={{ boxShadow: "var(--box-shadow)" }}
    >
      <div className="relative py-2 px-5 border-b-[1px] shadow-[0_10px_10px_rgba(0,0,0,0.25)]">
        {heading && <h2 className="text-lg font-normal">{heading}</h2>}
        <>
          {dataLogo?.Favicon?.data?.attributes && (
            <>
              <Image
                src={
                  getImageURL(dataLogo?.Favicon?.data?.attributes?.url) ||
                  LogoImage
                }
                alt="Logo"
                className=" "
                width={78}
                height={78}
              />
              {dataLogo?.Favicon?.data?.attributes?.caption && (
                <div className="max-w-[410px] text-[16px] text-white be-vietnam-pro-regular">
                  {dataLogo?.Favicon?.data?.attributes?.caption}
                </div>
              )}
            </>
          )}
        </>
        <button
          onClick={closeModal}
          className="hover:text-[rgb(var(--second-rgb))] absolute top-[50%] -translate-y-[50%] right-2"
        >
          <IoCloseOutline size={35} />
        </button>
      </div>
      <div className="p-5">{content}</div>
    </div>
  );

  return (
    <>
      {position === "left" ? (
        <div
          className={`fixed top-0 right-0 bottom-0 transition-all duration-500 bg-[rgb(var(--bg-canvas)/20%)] flex flex-wrap justify-start z-10 ${
            isOpen ? "left-0" : "opacity-0 invisible -left-[100%]"
          }${className ? " " + className : ""}`}
        >
          {DrawerContent}
        </div>
      ) : (
        <div
          className={`fixed top-0 right-0 bottom-0 transition-all duration-500 bg-[rgb(var(--bg-canvas)/20%)] flex flex-wrap justify-end z-10 ${
            isOpen ? "left-0" : "opacity-0 invisible left-[100%]"
          }${className ? " " + className : ""}`}
        >
          {DrawerContent}
        </div>
      )}
    </>
  );
};

export default Drawer;
