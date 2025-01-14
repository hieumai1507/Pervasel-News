"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const BoardMemberDesktop = dynamic(() => import("./BoardMemberDesktop"), {
  ssr: false,
});
const BoardMemberMobile = dynamic(() => import("./BoardMemberMobile"), {
  ssr: false,
});

const BoardMember = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop ? <BoardMemberDesktop /> : <BoardMemberMobile />;
};

export default BoardMember;
