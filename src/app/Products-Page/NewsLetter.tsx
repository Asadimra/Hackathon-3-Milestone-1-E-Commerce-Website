export default function NewsletterSection() {
  return (
    <div className="  bg-[#1E28320D] py-16 px-36 ">
      <div className="text-center ">
        <h2 className="text-3xl font-semibold mb-6">
          Or Subscribe To The Newsletter
        </h2>
        <div className="flex justify-center my-11 items-center space-x-2 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Email Address..."
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
            SUBMIT
          </button>
        </div>
      </div>
      <div className="text-center  ">
        <h2 className="text-3xl font-medium mb-12">
          Follow Products And Discounts On Instagram
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-gray-100  rounded-md">
            <img
              src="/WoodenChair.png"
              alt="Product 1"
              className="rounded-md w-full"
            />
          </div>
          <div className="bg-gray-100  rounded-md">
            <img
              src="/WingChair.png"
              alt="Product 2"
              className="rounded-md w-full"
            />
          </div>
          <div className="bg-gray-100  rounded-md">
            <img
              src="/Chair2.png"
              alt="Product 3"
              className="rounded-md w-full"
            />
          </div>
          <div className="bg-gray-100  rounded-md">
            <img
              src="/Chair1.png"
              alt="Product 4"
              className="rounded-md w-full"
            />
          </div>
          <div className="bg-gray-100  rounded-md">
            <img
              src="/Chair3.png"
              alt="Product 5"
              className="rounded-md w-full"
            />
          </div>
          <div className="bg-gray-100  rounded-md">
            <img
              src="/DeskChair.png"
              alt="Product 6"
              className="rounded-md w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
