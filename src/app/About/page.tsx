import { Truck } from "lucide-react";
import { BadgeCheck } from "lucide-react";
import { CreditCard } from "lucide-react";
import { Sprout } from "lucide-react";
import OurPopularProduct from "./OurPopularProduct";

export default function About() {
  return (
    <div className="mx-40 mt-20 mb-8">
      <div className="flex justify-between gap-7">
        <div className="w-[672px] h-[360px] px-14 text-white bg-[#007580]">
          <h1 className="mt-10  font-bold text-2xl">About Us - Comforty</h1>
          <p className="pt-7 text-sm">
            At Comforty, we believe that the right chair can transform your
            space and elevate your comfort. Specializing in ergonomic design,
            premium materials, and modern aesthetics, we craft chairs that
            seamlessly blend style with functionality.{" "}
          </p>
          <button className="my-16 w-[179px] h-[56px] bg-[#F9F9F926]">
            View Collection
          </button>
        </div>
        <div>
          <img className="w-[672px] h-[360px]" src="/chair1.png" alt="" />
        </div>
      </div>
      <div className="flex justify-center mt-20 text-3xl font-semibold">
        <h1>What makes our Brand Different</h1>
      </div>
      <div>
        <div className="flex justify-between gap-3 mt-10 mb-20">
          <div className="w-[234px] h-[180px] p-7 text-[#007580] bg-[#F9F9F9]">
            <span>
              {" "}
              <Truck />
            </span>
            <h1 className=" my-2 font-normal ">Next day as standard</h1>
            <p className="text-xs">
              Order before 3pm and get your order the next day as standar
            </p>
          </div>
          <div className="w-[234px] h-[180px] p-7 text-[#007580] bg-[#F9F9F9]">
            <span>
              {" "}
              <BadgeCheck />
            </span>
            <h1 className="my-2  font-normal">Made by true artisans</h1>
            <p className=" font-normal text-xs ">
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>
          <div className="w-[234px] h-[180px] p-7 text-[#007580] bg-[#F9F9F9]">
            <span>
              {" "}
              <CreditCard />
            </span>
            <h1 className="my-2  font-normal">Unbeatable prices</h1>
            <p className="font-normal text-xs">
              For our materials and quality you won&pos;t find better prices
              anywher
            </p>
          </div>
          <div className="w-[234px] h-[180px] p-7 text-[#007580] bg-[#F9F9F9]">
            <span>
              <Sprout />
            </span>
            <h1 className=" my-2 font-normal">About Us - Comforty</h1>
            <p className="font-normal text-xs">
              We use 100% recycled to ensure our footprint is more manageable
            </p>
          </div>
        </div>
      </div>
      <OurPopularProduct />
    </div>
  );
}
