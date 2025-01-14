import { useRouter } from "next/navigation";
import Social from "../Commons/Social";

const CopyRight = () => {
  const date = new Date();
  const year = date.getFullYear();
  const router = useRouter();
  return (
    <div className="border-t-[.5px] border-[#333333] text-[16px] be-vietnam-pro-regular flex flex-wrap justify-between  mt-3 py-10 mx-auto md:px-0 text-center">
      <p className="text-left md:text-center text-[#333333] md:py-0 py-3">
        © {year} Pervasel LLC. All Rights Reserved. Use of this site constitutes
        acceptance of our{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Terms of Use
        </a>{" "}
        and{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Privacy Policy
        </a>
        .
      </p>
      <div className="">
        <Social />
      </div>
    </div>
  );
};

export default CopyRight;
