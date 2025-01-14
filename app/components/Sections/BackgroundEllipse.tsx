"use client";
import { useEffect, useState } from "react";

interface Item {
  bg: string;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  width_desktop: number;
  width: number;
  bottom_mobile?: number;
}

interface BackgroundEllipseProps {
  animate?: string;
  activeBlock?: boolean;
  data: Item[];
}

const BackgroundEllipse = ({
  activeBlock,
  data,
  animate,
}: BackgroundEllipseProps) => {
  const [windowSize, setWindowSize] = useState<{ width: number | undefined }>({
    width: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="block absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]">
      <div className="block bg-ellipse-wrapper absolute top-0 left-[-10rem] w-full h-full overflow-visible z-[-1]">
        {data?.map((item, index) => (
          <div
            key={index}
            className={`bg-ellipse bg-ellipse-1 absolute rounded-full z-[-1] transition-all duration-300${
              animate ? ` ${animate}` : ""
            }`}
            style={{
              background: item.bg,
              top: item.top ? `${item.top}rem` : "auto",
              right: item.right ? `${item.right}rem` : "auto",
              bottom: `${
                windowSize.width && windowSize.width < 768
                  ? item.bottom_mobile
                    ? `${item.bottom_mobile}rem`
                    : `${item.bottom}rem`
                  : `${item.bottom}rem`
              }`,
              left: item.left ? `${item.left}rem` : "auto",
              width: `${
                windowSize.width && windowSize.width > 768
                  ? `${item.width_desktop}rem`
                  : `${item.width}rem`
              }`,
              height: `${
                windowSize.width && windowSize.width > 768
                  ? `${item.width_desktop}rem`
                  : `${item.width}rem`
              }`,
              transform: activeBlock
                ? `translate3d(0px, ${index * 10}px, 0px)`
                : "translate3d(0px, 0px, 0px)",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundEllipse;
