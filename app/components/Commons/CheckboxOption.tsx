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
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const handleCheckboxChange = (id: number) => {
    setSelectedCategories((prev) => {
      if (prev.includes(id)) {
        return prev.filter((categoryId) => categoryId !== id); // Remove if already selected
      } else {
        return [...prev, id]; // Add if not selected
      }
    });
    collectionSelect(id); // Call the collectionSelect prop function
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
                type="checkbox"
                id={`collection-${item.id}`}
                onChange={() => handleCheckboxChange(item.id)}
                checked={selectedCategories.includes(item.id)}
                className="mr-2" // Add spacing between the checkbox and label
              />

              <label
                htmlFor={`collection-${item.id}`}
                className="cursor-pointer hover:text-[rgb(var(--second-rgb))]"
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
