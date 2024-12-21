import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" mt-2">
      <div>
        <hr className="mb-10" />
        <div className=" mx-3 md:mx-10 lg:mx-44">
          <div className="flex flex-col md:flex-row ">
            <div className="md:w-4/12 md:mr-10 ">
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2  rounded-full">
                  <img src="/LogoSofa.png" alt="" />
                </div>
                <h1 className="text-xl font-semibold ">Comforty</h1>
              </div>
              <p className="text-gray-600 text-sm mb-4 ">
                Vivamus tristique odio sit amet velit semper, eu posuere turpis
                interdum. Cras egestas purus.
              </p>
              <div className=" flex space-x-8 lg:space-x-4">
                <a href="#" className="text-gray-500 hover:text-teal-500">
                  <Facebook />
                </a>
                <a href="#" className="text-gray-500 hover:text-teal-500">
                  <Twitter />
                </a>
                <a href="#" className="text-gray-500 hover:text-teal-500">
                  <Instagram />
                </a>
                <a href="#" className="text-gray-500 hover:text-teal-500">
                  <Youtube />
                </a>
              </div>
            </div>
            <div className="mt-7  md:mt-0 md:w-3/12">
              <h2 className=" md:text-sm font-semibold text-[#9A9CAA] mb-4">
                CATEGORY
              </h2>
              <ul className="text-gray-600 space-y-2 md:text-sm">
                <li>
                  <a href="#">Sofa</a>
                </li>
                <li>
                  <a href="#">Armchair</a>
                </li>
                <li>
                  <a href="#">Wing Chair</a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#007580] underline underline-offset-4"
                  >
                    Desk Chair
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-500">
                    Wooden Chair
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-500">
                    Park Bench
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-7  md:mt-0 md:w-3/12 md:mx-8 lg:mx-0">
              <h2 className="md:text-sm font-semibold text-[#9A9CAA] mb-4">
                SUPPORT
              </h2>
              <ul className="text-gray-600 space-y-2 md:text-sm">
                <li>
                  <a href="#">Help & Support</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
            </div>
            <div className="mt-7  md:mt-0 md:w-5/12">
              <h2 className="text-sm font-semibold text-[#9A9CAA] mb-4">
                NEWSLETTER
              </h2>
              <form className="mb-4">
                <div className="lg:flex  items-center border rounded-md overflow-hidden">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full md:px-4 py-2 text-sm focus:outline-none"
                  />
                  <button className="bg-[#029FAE] mt-3 md:mt-0 text-white px-4 py-2 text-sm rounded-lg hover:bg-teal-600">
                    Subscribe
                  </button>
                </div>
              </form>
              <p className="text-gray-600 md:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tincidunt erat enim.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-12 mb-4" />
      <div className="md:flex justify-center">
        <h1 className="text-[#9A9CAA]  ">
          @ 2025 - Blogy - Designed & Develop by
        </h1>
        <span className="px-2 ml-28 md:ml-0">Asad Imran</span>
      </div>
    </footer>
  );
}
