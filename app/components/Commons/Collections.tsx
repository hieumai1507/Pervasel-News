import { useState } from "react";
import SidebarHeading from "./SidebarHeading";

interface CollectionProps {
  heading?: string;
  className?: string;
  data: any;
  collectionSelect: any;
}

const Collections = ({
  heading,
  className,
  data,
  collectionSelect,
}: CollectionProps) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );

  const handleRadioChange = (id: number) => {
    setSelectedCategoryId(id);
    collectionSelect(id);
  };

  return (
    <div className={`${className ? className + " " : ""}`}>
      {heading && <SidebarHeading title={heading} />}
      <ul>
        {data.length > 0 &&
          data.map((item: any) => (
            <li
              key={item.id}
              className="mb-2 capitalize flex items-center cursor-pointer"
            >
              <input
                type="radio"
                id={`collection-${item.id}`}
                value={item.id}
                name="collection"
                onChange={() => handleRadioChange(item.id)}
                checked={selectedCategoryId === item.id}
                className="mr-2" // Add spacing between the checkbox and label
              />

              <label
                htmlFor={`collection-${item.id}`}
                className="ml-2 text-[16px] be-vietnam-pro-regular"
              >
                {item?.attributes?.Title} ({item?.count})
              </label>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Collections;
