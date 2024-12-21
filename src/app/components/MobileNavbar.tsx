import { ShoppingCart } from "lucide-react";
import { AlignJustify } from "lucide-react";

import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNavbar = () => {
  return (
    <div className="mb-   ">
      <div className="flex justify-between items-center px-2 bg-[#272343] text-white h-[30px] ">
        <div className="flex opacity-[70%] text-xs">
          <p>Free shipping on all over $50</p>
        </div>
        <div className="flex opacity-[70%] text-xs ">
          <Link href="/Faq">
            <h2>Faqs</h2>
          </Link>
          <h2 className="ml-2">Need Help</h2>
        </div>
      </div>
      <div className="flex justify-between items-center px-2 bg-[#F0F2F3] h-[70px]">
        <div className="flex ">
          <img className="w-7 h-7" src="/LogoSofa.png" alt="" />
          <h1 className="font-medium text-xl mx-2">Comforty</h1>
        </div>

        <div className="flex items-center">
        <Link href="/Card">

          <button className="  text-black bg-white py-2 px-2 rounded-lg">
            <div className="flex items-center ">
              <ShoppingCart />
              <h2 className="px-2">Cart</h2>
              <span className="rounded-full bg-[#007580] text-white px-2">
                2
              </span>
            </div>
          </button>
          </Link>
        </div>
      </div>
      <div className=" flex justify-between items-center  px-2 ">
        <div className="mt-1">
          <Sheet>
            <SheetTrigger>
              <AlignJustify />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <ol className="text-start text-[#636270]">
                  <Link href="/components/HeroSection">
                    <li className="text-[#007580] my-1 ">Home</li>
                  </Link>
                  <li>Shop</li>
                  <Link href="/Products-Page">
                    <li className="hover:text-teal-600 my-1">Product</li>
                  </Link>
                  <li>Pages</li>
                  <Link href="/About">
                    <li className="hover:text-teal-600 my-1">About</li>
                  </Link>
                </ol>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <Link href="/Contact">
          <div className="flex text-xs items-center   ">
            <h1 className="px-2 text-[#636270]">Contact:</h1>
            <span>(808) 555-0111</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default MobileNavbar;
