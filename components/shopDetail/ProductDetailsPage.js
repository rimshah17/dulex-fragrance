export default function ProductDetailsPage() {
  return (
    <div className="container mx-auto py-16 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section: Product Images */}
        <div className="w-full lg:w-3/6">
          <div className="flex flex-row justify-start space-y-4">
            {/* Thumbnail Images */}
            <div className="flex flex-col space-y-2 w-1/5 sm:flex-row sm:flex-wrap">
              {[1, 2, 3, 4].map((_, index) => (
                <img
                  key={index}
                  src={`/img/shopdetails/thum${index + 1}.png`} // Replace with actual images
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full pr-6 object-cover rounded-md cursor-pointer  hover:border-mainColor"
                />
              ))}
            </div>
            {/* Main Image */}
            <img  
              src="/img/shopdetails/mainshop.png" // Replace with the actual main image
              alt="Main Product"
              className="w-9/12 object-cover rounded-md shadow-md mt-0 mainProductIgm"
            />
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="w-full lg:w-3/6">
          <div>
            <p className="text-mainColor font-medium">In stock</p>
            <h1 className="text-3xl font-bold mt-2">Yummy Chicken Chop</h1>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
            <p className="text-2xl font-bold text-mainColor mt-4">$54.00</p>

            {/* Ratings */}
            <div className="flex items-center mt-4">
              <span className="text-yellow-500 text-lg">★★★★★</span>
              <p className="ml-2 text-sm text-gray-500">(5.0 Rating | 22 Reviews)</p>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center mt-6 space-x-4">
              <div className="flex items-center border rounded-md overflow-hidden">
                <button className="px-4 py-2 text-lg font-medium">-</button>
                <input
                  type="number"
                  defaultValue={1}
                  className="w-12 text-center border-l border-r"
                />
                <button className="px-4 py-2 text-lg font-medium">+</button>
              </div>
              <button className="bg-mainColor text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition">
                Add to cart
              </button>
            </div>

            {/* Wishlist, Compare, and Additional Info */}
            <div className="flex flex-wrap items-center space-x-4 mt-6">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-mainColor">
                <span>Add to Wishlist</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-mainColor">
                <span>Compare</span>
              </button>
            </div>

            {/* Categories and Tags */}
            <div className="mt-8">
              <p className="text-sm text-gray-500">
                <span className="font-bold">Category:</span> Pizza
              </p>
              <p className="text-sm text-gray-500 mt-2">
                <span className="font-bold">Tag:</span> Our Shop
              </p>
            </div>

            {/* Share Section */}
            <div className="mt-8">
              <h4 className="text-sm font-bold mb-2">Share:</h4>
              <div className="flex space-x-4">
                {["facebook", "twitter", "instagram", "pinterest", "linkedin"].map(
                  (social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-gray-600 hover:text-mainColor"
                    >
                      <i className={`fab fa-${social} text-lg`}></i>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
