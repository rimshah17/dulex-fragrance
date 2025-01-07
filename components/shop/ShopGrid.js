export default function ShopGrid({ products }) {
    return (
      <> 
        {/* Sort and Filter Options */}
        <div className="flex justify-start  sm:flex-wrap items-center mb-6">
          <div className="flex items-center gap-4 mt-1">
            <label className="font-medium">Sort By:</label>
            <select className="border px-4 py-2 rounded-md">
              <option>Newest</option>
              <option>Price (Low to High)</option>
              <option>Price (High to Low)</option>
            </select>
          </div>
          <div className="flex items-center gap-4 ml-4">
            <label className="font-medium">Show:</label>
            <select className="border px-4 py-2 rounded-md">
              <option>Default</option>
              <option>12</option>
              <option>24</option>
            </select>
          </div>
        </div>
  
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="mb-3 shadow-sm overflow-hidden transition"
            >
              <img src={product.image} alt={product.title} className="w-full object-cover" />
              <div className="">
                <h3 className="mt-1 text-lg font-medium">{product.title}</h3>
                <p className="text-mainColor font-bold mt-2">
                  {product.price}{" "}
                  {product.oldPrice && (
                    <span className="line-through text-gray-400 text-sm">{product.oldPrice}</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
  
        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <button className="px-4 py-2 border rounded-md">1</button>
          <button className="px-4 py-2 border rounded-md mx-2 buttonBg-color">2</button>
          <button className="px-4 py-2 border rounded-md">3</button>
        </div>
      </>
    );
  }
  