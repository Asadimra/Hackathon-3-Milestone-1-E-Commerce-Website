import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Clock4 } from "lucide-react";
import Feature from "./Feature";

export default function ContactUs() {
  return (
    <div className="pt-7 lg:pt-16">
      <div className="mx-3 lg:mx-44">
        <h2 className="text-4xl font-bold text-center mb-4">
          Get In Touch With Us
        </h2>
        <p className="text-center lg:mx-36 flex justify-center text-gray-600 mb-12">
          For More Information About Our Products & Services, Please Feel Free
          To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 lg:w-[250px] lg:h-[537px]">
            <div className="flex items-start">
              <div className=" mr-4">
                {" "}
                <MapPin />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className=" font-normal">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="  mr-4">
                {" "}
                <Phone />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="font-normal">Mobile: (+84) 546-6789</p>
                <p className="font-normal">Hotline: (+84) 456-6789</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="  mr-4">
                {" "}
                <Clock4 />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Working Time</h3>
                <p className="font-normal">Monday-Friday: 9:00 - 22:00</p>
                <p className="font-normal">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-base font-medium my-4 text-gray-700"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Abc"
                  className="mt-1 block w-full   p-4 border border-[#9F9F9F] rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-medium my-4 text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Abc@def.com"
                  className="mt-1 block w-full p-4 border border-[#9F9F9F] rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-base font-medium my-4 text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="This is an optional"
                  className="mt-1 block w-full p-4 border border-[#9F9F9F] rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-base font-medium my-4 text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Hi! I'd like to ask about"
                  className="mt-1 block w-full p-4 border border-[#9F9F9F] rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-[237px] bg-[#029FAE] text-white py-2 px-4 rounded-md hover:bg-teal-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Feature />
    </div>
  );
}
