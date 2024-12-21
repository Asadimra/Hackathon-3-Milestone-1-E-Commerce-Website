export default function OurPopularProduct() {
  return (
    <div>
      <h1 className="my-6  font-semibold text-3xl text-center lg:text-left">Our Popular Product</h1>
      <div className="flex flex-col lg:flex-row gap-4 md:mx-12 lg:mx-0 text-sm  text-[#2A254B] font-normal">
        <div>
          <img className="" src="/BigSofa.png" alt="" />
          <h1 className=" mt-2">The Poplar suede sofa</h1>
          <h2>$99.00</h2>
        </div>
          <div className="flex gap-4 ">
        <div>
          <img className="" src="/PopularProduct2.png" alt="" />
          <h1 className=" mt-2">The Dandy chair</h1>
          <h2>$99.00</h2>
        </div>

        <div>
          <img className="" src="/PopularProduct3.png" alt="" />
          <h1 className=" mt-2">The Dandy chair</h1>
          <h2>$99.00</h2>
        </div>
      </div>
      </div>
    </div>
  );
}
