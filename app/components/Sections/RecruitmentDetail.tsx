"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";

import { useCollectionTypesStores } from "@/app/apis/stores/collectionTypesStore";
import Input from "@/app/components/Commons/Input";
import Heading from "@/app/components/Commons/Heading";
import Modal from "@/app/components/Commons/Modal";
import Richtext from "@/app/components/Commons/RichText";
import SectionLoading from "@/app/components/Commons/SectionLoading";
import Link from "next/link";

interface FormData {
  data: {
    RecruitmentId: number;
    RecruitmentPosition: string;
    Name: string;
    Email: string;
    Phone: string;
    LinkCV: string;
    locale?: string;
  };
}

const RecruitmentDetail = ({ post }: { post: any }) => {
  const params = useParams();
  const [openModal, setOpenModal] = useState(false);
  const [recruitmentData, setRecruitmentData] = useState<any>(post);
  const { getRecruitmentDetail, getRecruitmentForm, loading } =
    useCollectionTypesStores();

  const [formData, setFormData] = useState<FormData>({
    data: {
      Name: "",
      Email: "",
      Phone: "",
      LinkCV: "",
      RecruitmentId: Number(params.id),
      RecruitmentPosition: "",
    },
  });
  const currentDate: Date = new Date();
  const endDate: Date = new Date(recruitmentData?.attributes?.EndTime);
  const timeDifference = endDate.getTime() - currentDate.getTime();
  const rangeTime = timeDifference / (1000 * 60 * 60 * 24);
  const modalTranslate = {
    title: "Apply for position",
    subtitle: "(Fields marked with * are required)",
    input: {
      item_1: "Your name*",
      item_2: "Your email*",
      item_3: "Your phone number*",
      item_4: "Your CV link*",
    },
    button: "Submit",
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      data: {
        ...prevData.data,
        RecruitmentPosition: recruitmentData?.attributes?.Title,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async () => {
    const onSuccess = (res: any) => {
      if (res) toast.success("Submit data success.");
      setOpenModal(false);
    };

    const onFail = (err: any) => {
      toast.error(err.response.data.error.message);
    };

    getRecruitmentForm(formData, onSuccess, onFail);
  };

  const contentModal = (
    <form>
      <div className=" flex-wrap justify-between">
        <div className="w-full md:w-[auto]">
          <div className="mb-5">
            <p className="text-[16px] md:text-[20px] be-vietnam-pro-medium text-[#333333]">
              Your Name<a className="text-red-500">*</a>
            </p>
            <Input
              type="text"
              id="Name"
              value={formData?.data?.Name}
              onChange={handleChange}
              placeholder={modalTranslate.input.item_1}
              required
              className="capitalize leading-6 text-[16px] be-vietnam-pro-light"
            />
          </div>
          <div className="mb-5">
            <p className="text-[16px] md:text-[20px]  be-vietnam-pro-medium text-[#333333]">
              Your Phone<a className="text-red-500">*</a>
            </p>
            <Input
              type="Phone"
              id="Phone"
              value={formData?.data?.Phone}
              onChange={handleChange}
              placeholder={modalTranslate.input.item_3}
              required
              className="leading-6 text-[16px] be-vietnam-pro-light"
            />
          </div>
          <div className="mb-5">
            <p className="text-[16px] md:text-[20px] be-vietnam-pro-medium text-[#333333]">
              Your Email<a className="text-red-500">*</a>
            </p>
            <Input
              type="Email"
              id="Email"
              value={formData?.data?.Email}
              onChange={handleChange}
              placeholder={modalTranslate.input.item_2}
              required
              className="leading-6 text-[16px] be-vietnam-pro-light"
            />
          </div>
          <div>
            <p className="text-[16px] md:text-[20px] be-vietnam-pro-medium text-[#333333]">
              Your LinkCV<a className="text-red-500">*</a>
            </p>
            <Input
              type="LinkCV"
              id="LinkCV"
              value={formData?.data?.LinkCV}
              onChange={handleChange}
              placeholder={modalTranslate.input.item_4}
              required
              className="leading-6 text-[16px] be-vietnam-pro-light"
            />
          </div>
        </div>
      </div>
    </form>
  );

  return (
    <div>
      <Heading
        headingTag="h3"
        heading={recruitmentData?.attributes?.Title}
        className="text-left text-[24px] md:text-[40px] text-[#333333] be-vietnam-pro-semibold "
      />
      <div>
        {recruitmentData?.length > 0 && (
          <p className="hover:text-[#A4A4A4] text-left text-[13px] md:text-[20px]  leading-[18px] md:leading-[24px] tracking-[0.5px] be-vietnam-pro-light text-[#A4A4A4] ">
            <span>
              {Number(recruitmentData?.attributes?.Persons) > 1
                ? "Số lượng:"
                : "Số lượng:"}{" "}
              {recruitmentData?.attributes?.Persons}
            </span>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <span>Mức lương: {recruitmentData?.attributes?.Salary}</span>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <span>
              {recruitmentData.attributes.WorkingForm?.data
                ?.map(
                  (wf: { attributes: { Title: any } }) => wf.attributes.Title
                )
                .join(", ") || "N/A"}
            </span>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <span>
              {recruitmentData.attributes.Position?.data?.attributes?.Title}
            </span>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <br />
            <span>Hạn nộp: {recruitmentData.attributes?.EndTime}</span>
          </p>
        )}

        <p className="hover:text-[#A4A4A4] text-left text-[13px] md:text-[20px]  leading-[18px] md:leading-[24px] tracking-[0.5px] be-vietnam-pro-light text-[#A4A4A4] ">
          <span>
            {Number(recruitmentData?.attributes?.Persons) > 1
              ? "Số lượng:"
              : "Số lượng:"}{" "}
            {recruitmentData?.attributes?.Persons}
          </span>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <span>Mức lương: {recruitmentData?.attributes?.Salary}</span>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <span>
            {recruitmentData.attributes.WorkingForm?.data
              ?.map((wf: { attributes: { Title: any } }) => wf.attributes.Title)
              .join(", ") || "N/A"}
          </span>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <span>
            {recruitmentData.attributes.Position?.data?.attributes?.Title}
          </span>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <span>Hạn nộp: {recruitmentData.attributes?.EndTime}</span>
        </p>
      </div>
      <div className="be-vietnam-pro-light text-[15px] text-[#333333] md:text-[20px] mt-[20px] md:mt-[50px]">
        <Richtext richtextContent={recruitmentData?.attributes?.Description} />
      </div>
      <div className="flex justify-between items-center mt-10">
        <div>
          <button
            onClick={() => setOpenModal(true)}
            className="relative flex items-center justify-center cursor-pointer border rounded-lg gap-2 be-vietnam-pro-regular text-white bg-[#F97316] py-2 px-4 hover:bg-orange-500 focus:outline-none focus:shadow-outline"
            style={{
              cursor:
                new Date(recruitmentData?.attributes?.EndTime) < new Date()
                  ? "not-allowed"
                  : "pointer",
              pointerEvents:
                new Date(recruitmentData?.attributes?.EndTime) < new Date()
                  ? "none"
                  : "auto",
              opacity:
                new Date(recruitmentData?.attributes?.EndTime) < new Date()
                  ? 0.5
                  : 1,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="16"
              height="16"
              className="mr-2"
            >
              <path d="M19 11H13V5H11V11H5V13H11V19H13V13H19V11Z" />
            </svg>
            Apply now
            {loading && <SectionLoading />}
          </button>
        </div>

        {/* Social Media icons */}
        <div className="flex items-center text-gray-500 ">
          <span className="be-vietnam-pro-light text-[14px] md:text-[16px] mr-2">
            Share to
          </span>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2 hover:!text-[none]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12C2 16.84 5.64 20.87 10.26 21.82V14.89H7.97V12H10.26V9.91C10.26 7.73 11.65 6.5 13.63 6.5C14.63 6.5 15.69 6.68 15.69 6.68V9H14.51C13.34 9 13.12 9.65 13.12 10.39V12H15.58L15.16 14.89H13.12V21.82C17.74 20.87 21.38 16.84 21.38 12Z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.55 5.34 21.88 4.34C21.05 4.81 20.13 5.13 19.16 5.31C18.38 4.5 17.27 4 16 4C13.88 4 12.12 5.76 12.12 7.88C12.12 8.21 12.15 8.54 12.22 8.85C8.41 8.66 5.14 6.73 3.16 3.77C2.78 4.43 2.55 5.2 2.55 6C2.55 7.44 3.33 8.68 4.47 9.39C3.77 9.37 3.1 9.19 2.5 8.89C2.5 8.9 2.5 8.92 2.5 8.93C2.5 10.9 3.93 12.52 5.83 12.86C5.49 12.96 5.12 13 4.75 13C4.49 13 4.22 12.97 3.97 12.92C4.5 14.5 6.01 15.62 7.8 15.65C6.41 16.65 4.64 17.19 2.75 17.19C2.48 17.19 2.21 17.18 1.95 17.15C3.74 18.25 5.89 18.88 8.19 18.88C15.98 18.88 20.07 13 20.07 7.92C20.07 7.76 20.07 7.6 20.06 7.44C20.88 6.93 21.6 6.26 22.17 5.48L22.46 6Z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              width="24"
              height="24"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <rect x="0" fill="none" width="20" height="20"></rect>{" "}
                <g>
                  {" "}
                  <path d="M2.5 18h3V6.9h-3V18zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2zm6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </a>
        </div>
      </div>
      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={handleSubmit}
        title={`${modalTranslate.title} ${recruitmentData?.attributes?.Title}`}
        subTitle={modalTranslate.subtitle}
        actionLabel={modalTranslate.button}
        body={contentModal}
        loading={loading}
      />
    </div>
  );
};

export default RecruitmentDetail;
