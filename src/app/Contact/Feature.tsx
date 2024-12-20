const Feature = () => {
  return (
    <div>
      <div className="lg:mx-40  my-12">
        <div className="bg-[#F4F4F4] flex flex-col md:flex-row justify-between items-center md:h-[220px] p-12 ">
          <div className="flex ">
            <div className="">
              <img className="w-12 h-12" src="/trophy 1.png" alt="" />
            </div>
            <div className="pl-2">
              <h1 className="font-semibold text-lg">High Quality</h1>
              <h2 className="text-[#898989]">crafted from top materials</h2>
            </div>
          </div>
          <div className="flex my-6 md:my-0">
            <div>
              <img className="w-12 h-12 " src="/guarantee.png" alt="" />
            </div>
            <div className="pl-2">
              <h1 className="font-semibold text-lg">Warranty Protection</h1>
              <h2 className="text-[#898989]">Over 2 years</h2>
            </div>
          </div>
          <div className="flex my-3 md:my-0 -ml-9 md:-ml-0    ">
            <div>
              <img className="w-12 h-12" src="/customer-support.png" alt="" />
            </div>
            <div className="pl-2">
              <h1 className="font-semibold text-lg">24 / 7 Support</h1>
              <h2 className="text-[#898989]">Dedicated support</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feature;
