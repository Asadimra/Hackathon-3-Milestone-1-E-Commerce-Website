import { Plus } from "lucide-react";

export default function Faq() {
  return (
    <div>
      <h1 className="flex justify-center font-bold text-4xl mt-16">
        Questions Looks Here
      </h1>
      <h2 className="flex justify-center font-normal text-[#4F4F4F] text-sm mt-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the{" "}
      </h2>
      <div className="flex justify-between  mx-36 mt-4">
        <div>
          <div className="w-[470px] h-[170px] bg-[#F7F7F7] rounded-lg my-8 p-4">
            <div className="flex justify-between">
              <h1 className="font-bold ">What types of chairs do you offer?</h1>
              <Plus />
            </div>
            <p className="mt-3 font-normal text-base text-[#4F4F4F]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
              modi ullam amet debitis libero veritatis enim repellat optio natus
              eum delectus deserunt, odit expedita eos molestiae ipsa totam
              quidem?
            </p>
          </div>
          <div className="w-[470px] h-[170px] bg-[#F7F7F7] rounded-lg p-4">
            <div className="flex justify-between">
              <h1 className="font-bold ">
                Do your chairs come with a warranty?
              </h1>
              <Plus />
            </div>
            <p className="mt-3 font-normal text-base text-[#4F4F4F]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
              modi ullam amet debitis libero veritatis enim repellat optio natus
              eum delectus deserunt, odit expedita eos molestiae ipsa totam
              quidem?
            </p>
          </div>
          <div className="w-[470px] h-[170px] bg-[#F7F7F7] rounded-lg my-8 p-4">
            <div className="flex justify-between">
              <h1 className="font-bold ">
                Can I try a chair before purchasing?
              </h1>
              <Plus />
            </div>
            <p className="mt-3 font-normal text-base text-[#4F4F4F]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
              modi ullam amet debitis libero veritatis enim repellat optio natus
              eum delectus deserunt, odit expedita eos molestiae ipsa totam
              quidem?
            </p>
          </div>
        </div>
        <div>
          <div className="w-[470px] h-[170px] bg-[#F7F7F7] rounded-lg my-8 p-4">
            <div className="flex justify-between">
              <h1 className="font-bold ">How can we get in touch with you?</h1>
              <Plus />
            </div>
            <p className="mt-3 font-normal text-base text-[#4F4F4F]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
              modi ullam amet debitis libero veritatis enim repellat optio natus
              eum delectus deserunt, odit expedita eos molestiae ipsa totam
              quidem?
            </p>
          </div>
          <div className="w-[470px] h-[170px] bg-[#F7F7F7] rounded-lg p-4">
            <div className="flex justify-between">
              <h1 className="font-bold ">What will be delivered? And When?</h1>
              <Plus />
            </div>
            <p className="mt-3 font-normal text-base text-[#4F4F4F]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
              modi ullam amet debitis libero veritatis enim repellat optio natus
              eum delectus deserunt, odit expedita eos molestiae ipsa totam
              quidem?
            </p>
          </div>
          <div className="w-[470px] h-[170px] bg-[#F7F7F7] rounded-lg my-8 p-4">
            <div className="flex justify-between">
              <h1 className="font-bold ">
                How do I clean and maintain my Comforty chair?
              </h1>
              <Plus />
            </div>
            <p className="mt-3 font-normal text-base text-[#4F4F4F]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
              modi ullam amet debitis libero veritatis enim repellat optio natus
              eum delectus deserunt, odit expedita eos molestiae ipsa totam
              quidem?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
