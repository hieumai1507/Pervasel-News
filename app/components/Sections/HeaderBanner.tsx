"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Container from "@/app/components/Commons/Container";
import ButtonModal from "@/app/components/Commons/ButtonModal";
import Drawer from "@/app/components/Commons/Drawer";
import MainMenu from "@/app/components/Header/MainMenu";
import MenuMobile from "@/app/components/Header/MenuMobile";

const Header = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggleMenuCanvas = (status: boolean) => setOpenMenu(status);

  useEffect(() => {
    document.documentElement.classList.toggle("openDrawer", openMenu);
  }, [openMenu]);

  return (
    <div ref={elementRef} className="py-2 md:py-4 bg-white  z-10">
      <Container>
        <div className="flex items-center gap-2 w-full">
          <ButtonModal
            className="inline-block"
            onClick={() => handleToggleMenuCanvas(true)}
            isOpenModal={openMenu}
          />
          <MainMenu className="flex-1 text-center hidden xl:block" />
          <Drawer
            isOpen={openMenu}
            closeModal={() => handleToggleMenuCanvas(false)}
            content={<MenuMobile openMenu={setOpenMenu} />}
            position="left"
          />
        </div>
      </Container>
    </div>
  );
};

export default Header;
