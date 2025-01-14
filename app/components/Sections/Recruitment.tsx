"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import { useCollectionTypesStores } from "@/app/apis/stores/collectionTypesStore";
import { formatDateFromDate } from "@/app/libs/function";
import Search from "@/app/components/Commons/SearchRCM";
import Container from "@/app/components/Commons/Container";
import Heading from "@/app/components/Commons/Heading";
import NoData from "@/app/components/Commons/NoData";
import RecruitmentSearchSidebar from "@/app/components/Sections/RecruitmentSearch"; // Thay đổi này
import PageLoading from "@/app/components/Commons/PageLoading";
import { TbLayoutSidebar } from "react-icons/tb";
import Button from "../Commons/Button";
import Markdown from "../Commons/Markdown";

const Recruitment = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [recruitmentData, setRecruitmentData] = useState<any>([]);
  const [recruitmentPreview, setRecruitmentPreview] = useState<any>([]);
  const [searchKey, setSearchKey] = useState<any>("");
  const [dataSearch, setDataSearch] = useState<any>({
    Position: [],
    WorkingForm: [],
  });
  const { getRecruitmentItems, loading } = useCollectionTypesStores();
  const handleSearch = (key: string) => {
    setSearchKey(key);
  };
  const handleSearchSelected = (result: any) => {
    // Cập nhật dataSearch khi có kết quả tìm kiếm mới
    setDataSearch(result);
  };

  useEffect(() => {
    const onSuccess = (res: any) => {
      if (res) {
        setRecruitmentData(res);
        setRecruitmentPreview(res);
      }
    };
    getRecruitmentItems(`?populate=*&locale=en`, onSuccess);
  }, [getRecruitmentItems]);

  useEffect(() => {
    if (recruitmentData?.length > 0) {
      if (dataSearch.Position.length > 0 || dataSearch.WorkingForm.length > 0) {
        const recruitmentPreviewSearch = recruitmentData.filter((item: any) => {
          const matchesPosition =
            dataSearch.Position.length === 0 ||
            dataSearch.Position.includes(item?.attributes?.Position?.data?.id);
          const matchesWorkingForm =
            dataSearch.WorkingForm.length === 0 ||
            item?.attributes?.WorkingForm?.data?.some((searchValue: any) =>
              dataSearch.WorkingForm.includes(searchValue.id)
            );
          return matchesPosition && matchesWorkingForm;
        });
        setRecruitmentPreview(recruitmentPreviewSearch);
      } else {
        setRecruitmentPreview(recruitmentData);
      }
    }
  }, [dataSearch, recruitmentData]);

  // Thêm đoạn mã này
  useEffect(() => {
    if (searchKey) {
      const filteredData = recruitmentData.filter((item: any) =>
        item?.attributes?.Title?.toLowerCase().includes(searchKey.toLowerCase())
      );
      setRecruitmentPreview(filteredData);
    } else {
      setRecruitmentPreview(recruitmentData);
    }
  }, [searchKey, recruitmentData]);

  return (
    <div className="flex md:px-64">
      <div className="md:mx-[52px] top-20">
        <div className="hidden md:block">
          <RecruitmentSearchSidebar searchSelected={handleSearchSelected} />
        </div>
        <div
          className={`block md:hidden ${
            openSidebar ? "opacity-1 visible " : "opacity-0 invisible "
          } absolute right-0 left-0 transition-all duration-500 bg-white p-3 border-[2px] z-[1]`}
          style={{ boxShadow: "var(--box-shadow)", marginLeft: "90px" }}
        >
          <div className="flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={() => setOpenSidebar(!openSidebar)}
              className="text-right"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <RecruitmentSearchSidebar searchSelected={handleSearchSelected} />
        </div>
      </div>

      <div className="w-full md:w-3/4  px-5 md:px-[52px] md:border-l md:border-[#D3d3d3] overflow-y-auto">
        <div className="flex flex-wrap !top-[0] items-center">
          <div className="flex-1 items-center md:flex-[0 0 100%]">
            <Search searchKey={handleSearch} />
          </div>
          <div className="w-[3.5rem] h-full ml-2 lg:hidden">
            <Button
              icon={TbLayoutSidebar}
              onClick={() => setOpenSidebar(!openSidebar)}
              outline
              className="py-1"
            />
          </div>
        </div>
        <h2 className="text-left mt-5 mb-3 text-[24px] md:text-[40px] be-vietnam-pro-semibold leading-[140%] tracking-[-1%]">
          Tuyển dụng ({recruitmentPreview.length})
        </h2>
        <Heading
          headingTag="h4"
          heading="Vui lòng gửi CV và portfolio về địa chỉ Email tuyển dụng: nguyentuanhr1@gmail.com"
          className="text-left text-[14px] sm:text-[18px] sm:leading-[24px] sm:tracking-[0.5px] be-vietnam-pro-light-italic"
        />

        {!recruitmentPreview?.length && (
          <div className="p-5 border my-10">
            <NoData />
          </div>
        )}
        {loading && <PageLoading />}
        {recruitmentPreview?.length > 0 && (
          <ul className="flex flex-wrap -mx-[15px] mt-[15px] sm:mt-10 md:mb-20">
            {recruitmentPreview?.map((item: any) => {
              const currentDate: Date = new Date();
              const endDate: Date = new Date(item?.attributes?.EndTime);
              const timeDifference = endDate.getTime() - currentDate.getTime();
              const rangeTime = timeDifference / (1000 * 60 * 60 * 24);
              return (
                <li
                  key={item?.id}
                  className="md:w-full lg:w-full  hover:shadow-2xl hover:rounded-[10px] transition-shadow duration-300 py-0 sm:py-1 last:border-b-0"
                >
                  <div className="px-5 md:px-5 py-[15px] sm:py-5">
                    <Link
                      href={`/tuyen-dung/${item?.attributes?.slug}`}
                      className={`block hover:text-[#A4A4A4]`}
                    >
                      <div className="text-[18px] sm:text-[24px] text-[#F97316] md:leading-[24px] leading-[140%] tracking-[0.5px] be-vietnam-pro-regular">
                        {item?.attributes?.Title}
                      </div>

                      <p className="hover:text-inherit text-[11.5px] md:text-[16px] mt-2 leading-[18px] md:leading-[24px] tracking-[0.5px] be-vietnam-pro-light text-[#A4A4A4] ">
                        <span>
                          {Number(item?.attributes?.Persons) > 1
                            ? "Số lượng:"
                            : "Số lượng:"}{" "}
                          {item?.attributes?.Persons}
                        </span>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <span>Mức lương: {item?.attributes?.Salary}</span>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <span>
                          {item.attributes.WorkingForm?.data
                            ?.map(
                              (wf: { attributes: { Title: any } }) =>
                                wf.attributes.Title
                            )
                            .join(", ") || "N/A"}
                        </span>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <span>
                          {item.attributes.Position?.data?.attributes?.Title}
                        </span>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <span>Hạn nộp: {item.attributes?.EndTime}</span>
                      </p>

                      <div className="line-clamp-3 text-[#A4A4A4] text-[14px] leading-[110%] mt-2 sm:text-[16px] be-vietnam-pro-light">
                        {typeof item?.attributes?.overview == "string"
                          ? item?.attributes?.overview
                          : "No overview available."}
                      </div>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Recruitment;
