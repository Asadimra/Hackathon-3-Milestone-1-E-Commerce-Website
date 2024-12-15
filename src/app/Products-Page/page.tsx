import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import NewsletterSection from "./NewsLetter";

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Library Stool Chair",
      price: "$20",
      tag: "New",
      image: "/chair1.png",
    },
    {
      id: 2,
      name: "Library Stool Chair",
      price: "$20",
      oldPrice: "$30",
      tag: "Sale",
      image: "/chair2.png",
    },
    { id: 3, name: "Library Stool Chair", price: "$20", image: "/chair3.png" },
    { id: 4, name: "Library Stool Chair", price: "$20", image: "/chair4.png" },
    {
      id: 5,
      name: "Library Stool Chair",
      price: "$20",
      tag: "New",
      image: "/WoodenChair.png",
    },
    {
      id: 6,
      name: "Library Stool Chair",
      price: "$20",
      oldPrice: "$30",
      tag: "Sale",
      image: "/HotCategory4.png",
    },
    {
      id: 7,
      name: "Library Stool Chair",
      price: "$20",
      image: "/OurProduct1.png",
    },
    {
      id: 8,
      name: "Library Stool Chair",
      price: "$20",
      image: "/Hotcategory5.png",
    },
    {
      id: 9,
      name: "Library Stool Chair",
      price: "$20",
      tag: "New",
      image: "/WingChair.png",
    },
    {
      id: 10,
      name: "Library Stool Chair",
      price: "$20",
      oldPrice: "$30",
      tag: "Sale",
      image: "/chair2.png",
    },
    {
      id: 11,
      name: "Library Stool Chair",
      price: "$20",
      image: "/chair3.png",
    },
    {
      id: 12,
      name: "Library Stool Chair",
      price: "$20",
      image: "/DeskChair.png",
    },
  ];

  return (
    <div>
      <div className="mx-40 ">
        <h2 className="text-2xl font-semibold m-6">All Products</h2>
        <div className="grid grid-cols-4 gap-8 mb-16">
          {products.map((product) => (
            <div key={product.id} className="rounded-lg relative">
              {product.tag && (
                <span
                  className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold text-white rounded ${
                    product.tag === "New" ? "bg-[#01AD5A]" : "bg-[#F5813F]"
                  }`}
                >
                  {product.tag}
                </span>
              )}
             {product.id === 2 || product.id === 10 ? (
                <Link href="/SingleProduct">
                  <img src={product.image} alt={product.name} />
                </Link>
              ) : (
                <img src={product.image} alt={product.name} />
              )}
              <h3
                className={`mt-4 text-sm font-medium  ${
                  product.id === 1 ? "text-green-500" : "text-gray-700"
                }`}
              >
                {product.name}
              </h3>
              <div className="flex items-center justify-between mt-2">
                <div className="text-gray-900 font-bold">
                  {product.price}
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through text-sm font-normal ml-2">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
                <button
                  className={`p-2 rounded-lg ${
                    product.id === 1 || product.id === 5 || product.id === 9
                      ? "text-white bg-[#007580]"
                      : "text-black bg-[#F0F2F3]"
                  }`}
                >
                  <ShoppingCart />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <NewsletterSection />
    </div>
  );
}

