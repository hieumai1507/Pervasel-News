"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

import { useCollectionTypesStores } from "@/app/apis/stores/collectionTypesStore";
import Input from "@/app/components/Commons/Input";
import SectionLoading from "@/app/components/Commons/SectionLoading";

const ContactForm = () => {
  const { contactForm, loading } = useCollectionTypesStores();
  const dataInit = {
    data: {
      Name: "",
      Email: "",
      Phone: "",
      Message: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              text: "",
            },
          ],
        },
      ],
      locale: "en",
    },
  };
  const [formData, setFormData] = useState(dataInit);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    let valueInput = value;
    if (name === "Message") {
      valueInput = [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              text: value,
            },
          ],
        },
      ];
    }

    setFormData((prevData) => ({
      data: {
        ...prevData.data,
        [name]: valueInput,
      },
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("formData: ", formData);
    const onSuccess = (res: any) => {
      if (res) {
        toast.success("Submit success");
        setFormData(dataInit);
      }
    };

    const onFail = (err: any) => {
      toast.success(err);
    };
    contactForm(`?locale=en`, formData, onSuccess, onFail);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-5">
          <Input
            type="text"
            id="Name"
            value={formData.data.Name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="capitalize text-[16px] md:text-[20px] leading-[auto] md:leading-[24px] tracking-[0.5px]  be-vietnam-pro-light"
          />
        </div>

        <div className="mb-5">
          <Input
            type="email"
            id="Email"
            value={formData.data.Email}
            onChange={handleChange}
            placeholder="Your email"
            required
            className="text-[16px] md:text-[20px] leading-[auto] md:leading-[24px] tracking-[0.5px]  be-vietnam-pro-light"
          />
        </div>

        <div className="mb-5">
          <Input
            type="tel"
            id="Phone"
            value={formData.data.Phone}
            onChange={handleChange}
            placeholder="Your phone number"
            pattern="(+[0-9]{2})[0-9]{10}"
            max={15}
            className="text-[16px] md:text-[20px] leading-[auto] md:leading-[24px] tracking-[0.5px]  be-vietnam-pro-light"
          />
        </div>

        <div className="mb-5">
          <textarea
            id="message"
            name="Message"
            value={formData.data.Message[0].children[0].text}
            onChange={handleChange}
            className="appearance-none border rounded-sm w-full py-2 px-3 text-[16px] md:text-[20px] leading-[140%] tracking-[0.5px]  be-vietnam-pro-light focus:outline-none focus:border-[rgb(var(--second-rgb))]"
            placeholder="Your comment or feedback about us"
            cols={5}
            rows={3}
            required
          ></textarea>
        </div>

        <div className="flex items-center  justify-end w-full">
          <button
            type="submit"
            className="relative w-[auto] flex flex-wrap items-center text-[16px] leading-[24px] md:text-[24px] justify-center border-[2px] rounded-lg gap-2 be-vietnam-pro-regular text-white bg-[#F97316] hover:text-[rgb(var(--btn-text-hv))] hover:bg-[rgb(var(--btn-bg-hv))] py-2 px-4  focus:outline-none focus:shadow-outline"
          >
            Submit
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
            {loading && <SectionLoading />}
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
