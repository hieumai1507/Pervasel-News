import React from "react";
import { IconType } from "react-icons";
import SectionLoading from "./SectionLoading";

interface ButtonProps {
  label?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  icon?: IconType;
  loading?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  medium,
  large,
  icon: Icon,
  loading,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative flex flex-wrap items-center text-[24px] be-vietnam-pro-regular justify-center gap-3 disabled:opacity-70 disabled:cursor-no-allowed rounded-lg w-full
            ${
              outline
                ? "hover:text-[rgb(var(--link-rgb)]"
                : "bg-[#F97316] text-[rgb(var(--btn-text))] hover:bg-[rgb(var(--btn-bg-hv))] hover:text-[rgb(var(--btn-text-hv))]"
            }
            ${large ? "py-2 text-md font-semibold" : ""}
            ${small ? "py-1 text-sm font-light border-[1px]" : ""}
            ${medium ? "py-2 text-sm font-light" : ""}
            ${className ? className : ""}
            `}
    >
      {Icon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          {/* Thanh trượt bên trái */}
          <line x1="6" y1="4" x2="6" y2="20" />
          <circle cx="6" cy="10" r="1.5" fill="white" />

          {/* Thanh trượt ở giữa */}
          <line x1="12" y1="4" x2="12" y2="20" />
          <circle cx="12" cy="14" r="1.5" fill="white" />

          {/* Thanh trượt bên phải */}
          <line x1="18" y1="4" x2="18" y2="20" />
          <circle cx="18" cy="8" r="1.5" fill="white" />
        </svg>
      )}
      {label}

      {loading && <SectionLoading />}
    </button>
  );
};

export default Button;
