export default function ShopSidebar({ products }) {
    return (
      <aside>
        {/* Search */}
        <div className="mb-6 mt-8">
          <input
            type="text"
            placeholder="Search Product"
            className="w-full border px-4 py-2 rounded-md"
          />
        </div>
  
        {/* Category Filter */}
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-4">Category</h3>
          <ul className="space-y-2">
            {["Sandwiches", "Burger", "Chicken Chop", "Drink", "Pizza", "Non Veg", "Uncategorized"].map(
              (category, index) => (
                <li key={index}>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span>{category}</span>
                  </label>
                </li>
              )
            )}
          </ul>
        </div>
  
        {/* Promotional Banner */}
        <div className="border rounded-lg overflow-hidden shadow-md mb-6 sm:w-60">
          <img
            src="/img/shop/sideBanner.png"
            alt="Promo Banner"
            className="w-full  object-cover"
          />
         
        </div>
  
        {/* Latest Products */}
        <div>
          <h3 className="font-bold text-lg mb-4">Latest Products</h3>
          <ul className="space-y-4">
            {products.slice(0, 5).map((product, index) => (
              <li key={index} className="flex items-center space-x-4">
                <img src={product.image} alt={product.title} className="w-12 h-12 object-cover rounded-md" />
                <div>
                  <h4 className="text-sm font-bold">{product.title}</h4>
                  <p className="text-mainColor text-sm">{product.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Tags */}
        <div className="mt-6">
          <h3 className="font-bold text-lg mb-4">Product Tags</h3>
          <div className="flex flex-wrap gap-2">
            {["Pizza", "Cupcake", "Burger", "Cookies", "Our Shop", "Tandoori Chicken"].map(
              (tag, index) => (
                <span
                  key={index}
                  className=" bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-mainColor hover:text-white"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </aside>
    );
  }
  