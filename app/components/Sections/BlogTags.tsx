"use client";
import { useEffect, useState, useMemo } from "react";
import SidebarHeading from "@/app/components/Commons/SidebarHeading";

interface BlogTag {
  id: number;
  attributes: {
    Title: string;
  };
}

interface BlogTagsProps {
  data: BlogTag[];
  tagSelect: (tagId: number, isSelected: boolean) => void;
  clearSignal: boolean;
}

const BlogTags = ({ data, tagSelect, clearSignal }: BlogTagsProps) => {
  const [selectedTag, setSelectedTag] = useState<number | null>(null);

  const blogTags = useMemo(() => data, [data]);

  useEffect(() => {
    if (clearSignal) {
      setSelectedTag(null);
    }
  }, [clearSignal]);

  const handleTagSelect = (tagId: number) => {
    if (selectedTag === tagId) {
      // Nếu tag đã được chọn, bỏ chọn
      setSelectedTag(null);
      tagSelect(tagId, false);
    } else {
      // Nếu tag khác được chọn, đặt tag đó là tag đã chọn
      setSelectedTag(tagId);
      tagSelect(tagId, true);
    }
  };

  return (
    <div>
      <SidebarHeading title="Tag" />
      <ul>
        {blogTags.map((item: BlogTag) => (
          <li
            key={item.id}
            onClick={() => handleTagSelect(item.id)}
            className={`inline-block text-[14px] be-vietnam-pro-regular leading-[140%] 
              ${
                selectedTag === item.id
                  ? "text-[#F97316] border-[#F97316]"
                  : "text-gray-500 border-gray-500"
              } 
              inline-block text-[14px] be-vietnam-pro-regular leading-[140%] mr-2 mb-2 border-[1px] rounded px-3 capitalize cursor-pointer`}
          >
            {item?.attributes?.Title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogTags;
