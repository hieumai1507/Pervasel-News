"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useCollectionTypesStores } from "@/app/apis/stores/collectionTypesStore";
import { useRouter } from "next/navigation";

const MenuMobile = ({
  className,
  openMenu,
}: {
  className?: string;
  openMenu: any;
}) => {
  const [menuData, setMenuData] = useState<any>([]);
  const { getMenu } = useCollectionTypesStores();
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [buttonClicked, setButtonClicked] = useState<boolean>(false); // State to track if the button is clicked

  const handleClick1 = () => {
    setSelectedIndex(null); // Clear the selected menu item
    setButtonClicked(true); // Set buttonClicked to true to change button style
    router.push("/contact");
    openMenu(false);
  };

  const handleClick = (index: number) => {
    setSelectedIndex(index); // Set the selected index
    setButtonClicked(false); // Reset buttonClicked to false if a menu item is clicked
    openMenu(false);
  };

  useEffect(() => {
    const onSuccess = (res: any) => {
      if (res) setMenuData(res);
    };

    getMenu(`?populate=*&locale=en`, onSuccess);
  }, [getMenu]);

  return (
    <div>
      <nav id="nav-main" className={`inline-block align-middle ${className}`}>
        {menuData.length > 0 && (
          <ul>
            {menuData?.map((item: any, index: number) => (
              <li key={index} className="block align-middle py-[10px]">
                <Link
                  href={`/${
                    item.attributes.Link === "home" ? "" : item.attributes.Link
                  }`}
                  className={`transition uppercase cursor-pointer text-[20px] text-[#707070] leading-[24px] ${
                    selectedIndex === index
                      ? "be-vietnam-pro-semibold text-[#F8810B]"
                      : "be-vietnam-pro-regular"
                  }`}
                  onClick={() => handleClick(index)}
                >
                  {item.attributes.Title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
      <div className="fixed bottom-20 px-8">
        <button
          onClick={handleClick1}
          className={`${
            buttonClicked
              ? "bg-white text-[#F8810B]" // Style when button is clicked
              : selectedIndex !== null
              ? "bg-orange-500 hover:bg-orange-600 text-white" // Style when a menu item is selected
              : "bg-orange-500 hover:bg-orange-600 text-white" // Default style
          } be-vietnam-pro-semibold px-9 py-3 rounded-full shadow-md`}
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default MenuMobile;
