import Heading from "./Heading";

interface SidebarHeadingProps {
  title: string;
}

const SidebarHeading = ({ title }: SidebarHeadingProps) => {
  return (
    <Heading
      headingTag="h3"
      heading={title}
      className="text-[20px] md:text-[23px] text-[#333333] leading-[24px] be-vietnam-pro-regular md:mb-5"
    />
  );
};

export default SidebarHeading;
