export default function HotCategory() {
  const images = [
    "/HotCategory1.png",
    "/Hotcategory2.png",
    "/Hotcategory3.png",
    "/HotCategory4.png",
    "/Hotcategory5.png",
  ];

  return (
    <div className="mx-2 lg:mx-20 my-10">
      <div className="flex  ">
        <div className="w-[8%] -mt-[580px] md:mt-28 lg:mt-[180px]  mr-2  flex items-center">
          <p className="text-xl lg:text-2xl md:w-[200px] md:-ml-10 lg:-ml-5  font-normal text-gray-700 md:transform md:-rotate-90 whitespace-nowrap md:tracking-wide">
            Explore New and Popular Styles
          </p>
        </div>
        <div className="w-5/6 grid md:grid-cols-2 gap-4">
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
