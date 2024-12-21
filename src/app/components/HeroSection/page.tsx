import { ArrowRight } from "lucide-react";
import CompanyLogo from "./CompanyLogo";
import FeaturedProducts from "./FeaturedProducts";
import TopCategories from "./TopCategories";
import HotCategory from "./HotCategory";
import OurProduct from "./OurProduct";

export default function HeroSection() {
  return (
    <div className=" md:mx-0">
      <div className="  flex flex-col md:flex-row  justify-around  lg:mx-40 pl-4 lg:pl-10 pt-20  lg:h-[550px] bg-[#F0F2F3] lg:rounded-3xl">
        <div className=" ">
          <h1 className="text-[#272343] text-sm">WELCOME TO CHARITY</h1>
          <h1 className="font-bold my-5 lg:w-[450px] lg:h-[178px] text-3xl md:text-5xl ">
            Best Furniture Collection For Your Interior.
          </h1>
          <button className="flex p-3 pl-7 mt-9 lg:mt-0  rounded-lg text-white bg-[#029FAE] w-[171px]">
            Shop Now
            <span className="px-3">
              <ArrowRight />{" "}
            </span>
          </button>
        </div>
        <img
          className="pr-2  mt-9 md:mt-0  md:w-[350px] md:h-[350px]"
          src="/ProductImage.png"
          alt=""
        />
      </div>
      <CompanyLogo />
      <FeaturedProducts />
      <TopCategories />
      <HotCategory />
      <OurProduct />
    </div>
  );
}
