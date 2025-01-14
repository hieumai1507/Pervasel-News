"use client";
import { useEffect, useState } from "react";

import { useSingleTypesStores } from "@/app/apis/stores/singleTypesStores";
import Container from "@/app/components/Commons/Container";
import SectionLoading from "@/app/components/Commons/SectionLoading";
import Heading from "@/app/components/Commons/Heading";
import Richtext from "@/app/components/Commons/RichText";

interface HistoryProps {}

const History = ({}: HistoryProps) => {
  const [history, setHistory] = useState<any>({});
  const { getHistory, loading } = useSingleTypesStores();

  useEffect(() => {
    const onSuccess = (res: any) => {
      if (res) setHistory(res);
    };

    getHistory(`?populate=*&local=en`, onSuccess);
  }, [getHistory]);

  return (
    <>
      {loading && (
        <div className="min-h-[300px]">
          <SectionLoading />
        </div>
      )}
      {history && (
        <div>
          {history.Title && (
            <Heading
              headingTag="h2"
              className="underline-title text-[24px] md:!mb-0 leading-[140%] md:text-[40px] text-[#333333] be-vietnam-pro-semibold"
              heading={history.Title}
            />
          )}
          <div className="md:mt-[35px] text-[16px] leading-[140%] tracking-[0.5px] md:text-[19px] text-[#333333] be-vietnam-pro-light mb-[42px] md:mb-[0px]">
            <Richtext richtextContent={history.Content} />
          </div>
        </div>
      )}
    </>
  );
};

export default History;
