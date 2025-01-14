"use client";
import { useState, useEffect } from "react";

const AdBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0); // Để theo dõi vị trí cuộn

  const handleClose = () => {
    setIsVisible(false); // Đóng quảng cáo khi nhấn nút X
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY); // Cập nhật giá trị cuộn
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Điều chỉnh chiều cao của banner khi cuộn
  const bannerHeight = scrollPosition > 100 ? 150 : 280;

  return (
    isVisible && (
      <div
        className=" top-0 left-0 w-full z-50 bg-gray-100 shadow-md"
        style={{ height: `${bannerHeight}px` }} // Thay đổi chiều cao khi cuộn
      >
        <div className="relative">
          {/* Nút đóng quảng cáo */}
          <button
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
            onClick={handleClose}
          >
            ×
          </button>
          {/* Khung quảng cáo */}
          <div id="Leaderboard0" data-cy="leaderboard">
            <iframe
              id="google_ads_iframe_21809533738/fortune/desktop/leaderboard/home_0"
              name="google_ads_iframe_21809533738/fortune/desktop/leaderboard/home_0"
              title="3rd party ad content"
              width="970"
              height="90"
              scrolling="no"
              frameBorder="0"
              aria-label="Advertisement"
              style={{
                border: "0px",
                verticalAlign: "bottom",
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </div>
        </div>
      </div>
    )
  );
};

export default AdBanner;
