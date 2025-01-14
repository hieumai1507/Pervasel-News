"use client";
import { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Container from "@/app/components/Commons/Container";
import ButtonModal from "@/app/components/Commons/ButtonModal";
import Drawer from "@/app/components/Commons/Drawer";
import MainMenu from "./MainMenu";
import AddBanner from "@/app/components/Sections/AdBanner";
import HeaderTools from "./HeaderTools";
import Logo from "./Logo";
import MenuMobile from "./MenuMobile";
import MenuMobile2 from "./MenuMobile2";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const pathnameIgnore = ["", "en", "vi"];
  const [height, setHeight] = useState<number>(0);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const pathnameSplit = pathname.split("/");
  const breadcrumbs = pathnameSplit.filter(
    (item) => !pathnameIgnore.includes(item)
  );
  const [openMenu, setOpenMenu] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  const handleToggleMenuCanvas = (status: boolean) => {
    setOpenMenu(status);
  };
  const router = useRouter(); // Sử dụng useRouter để điều hướng

  const handleClick = () => {
    router.push("/contact"); // Điều hướng tới trang /contact khi nhấn
  };

  useEffect(() => {
    function updateHeight() {
      if (elementRef.current) {
        const { height } = elementRef.current.getBoundingClientRect();
        setHeight(height);
      }
    }

    function handleScroll() {
      setScrollPosition(window.scrollY);
      updateHeight();
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const htmlElement = document.getElementsByTagName("html")[0];
    if (openMenu) htmlElement.classList.add("openDrawer");
    else htmlElement.classList.remove("openDrawer");
  }, [openMenu]);

  return (
    <div>
      <AddBanner />
      <header
        ref={elementRef}
        className={`py-2 md:py-4 transition-all top-0 right-0 left-0 z-10 ${
          scrollPosition > 100
            ? "fixed animate__fadeInDown bg-white"
            : "bg-white"
        }`}
        style={{
          minHeight:
            scrollPosition > 100 ? `${Math.round(height)}px` : "initial",
          boxShadow: "var(--box-shadow)",
          animationDuration: "0.5s",
        }}
      >
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-2 w-full">
            <div className="flex flex-wrap items-center ">
              <ButtonModal
                className="inline-block mr-[48px]"
                onClick={() => handleToggleMenuCanvas(true)}
                isOpenModal={openMenu}
                isScroll={scrollPosition >= 0} // Màu sắc được áp dụng luôn, không cần cuộn
              />
              {/* <HeaderTools /> */}
              <p className="font-semibold text-[20px]">SEARCH</p>
            </div>
            <Logo pathName={breadcrumbs} isHeader />
            <div className="flex flex-wrap items-center gap-6">
              <p className="font-semibold text-[20px]">SIGN IN</p>
              <button
                onClick={handleClick}
                className="bg-[#e4121a] hover:bg-orange-600 text-[20px] be-vietnam-pro-regular text-white leading-[1.2] px-4 py-2  hidden xl:block"
              >
                Subscribe Now
              </button>
            </div>
            <Drawer
              heading=""
              isOpen={openMenu}
              closeModal={() => handleToggleMenuCanvas(false)}
              content={<MenuMobile2 openMenu={setOpenMenu} />}
              position="left"
            />
          </div>
        </Container>
      </header>
    </div>
  );
};

export default Header;
