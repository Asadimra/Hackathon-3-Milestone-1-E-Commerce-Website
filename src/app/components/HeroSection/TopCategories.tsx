export default function TopCategories() {
  const categories = [
    {
      id: 1,
      name: "Wing Chair",
      products: "3,584 Products",
      image: "/WingChair.png",
    },
    {
      id: 2,
      name: "Wooden Chair",
      products: "157 Products",
      image: "/WoodenChair.png",
    },
    {
      id: 3,
      name: "Desk Chair",
      products: "154 Products",
      image: "/DeskChair.png",
    },
  ];

  return (
    <div className="mx-2 md:mx-8 lg:mx-40 my-16">
      <h2 className="text-2xl font-bold mb-6">Top Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-72 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
              <h3 className="text-lg font-semibold">{category.name}</h3>
              <p className="text-sm">{category.products}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
