import Link from "next/link";
import Heading from "../Commons/Heading";

interface FooterLinkItemProps {
  label: string;
  href: string;
  target?: string;
}

interface FooterLinksProps {
  items: FooterLinkItemProps[];
  title?: string;
  className?: string; // Thêm prop className tùy chỉnh
}

const FooterLinks = ({ items, title, className }: FooterLinksProps) => {
  return (
    <div className={` ${className}`}>
      {title && (
        <Heading
          className="text-[#E4121A] text-[16px] be-vietnam-pro-semibold"
          headingTag="h4"
          heading={title}
        />
      )}
      <ul id={`${title}`} className="mt-5 text-[#111111] text-[12px] ">
        {items.map((item, index) => (
          <li key={index} className="mb-2 last:mb-0">
            <Link href={item.href} target={item.target}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
