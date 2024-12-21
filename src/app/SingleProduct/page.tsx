import { ShoppingCart } from "lucide-react";
import FeaturedProduct from "./FeaturedProduct.";
export default function SingleProduct() {
  return (
    <div>
      <div className="mx-2 lg:mx-32 lg:mt-16 flex flex-col lg:flex-row justify-between ">
        <div className=" lg:w-6/12 lg:h-[607px]">
          <img src="/BigChair2.png" alt="" />
        </div>
        <div className=" lg:mx-10 lg:w-5/12">
          <h1 className="lg:w-[500px] lg:h-[132px] font-bold text-2xl my-5 lg:my-0 lg:text-5xl text-center lg:text-left">
            Library Stool <br className="hidden lg:flex" /> Chair
          </h1>
          <div className="flex justify-center lg:justify-start">
          <button className="w-[110px] h-[39px] bg-[#029FAE] text-white  rounded-3xl font-semibold  text-sm">
            $20.00 USD
          </button>
          </div>
          <hr className=" my-3 lg:my-7" />
          <p className="font-normal text-xl lg:text-base  px-2 lg:px-0 hyphens-auto lg:hyphens-none text-[#272343]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing
          </p>
          <div className="flex justify-center lg:justify-start">
          
            <button className="w-[150px] h-[43px] my-6 bg-[#029FAE] text-white rounded-lg font-semibold text-sm flex items-center justify-center">
              <span className="px-2">
                {" "}
                <ShoppingCart />{" "}
              </span>
              Add To Cart
            </button>
          
          </div>
        </div>
      </div>
      <FeaturedProduct />
    </div>
  );
}
