export default function FeaturedProduct() {
  const products = [
    { id: 1, name: "Library Stool Chair", price: "$20", image: "/chair1.png" },
    { id: 2, name: "Library Stool Chair", price: "$20", image: "/chair2.png" },
    { id: 3, name: "Library Stool Chair", price: "$20", image: "/chair3.png" },
    { id: 4, name: "Library Stool Chair", price: "$20", image: "/chair4.png" },
    {
      id: 5,
      name: "Library Stool Chair",
      price: "$20",
      image: "/WingChair.png",
    },
  ];

  return (
    <div className="mx-40 -mt-14 mb-16 ">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold ">Featured Products</h2>
        <button className="font-bold underline underline-offset-8">
          View all
        </button>
      </div>
      <div className="grid grid-cols-5 gap-6 ">
        {products.map((product) => (
          <div key={product.id} className=" rounded-lg  relative">
            <img src={product.image} alt={product.name} />
          <div className="flex items-center justify-between mt-4">
              <h3 className=" text-sm font-mediumg flex  'text-gray-700">
                {product.name}
              </h3>
              <div className="text-gray-900 font-bold">{product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
