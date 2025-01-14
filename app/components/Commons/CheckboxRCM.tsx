import { useEffect, useState } from "react";
import SidebarHeading from "./SidebarHeading";

interface CheckboxRCMProps {
  heading?: string;
  label: string;
  options: {
    id: number;
    title: string;
  }[];
  className?: string;
  optionSelected: any;
  name: string;
}

const CheckboxRCM = ({
  heading,
  options,
  label,
  className,
  optionSelected,
  name,
}: CheckboxRCMProps) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [selected, setSelected] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const handleSelectedOption = (id: number) => {
    const selectedLabel = options.find((item: any) => item.id === id);
    if (selectedLabel) setSelected(selectedLabel.title);
    optionSelected(id, name);
    setOpenOptions(false);
  };

  return (
    <div className={`${className ? className + " " : ""}`}>
      <ul
        className={`absolute left-0 right-0 transition-all duration-500 z-1 bg-white text-black rounded-md overflow-hidden
                ${
                  openOptions
                    ? "top-[calc(100%+5px)] opacity-100 visible"
                    : "top-[calc(100%+20px)] opacity-0 invisible"
                }`}
        style={{ boxShadow: "var(--box-shadow)" }}
      >
        {options?.map((option: any) => (
          <li
            key={option.id}
            value={option.id}
            className="hover:bg-[#EEF6FC] text-black py-1 px-3 cursor-pointer"
            onClick={() => handleSelectedOption(option.id)}
          >
            {option?.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckboxRCM;
