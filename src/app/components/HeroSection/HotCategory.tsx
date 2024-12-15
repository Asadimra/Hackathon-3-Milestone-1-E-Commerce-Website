export default function HotCategory() {
  const images = [
    "/HotCategory1.png",
    "/Hotcategory2.png",
    "/Hotcategory3.png",
    "/HotCategory4.png",
    "/Hotcategory5.png",
  ];

  return (
    <div className="mx-20 my-10">
      <div className="flex gap-4 ">
        <div className="w-[8%] mt-[180px] mr-2  flex items-center">
          <p className="text-2xl w-[200px] font-normal text-gray-700 transform -rotate-90 whitespace-nowrap tracking-wide">
            Explore New and Popular Styles
          </p>
        </div>
        <div className="w-5/6 grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <img
              src={images[0]}
              alt="Large Featured Style"
              className="w-full h-full object-cover  shadow-lg"
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            {images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Style ${index + 2}`}
                className="w-full h-full object-cover shadow-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
