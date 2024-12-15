import { ArrowRight } from "lucide-react";
import CompanyLogo from "./CompanyLogo";
import FeaturedProducts from "./FeaturedProducts";
import TopCategories from "./TopCategories";
import HotCategory from "./HotCategory";
import OurProduct from "./OurProduct";

export default function HeroSection() {
  return (
    <div>
      <div className="flex justify-between mx-40 pl-10 pt-20  h-[550px] bg-[#F0F2F3] rounded-3xl">
        <div className=" ">
          <h1 className="text-[#272343] text-sm">WELCOME TO CHARITY</h1>
          <h1 className="font-bold my-5 w-[450px] h-[178px] text-5xl">
            Best Furniture Collection For Your Interior.
          </h1>
          <button className="flex p-3 pl-7  rounded-lg text-white bg-[#029FAE] w-[171px]">
            Shop Now
            <span className="px-3">
              <ArrowRight />{" "}
            </span>
          </button>
        </div>
        <img
          className="pr-20 w-[390px] h-[400px]"
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
