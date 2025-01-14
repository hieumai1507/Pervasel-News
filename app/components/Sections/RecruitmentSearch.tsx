"use client";
import { useEffect, useState } from "react";
import { useCollectionTypesStores } from "@/app/apis/stores/collectionTypesStore";
import Container from "@/app/components/Commons/Container";
import Button from "@/app/components/Commons/Button";
import Driver from "../Commons/Driver";

interface RecruitmentProp {
  searchSelected: (data: { Position: number[]; WorkingForm: number[] }) => void;
}

const RecruitmentSearchSidebar = ({ searchSelected }: RecruitmentProp) => {
  const [recruitmentPosition, setRecruitmentPosition] = useState<any[]>([]);
  const [recruitmentWorkingForm, setRecruitmentWorkingForm] = useState<any[]>(
    []
  );
  const { getRecruitmentPositions, getRecruitmentWorkingForms } =
    useCollectionTypesStores();
  const [dataSelected, setDataSelected] = useState<{
    Position: number[];
    WorkingForm: number[];
  }>({
    Position: [],
    WorkingForm: [],
  });
  const handleSelectedCheckbox = (id: number, name: string) => {
    setDataSelected((prev: any) => {
      const isChecked = prev[name].includes(id);
      const updatedData = {
        ...prev,
        [name]: isChecked
          ? prev[name].filter((item: number) => item !== id)
          : [...prev[name], id],
      };
      searchSelected(updatedData);
      return updatedData;
    });
  };

  const handleSearchReset = () => {
    setDataSelected({
      Position: [],
      WorkingForm: [],
    });
    searchSelected({ Position: [], WorkingForm: [] });
  };

  useEffect(() => {
    const onSuccessPosition = (res: any) => {
      if (res) {
        const dataPosition = res.map((item: any) => ({
          id: item.id,
          title: item?.attributes?.Title,
        }));
        setRecruitmentPosition(dataPosition);
      }
    };

    const onSuccessWorkingForm = (res: any) => {
      if (res) {
        const dataWorkingForm = res.map((item: any) => ({
          id: item.id,
          title: item?.attributes?.Title,
        }));
        setRecruitmentWorkingForm(dataWorkingForm);
      }
    };

    getRecruitmentPositions(`?locale=en`, onSuccessPosition);
    getRecruitmentWorkingForms(`?locale=en`, onSuccessWorkingForm);
  }, [getRecruitmentPositions, getRecruitmentWorkingForms]);

  const hasDataSelected = Object.values(dataSelected).some(
    (arr) => arr.length > 0
  );

  const buttonStyle = hasDataSelected
    ? "text-blue-400 hover:text-orange-500"
    : "text-gray-400 underline-none cursor-not-allowed";

  return (
    <div className="flex ">
      {/* Sidebar */}
      <div className="w-full">
        <div className="flex w-full flex-wrap text-[16px] md:text-[20px] mb-[12px] text-[#333333] be-vietnam-pro-regular justify-between">
          <p>Filter</p>
          <p onClick={handleSearchReset} className={buttonStyle}>
            Clear
          </p>
        </div>
        <div className="border-b-[1px] mb-[12px] text-[#333333] md:mb-[31px]" />
        <div className="mb-4 md:mb-[31px]">
          <h3 className="text-[20px] be-vietnam-pro-semibold mb-[16px]">
            Position
          </h3>
          {recruitmentPosition.map((position) => (
            <div key={position.id} className="mb-[10px]">
              <input
                type="checkbox"
                id={`position-${position.id}`}
                value={position.id}
                onChange={() => handleSelectedCheckbox(position.id, "Position")}
                checked={dataSelected.Position.includes(position.id)}
                className={`${
                  dataSelected.Position.includes(position.id)
                    ? ""
                    : "text-gray-400"
                }`}
              />
              <label
                htmlFor={`position-${position.id}`}
                className={`ml-2 text-[16px] be-vietnam-pro-regular ${
                  dataSelected.Position.includes(position.id)
                    ? ""
                    : "text-gray-400"
                }`}
              >
                {position.title}
              </label>
            </div>
          ))}
        </div>

        <div className="mb-4 text-[#333333]">
          <h3 className="text-[20px] be-vietnam-pro-semibold mb-[16px]">
            Working Form
          </h3>
          {recruitmentWorkingForm.map((workingForm) => (
            <div key={workingForm.id} className="mb-[10px]">
              <input
                type="checkbox"
                className={`${
                  dataSelected.WorkingForm.includes(workingForm.id)
                    ? ""
                    : "text-gray-400"
                }`}
                id={`workingForm-${workingForm.id}`}
                value={workingForm.id}
                onChange={() =>
                  handleSelectedCheckbox(workingForm.id, "WorkingForm")
                }
                checked={dataSelected.WorkingForm.includes(workingForm.id)}
              />
              <label
                htmlFor={`workingForm-${workingForm.id}`}
                className={`ml-2 text-[16px] be-vietnam-pro-regular ${
                  dataSelected.WorkingForm.includes(workingForm.id)
                    ? ""
                    : "text-gray-400"
                } `}
              >
                {workingForm.title}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruitmentSearchSidebar;
