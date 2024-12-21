import { Heart } from "lucide-react";
import { Trash2 } from "lucide-react";

export default function Card() {
  return (
    <div className="mx-3 lg:mx-40 ">
      <div className="w-full flex  flex-col lg:flex-row  ">
        <div>
          <h1 className="font-medium text-xl text-center lg:text-left mt-9">Bag</h1>
          <div className=" my-5 flex  flex-col md:flex-row ">
            <div className="">
              <img className="md:w-[200px]" src="/chair3.png" alt="" />
            </div>
            <div className=" md:ml-6">
              <div className="flex flex-col lg:flex-row">
                <h1 className="font-medium text-lg my-4 lg:my-0  ">Library Stool Chair</h1>
                <h1 className="ml-52 md:ml-96 lg:ml-40 -mt-10 lg:-mt-0">MRP: $99</h1>
              </div>
              <div className="text-2xl lg:text-base text-[#757575]">
                <h1 className=" mt-8">Ashen Slate/Cobalt Bliss</h1>
                <div className="flex  ">
                  <div className="flex mr-20 lg:mr-9 mt-2">
                    <h2 className="mr-3 ">Size</h2>
                    <h3>L</h3>
                  </div>
                  <div className="flex mt-2 justify-center">
                    <h2 className="mr-3 ">Quantity</h2>
                    <h3>1</h3>
                  </div>
                </div>
                <div className="flex  my-10">
                  <span className="mr-5">
                    <Heart />
                  </span>
                  <Trash2 />
                </div>
              </div>
            </div>
          </div>
          <div className="w-12/12 my-5 flex flex-col md:flex-row ">
            <div className="">
              <img className="md:w-[200px]" src="/WingChair.png" alt="" />
            </div>
            <div className=" md:ml-6">
              <div className="flex flex-col lg:flex-row ">
                <h1 className="font-medium text-lg my-4 lg:my-0">Library Stool Chair</h1>
                <h1 className="ml-52 md:ml-96 lg:ml-40 -mt-10 lg:-mt-0">MRP: $99</h1>
              </div>
              <div className="text-[#757575] text-2xl lg:text-base  ">
                <h1 className=" mt-8 ">Ashen Slate/Cobalt Bliss</h1>
                <div className="flex   ">
                  <div className="flex  mr-20 lg:mr-9 mt-2">
                    <h2 className="mr-3 ">Size</h2>
                    <h3>L</h3>
                  </div>
                  <div className="flex mt-2">
                    <h2 className="mr-3 ">Quantity</h2>
                    <h3>1</h3>
                  </div>
                </div>
                <div className="flex  my-10">
                  <span className="mr-5">
                    <Heart />
                  </span>
                  <Trash2 />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-9 lg:pl-9">
          <div className="md:w-96 md:mx-52 lg:mx-0">
          <h1 className="font-medium text-xl text-center lg:text-left ">Summary</h1>
          <div className="flex justify-between lg:justify-start mt-12 ">
            <h2 className="font-normal">Subtotal</h2>
            <h3 className="lg:ml-52 font-medium">$198.00</h3>
          </div>
          <div className="flex justify-between lg:justify-start mt-3 ">
            <h2 className="font-normal">Estimated Delivery & Handling</h2>
            <h3 className=" lg:ml-[68px] font-medium">Free</h3>
          </div>
          <hr className="my-8" />
          <div className="flex justify-between lg:justify-start mt-3 ">
            <h2 className="font-normal">Total</h2>
            <h3 className="lg:ml-60 font-medium">$198.00</h3>
          </div>
          <hr className="my-8 " />
          <button className="lg:w-[336px] lg:h-[60px] py-[18px] px-16 md:px-[98px] bg-[#029FAE] text-white rounded-3xl">
            Member Checkout
          </button>
          </div>
        </div>
      </div>
      <hr className="mb-10" />
    </div>
  );
}
