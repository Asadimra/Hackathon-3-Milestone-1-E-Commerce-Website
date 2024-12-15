import { ShoppingCart } from "lucide-react";
import FeaturedProduct from "./FeaturedProduct.";
import Link from "next/link";
export default function SingleProduct() {
  return (
    <div>
      <div className="mx-32 mt-16 flex justify-between ">
        <div className="w-6/12 h-[607px]">
          <img src="/BigChair2.png" alt="" />
        </div>
        <div className=" mx-10 w-5/12">
          <h1 className="w-[500px] h-[132px] font-bold text-5xl">
            Library Stool <br /> Chair
          </h1>
          <button className="w-[110px] h-[39px] bg-[#029FAE] text-white rounded-3xl font-semibold text-sm">
            $20.00 USD
          </button>
          <hr className="my-7" />
          <p className="font-normal text-base text-[#272343]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing
          </p>
          <Link href="/Card">
            <button className="w-[150px] h-[43px] my-6 bg-[#029FAE] text-white rounded-lg font-semibold text-sm flex items-center justify-center">
              <span className="px-2">
                {" "}
                <ShoppingCart />{" "}
              </span>
              Add To Cart
            </button>
          </Link>
        </div>
      </div>
      <FeaturedProduct />
    </div>
  );
}
