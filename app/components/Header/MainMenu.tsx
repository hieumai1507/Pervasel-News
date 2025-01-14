"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import { useCollectionTypesStores } from "@/app/apis/stores/collectionTypesStore";

const MainMenu = ({ className }: { className: string }) => {
  const [menuData, setMenuData] = useState<any>([]);
  const { getMenu, loading } = useCollectionTypesStores();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // State to track the selected index

  useEffect(() => {
    const onSuccess = (res: any) => {
      if (res) setMenuData(res);
    };

    getMenu(`?populate=*&locale=en`, onSuccess);
  }, [getMenu]);

  const handleSelect = (index: number) => {
    setSelectedIndex(index); // Update the selected index
  };

  return (
    <nav
      id="nav-main"
      className={`inline-block align-middle ${className} mr-4`}
    >
      <ul className="flex justify-center gap-5 !m-0">
        <li className="relative inline-block align-middle text-black group">
          <a
            className="roboto-medium sm:text-[15px] 2xl:text-[18px] group-hover:bg-gradient-to-r group-hover:from-[#884A93] group-hover:via-[#F77776] group-hover:to-[#FF6200] group-hover:text-transparent group-hover:bg-clip-text"
            href="#oa"
          >
            Home
          </a>
          <div className="absolute left-0 bottom-[-2px] w-6/12 h-[2px] bg-gradient-to-r from-[#884A93] via-[#F77776] to-[#FF6200] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </li>
        <li className="relative inline-block align-middle text-black group">
          <a
            className="roboto-medium sm:text-[15px] 2xl:text-[18px] group-hover:bg-gradient-to-r group-hover:from-[#884A93] group-hover:via-[#F77776] group-hover:to-[#FF6200] group-hover:text-transparent group-hover:bg-clip-text"
            href="#ov"
          >
            News
          </a>
          <div className="absolute left-0 bottom-[-2px] w-6/12 h-[2px] bg-gradient-to-r from-[#884A93] via-[#F77776] to-[#FF6200] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </li>

        <li className="relative inline-block align-middle text-black group">
          <a
            className="roboto-medium sm:text-[15px] 2xl:text-[18px] group-hover:bg-gradient-to-r group-hover:from-[#884A93] group-hover:via-[#F77776] group-hover:to-[#FF6200] group-hover:text-transparent group-hover:bg-clip-text"
            href="#tr"
          >
            Tech
          </a>
          <div className="absolute left-0 bottom-[-2px] w-6/12 h-[2px] bg-gradient-to-r from-[#884A93] via-[#F77776] to-[#FF6200] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </li>

        <li className="relative inline-block align-middle text-black group">
          <a
            className="roboto-medium sm:text-[15px] 2xl:text-[18px] group-hover:bg-gradient-to-r group-hover:from-[#884A93] group-hover:via-[#F77776] group-hover:to-[#FF6200] group-hover:text-transparent group-hover:bg-clip-text"
            href="#wc"
          >
            Finance
          </a>
          <div className="absolute left-0 bottom-[-2px] w-6/12 h-[2px] bg-gradient-to-r from-[#884A93] via-[#F77776] to-[#FF6200] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </li>
        <li className="relative inline-block align-middle text-black group">
          <a
            className="roboto-medium sm:text-[15px] 2xl:text-[18px] group-hover:bg-gradient-to-r group-hover:from-[#884A93] group-hover:via-[#F77776] group-hover:to-[#FF6200] group-hover:text-transparent group-hover:bg-clip-text"
            href="#str"
          >
            Leadership
          </a>
          <div className="absolute left-0 bottom-[-2px] w-6/12 h-[2px] bg-gradient-to-r from-[#884A93] via-[#F77776] to-[#FF6200] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </li>
        <li className="relative inline-block align-middle text-black group">
          <a
            className="roboto-medium sm:text-[15px] 2xl:text-[18px] group-hover:bg-gradient-to-r group-hover:from-[#884A93] group-hover:via-[#F77776] group-hover:to-[#FF6200] group-hover:text-transparent group-hover:bg-clip-text"
            href="#contact"
          >
            Well
          </a>
          <div className="absolute left-0 bottom-[-2px] w-6/12 h-[2px] bg-gradient-to-r from-[#884A93] via-[#F77776] to-[#FF6200] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </li>
        <li className="relative inline-block align-middle text-black group">
          <a
            className="roboto-medium sm:text-[15px] 2xl:text-[18px] group-hover:bg-gradient-to-r group-hover:from-[#884A93] group-hover:via-[#F77776] group-hover:to-[#FF6200] group-hover:text-transparent group-hover:bg-clip-text"
            href="#contact"
          >
            Recommends
          </a>
          <div className="absolute left-0 bottom-[-2px] w-6/12 h-[2px] bg-gradient-to-r from-[#884A93] via-[#F77776] to-[#FF6200] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </li>
        <li className="relative inline-block align-middle text-black group">
          <a
            className="roboto-medium sm:text-[15px] 2xl:text-[18px] group-hover:bg-gradient-to-r group-hover:from-[#884A93] group-hover:via-[#F77776] group-hover:to-[#FF6200] group-hover:text-transparent group-hover:bg-clip-text"
            href="#contact"
          >
            Fortune 500
          </a>
          <div className="absolute left-0 bottom-[-2px] w-6/12 h-[2px] bg-gradient-to-r from-[#884A93] via-[#F77776] to-[#FF6200] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </li>
      </ul>
      {/* {menuData.length > 0 && (
        <ul>
          {menuData?.map((item: any, index: number) => (
            <li key={index} className="inline-block align-middle">
              <Link
                href={`/${
                  item.attributes.Link === "home" ? "" : item.attributes.Link
                }`}
                onClick={() => handleSelect(index)} // Set the selected index on click
                className={`px-4 py-3 transition leading-[24px] text-[18px] 
                  ${
                    selectedIndex === index
                      ? "be-vietnam-pro-semibold"
                      : "be-vietnam-pro-regular"
                  } 
                  uppercase cursor-pointer hover:text-[#F8810B]`}
              >
                {item.attributes.Title}
              </Link>
            </li>
          ))}
        </ul>
      )} */}
    </nav>
  );
};

export default MainMenu;
