import { Check } from "lucide-react";
import { CircleAlert } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Header(){
  return (
    <div>
      <div className="flex justify-between items-center h-[45px] px-40 bg-[#272343] text-white">
        <div className="flex opacity-[70%]">
          <Check />
          <h1 className="px-2  ">Free shipping on all orders over $50</h1>
        </div>
        <div className="flex  opacity-[70%]">
          <select className=" bg-[#272343]  ">
            <option value="">Eng</option>
          </select>
          <Link href="/Faq">
            <h2 className="px-4">Faqs</h2>
          </Link>
          <CircleAlert />
          <h3 className="px-1">Need Help</h3>
        </div>
      </div>
      <div className="flex justify-between h-[84px]  bg-[#F0F2F3]  py-[20px] px-40  text-black">
        <div className="flex items-center">
          <img src="/LogoSofa.png" alt="" />
          <h1 className="font-medium text-2xl px-2 ">Comforty</h1>
        </div>
        <button className="  w-[130px] h-[44px] gap-3 text-black bg-white py-[11px] px-[16px] rounded-lg">
          <div className="flex items-center ">
            <ShoppingCart />
            <h2 className="px-2">Cart</h2>
            <span className="rounded-full bg-[#007580] text-white px-2">2</span>
          </div>
        </button>
      </div>
      <div className="h-[74px] flex justify-between bg-white   py-[20px] px-40  text-black">
        <div>
          <ol className="gap-7 flex text-[#636270]">
            <li className="text-[#007580] ">Home</li>
            <li>Shop</li>
          <Link href="/Products-Page">
            <li className="hover:text-teal-600">Product</li>
            </Link>
            <li>Pages</li>
            <Link href="/About">
              <li className="hover:text-teal-600">About</li>
            </Link>
          </ol>
        </div>
        <Link href="/Contact">
          <div className="flex  ">
            <h1 className="px-2 text-[#636270]">Contact:</h1>
            <span>(808) 555-0111</span>
          </div>
        </Link>
      </div>
      <hr className="-mt-3" />
    </div>
  );
}
