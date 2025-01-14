"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronUp, ChevronRight } from "lucide-react";
const MenuMobile2 = ({ openMenu }: { openMenu: (value: boolean) => void }) => {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});

  const toggleSection = (section: any) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  return (
    <nav className="bg-white h-auto max-h-full flex flex-col p-6">
      <div className="flex justify-between">
        <ul className="flex flex-col gap-4 pb-4">
          <li className="inline-flex align-center relative ml-[-16px] text-[#111111] justify-between leading-[1.2] font-semibold text-[24px] font-[ Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
            <a className="cursor-pointer font-inherit underline-none">
              Sections
            </a>
          </li>
          <ul className="flex flex-col gap-4 list-none">
            <li className="inline-flex align-center relative justify-between ml-0 text-[#111111] leading-[1.2] font-medium text-[20px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
              <a className="cursor-pointer font-inherit underline-none">
                FORTUNE 500
              </a>
            </li>
            <li className="inline-flex align-center relative justify-between ml-0 text-[#111111] leading-[1.2] font-medium text-[20px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
              <a className="cursor-pointer font-inherit underline-none">News</a>
            </li>
            <li className="inline-flex align-center relative justify-between ml-0 text-[#111111] leading-[1.2] font-medium text-[20px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
              <a className="cursor-pointer font-inherit underline-none">
                Europe
              </a>
            </li>
            <li className="inline-flex align-center relative justify-between ml-0 text-[#111111] leading-[1.2] font-medium text-[20px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
              <a className="cursor-pointer font-inherit underline-none">Asia</a>
            </li>
            <li className="inline-flex align-center relative justify-between ml-0 text-[#111111] leading-[1.2] font-medium text-[20px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
              <a
                className="cursor-pointer font-inherit underline-none"
                onClick={() => toggleSection("Tech")}
              >
                Tech
              </a>
              <button
                type="button"
                className="flex align-center justify-center cursor-pointer p-2 m-[-8px]"
                onClick={() => toggleSection("Tech")}
              >
                {expandedSections["Tech"] ? (
                  <ChevronUp size={24} />
                ) : (
                  <ChevronRight size={24} />
                )}
              </button>
            </li>
            <ul
              className={`${
                expandedSections["Tech"] ? "block" : "hidden"
              } transition-height duration-300 ease-in-out`}
            >
              <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
                <a className="cursor-pointer font-inherit underline-none">AI</a>
              </li>
            </ul>
            <li className="inline-flex align-center relative justify-between ml-0 text-[#111111] leading-[1.2] font-medium text-[20px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
              <a
                className="cursor-pointer font-inherit underline-none"
                onClick={() => toggleSection("Finance")}
              >
                Finance
              </a>
              <button
                type="button"
                className="flex align-center justify-center cursor-pointer p-2 m-[-8px]"
                onClick={() => toggleSection("Finance")}
              >
                {expandedSections["Finance"] ? (
                  <ChevronUp size={24} />
                ) : (
                  <ChevronRight size={24} />
                )}
              </button>
            </li>
            <ul
              className={`flex flex-col gap-4 ${
                expandedSections["Finance"] ? "block" : "hidden"
              } transition-height duration-300 ease-in-out`}
            >
              <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
                <a className="cursor-pointer font-inherit underline-none">
                  Personal Finance
                </a>
              </li>
              <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
                <a className="cursor-pointer font-inherit underline-none">
                  Real Estate
                </a>
              </li>
              <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
                <a className="cursor-pointer font-inherit underline-none">
                  Crypto
                </a>
              </li>
            </ul>
            <li className="inline-flex align-center relative justify-between ml-0 text-[#111111] leading-[1.2] font-medium text-[20px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
              <a
                className="cursor-pointer font-inherit underline-none"
                onClick={() => toggleSection("Leadership")}
              >
                Leadership
              </a>
              <button
                type="button"
                className="flex align-center justify-center cursor-pointer p-2 m-[-8px]"
                onClick={() => toggleSection("Leadership")}
              >
                {expandedSections["Leadership"] ? (
                  <ChevronUp size={24} />
                ) : (
                  <ChevronRight size={24} />
                )}
              </button>
            </li>
            <ul
              className={`${
                expandedSections["Leadership"] ? "block" : "hidden"
              } transition-height duration-300 ease-in-out`}
            >
              <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
                <a className="cursor-pointer font-inherit underline-none">
                  Success
                </a>
              </li>
            </ul>
            <li className="inline-flex align-center relative justify-between ml-0 text-[#111111] leading-[1.2] font-medium text-[20px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
              <a
                className="cursor-pointer font-inherit underline-none"
                onClick={() => toggleSection("Well")}
              >
                Well
              </a>
              <button
                type="button"
                className="flex align-center justify-center cursor-pointer p-2 m-[-8px]"
                onClick={() => toggleSection("Well")}
              >
                {expandedSections["Well"] ? (
                  <ChevronUp size={24} />
                ) : (
                  <ChevronRight size={24} />
                )}
              </button>
            </li>
            <ul
              className={`flex flex-col gap-4 ${
                expandedSections["Well"] ? "block" : "hidden"
              } transition-height duration-300 ease-in-out`}
            >
              <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
                <a className="cursor-pointer font-inherit underline-none">
                  Life
                </a>
              </li>
              <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
                <a className="cursor-pointer font-inherit underline-none">
                  Health
                </a>
              </li>
              <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
                <a className="cursor-pointer font-inherit underline-none">
                  Mind
                </a>
              </li>
              <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
                <a className="cursor-pointer font-inherit underline-none">
                  Family
                </a>
              </li>
              <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
                <a className="cursor-pointer font-inherit underline-none">
                  Aging Well
                </a>
              </li>
            </ul>
            <li className="inline-flex align-center relative justify-between ml-0 text-[#111111] leading-[1.2] font-medium text-[20px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
              <a
                className="cursor-pointer font-inherit underline-none"
                onClick={() => toggleSection("Recommends")}
              >
                Recommends
              </a>
              <button
                type="button"
                className="flex align-center justify-center cursor-pointer p-2 m-[-8px]"
                onClick={() => toggleSection("Recommends")}
              >
                {expandedSections["Recommends"] ? (
                  <ChevronUp size={24} />
                ) : (
                  <ChevronRight size={24} />
                )}
              </button>
            </li>
            <ul
              className={`flex flex-col gap-4  ${
                expandedSections["Recommends"] ? "block" : "hidden"
              } transition-height duration-300 ease-in-out`}
            >
              <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
                <a className="cursor-pointer font-inherit underline-none">
                  Credit Cards
                </a>
              </li>
              <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
                <a
                  className="cursor-pointer font-inherit underline-none"
                  onClick={() => toggleSection("Banking")}
                >
                  Banking
                </a>
                <button
                  type="button"
                  className="flex align-center justify-center cursor-pointer p-2 m-[-8px]"
                  onClick={() => toggleSection("Banking")}
                >
                  {expandedSections["Banking"] ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronRight size={24} />
                  )}
                </button>
              </li>
              <ul
                className={`flex flex-col gap-4 ml-4 ${
                  expandedSections["Banking"] ? "block" : "hidden"
                } transition-height duration-300 ease-in-out`}
              >
                <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
                  <a className="cursor-pointer font-inherit underline-none">
                    Best High-Yield Savings Accounts
                  </a>
                </li>
                <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
                  <a className="cursor-pointer font-inherit underline-none">
                    Best Savings Accounts
                  </a>
                </li>
                <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
                  <a className="cursor-pointer font-inherit underline-none">
                    Best CD Rates
                  </a>
                </li>
                <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
                  <a className="cursor-pointer font-inherit underline-none">
                    Best Money Market Accounts
                  </a>
                </li>
                <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
                  <a className="cursor-pointer font-inherit underline-none">
                    Savings Calculator
                  </a>
                </li>
              </ul>
              <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
                <a className="cursor-pointer font-inherit underline-none">
                  Insurance
                </a>
              </li>
              <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
                <a className="cursor-pointer font-inherit underline-none">
                  Mortgages
                </a>
              </li>
              <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
                <a className="cursor-pointer font-inherit underline-none">
                  Investing
                </a>
              </li>
              <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
                <a className="cursor-pointer font-inherit underline-none">
                  Loans
                </a>
              </li>
              <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
                <a
                  className="cursor-pointer font-inherit underline-none"
                  onClick={() => toggleSection("Education")}
                >
                  Education
                </a>
                <button
                  type="button"
                  className="flex align-center justify-center cursor-pointer p-2 m-[-8px]"
                  onClick={() => toggleSection("Education")}
                >
                  {expandedSections["Education"] ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronRight size={24} />
                  )}
                </button>
              </li>
              <ul
                className={`flex flex-col gap-4 ml-4 ${
                  expandedSections["Education"] ? "block" : "hidden"
                } transition-height duration-300 ease-in-out`}
              >
                <li className="inline-flex align-center relative justify-between ml-8 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
                  <a className="cursor-pointer font-inherit underline-none">
                    Top Business Schools
                  </a>
                </li>
                <li className="inline-flex align-center relative justify-between ml-8 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
                  <a className="cursor-pointer font-inherit underline-none">
                    Top Information Technology and Data Schools
                  </a>
                </li>
                <li className="inline-flex align-center relative justify-between ml-8 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
                  <a className="cursor-pointer font-inherit underline-none">
                    Top Health Schools
                  </a>
                </li>
              </ul>
              <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
                <a className="cursor-pointer font-inherit underline-none">
                  Business Solutions
                </a>
              </li>
            </ul>
            <li className="inline-flex align-center relative justify-between ml-0 text-[#111111] leading-[1.2] font-medium text-[20px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
              <a className="cursor-pointer font-inherit underline-none">
                Video
              </a>
            </li>
          </ul>
          <li className="inline-flex align-center relative ml-[-16px] text-[#111111] justify-between leading-[1.2] font-semibold text-[24px] font-[ Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
            <a
              className="cursor-pointer font-inherit underline-none"
              onClick={() => toggleSection("Rankings")}
            >
              Rankings
            </a>
            <button
              type="button"
              className="flex align-center justify-center cursor-pointer p-2 m-[-8px] pt-[14px]"
              onClick={() => toggleSection("Rankings")}
            >
              {expandedSections["Rankings"] ? (
                <ChevronUp size={24} />
              ) : (
                <ChevronRight size={24} />
              )}
            </button>
          </li>
          <ul
            className={`flex flex-col gap-4  ${
              expandedSections["Rankings"] ? "block" : "hidden"
            } transition-height duration-300 ease-in-out`}
          >
            <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
              <a className="cursor-pointer font-inherit underline-none">
                FORTUNE 500
              </a>
            </li>
            <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
              <a className="cursor-pointer font-inherit underline-none">
                GLOBAL 500
              </a>
            </li>
            <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
              <a className="cursor-pointer font-inherit underline-none">
                MOST POWERFUL WOMEN
              </a>
            </li>
            <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
              <a className="cursor-pointer font-inherit underline-none">
                GREAT PLACE TO WORK LISTS
              </a>
            </li>
            <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
              <a className="cursor-pointer font-inherit underline-none">
                BEST MBA PROGRAMS
              </a>
            </li>
            <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
              <a className="cursor-pointer font-inherit underline-none">
                MORE RANKINGS
              </a>
            </li>
            <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
              <a className="cursor-pointer font-inherit underline-none">
                Fortune Company List
              </a>
            </li>
          </ul>
          <li className="inline-flex align-center relative ml-[-16px] text-[#111111] justify-between leading-[1.2] font-semibold text-[24px] font-[ Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
            <a className="cursor-pointer font-inherit underline-none">
              Analytics
            </a>
          </li>
        </ul>
        <ul className="flex flex-col gap-4 pb-4">
          <li className="inline-flex align-center relative ml-[-16px] text-[#111111] justify-between leading-[1.2] font-semibold text-[24px] font-[ Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
            <a className="cursor-pointer font-inherit underline-none">
              NewLetters
            </a>
          </li>
          <li className="inline-flex align-center relative ml-[-16px] text-[#111111] justify-between leading-[1.2] font-semibold text-[24px] font-[ Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
            <a
              className="cursor-pointer font-inherit underline-none"
              onClick={() => toggleSection("Magazine")}
            >
              Magazine
            </a>
            <button
              type="button"
              className="flex align-center justify-center cursor-pointer p-2 m-[-8px] pt-[14px]"
              onClick={() => toggleSection("Magazine")}
            >
              {expandedSections["Magazine"] ? (
                <ChevronUp size={24} />
              ) : (
                <ChevronRight size={24} />
              )}
            </button>
          </li>
          <ul
            className={`flex flex-col gap-4  ${
              expandedSections["Magazine"] ? "block" : "hidden"
            } transition-height duration-300 ease-in-out`}
          >
            <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
              <a className="cursor-pointer font-inherit underline-none">
                December 2024/January 2025
              </a>
            </li>
            <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
              <a className="cursor-pointer font-inherit underline-none">
                October/November 2024
              </a>
            </li>
            <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
              <a className="cursor-pointer font-inherit underline-none">
                August/September 2024
              </a>
            </li>
            <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
              <a className="cursor-pointer font-inherit underline-none">
                June/July 2024
              </a>
            </li>
            <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
              <a className="cursor-pointer font-inherit underline-none">
                April/May 2024
              </a>
            </li>
            <li className="inline-flex align-center relative justify-between ml-4 text-[#111111] leading-[1.2] font-normal text-[16px] font-[, Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
              <a className="cursor-pointer font-inherit underline-none">
                February/March 2024
              </a>
            </li>
          </ul>
          <li className="inline-flex align-center relative ml-[-16px] text-[#111111] justify-between leading-[1.2] font-semibold text-[24px] font-[ Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
            <a className="cursor-pointer font-inherit underline-none">
              Live Media
            </a>
          </li>
          <li className="inline-flex align-center relative ml-[-16px] text-[#111111] justify-between leading-[1.2] font-semibold text-[24px] font-[ Graphik Cond, Arial Narrow, Helvetica neue Condensed, sans-serif']">
            <a className="cursor-pointer font-inherit underline-none">
              CEO Initiative
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuMobile2;
