// components/ArticleCard.tsx
import React from "react";

interface ArticleCardProps {
  category: string;
  title: string;
  author: string;
  date: string;
  imageUrl: string; // Prop for image URL
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  category,
  title,
  author,
  date,
  imageUrl,
}) => {
  return (
    <div className="p-4 space-y-4 group">
      <img
        src={imageUrl} // Display image using the imageUrl prop
        alt={title}
        className="w-full h-[200px] object-cover rounded-lg transition-all duration-300 ease-in-out group-hover:brightness-75"
      />
      <a className="text-[16px] font-semibold text-[#e4121a] hover:underline">
        {category}
      </a>
      <h3 className="text-xl font-semibold transition-colors duration-300 ease-in-out group-hover:text-[#007bb5]">
        {title}
      </h3>
      <p className="text-sm text-gray-500">
        By <strong>{author}</strong>
      </p>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
  );
};

export default ArticleCard;
