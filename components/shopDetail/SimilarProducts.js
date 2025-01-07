export default function SimilarProducts() {
  const products = [
    { image: "/img/shop/s1.png", title: "Fresh Lime", price: "$38.00", oldPrice: "$45.00" },
    { image: "/img/shop/s2.png", title: "Chocolate Muffin", price: "$28.00", oldPrice: "$45.00" },
    { image: "/img/shop/s3.png", title: "Burger", price: "$21.00", oldPrice: "$45.00" },
    { image: "/img/shop/s4.png", title: "Fresh Lime", price: "$38.00", oldPrice: "$45.00" },
  ];

  return (
    <div className="container mx-auto py-8 px-4 lg:px-0">
      <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 similarProduct">
        {products.map((product, index) => (
          <div key={index} className="border rounded-md overflow-hidden shadow-md">
            <img
              src={product.image}
              alt={product.title}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{product.title}</h3>
              <p className="text-mainColor font-bold mt-2">
                {product.price}{" "}
                {product.oldPrice && (
                  <span className="line-through text-gray-400 text-sm">
                    {product.oldPrice}
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
