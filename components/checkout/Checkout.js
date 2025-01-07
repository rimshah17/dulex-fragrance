export default function Checkout() {
    return (
      <div className="container mx-auto py-12 px-4 lg:px-0">
    
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="lg:col-span-2 bg-white p-6 rounded-md">
            <h2 className="text-xl font-bold mb-6">Shipping Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <select
                className="w-full p-2 border border-gray-300 rounded"
                defaultValue=""
              >
                <option value="" disabled>
                  Choose country
                </option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
              </select>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                defaultValue=""
              >
                <option value="" disabled>
                  Choose city
                </option>
                <option value="nyc">New York</option>
                <option value="london">London</option>
              </select>
              <input
                type="text"
                placeholder="Zip code"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Address 1"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Address 2"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mt-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 border-gray-300" />
                <span>Same as shipping address</span>
              </label>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
                &larr; Back to cart
              </button>
              <button className="buttonBg-color px-6 py-2 rounded hover:bg-yellow-600 flex items-center">
                Proceed to shipping &rarr;
              </button>
            </div>
          </div>
  
          {/* Right Section */}
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <img
                    src="/img/checkout/tikka.png"
                    alt="Product"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">Chicken Tikka Kabab</h3>
                    <p className="text-sm text-gray-600">150 gm net</p>
                    <p className="text-sm text-gray-600">$50</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Sub-total</span>
                <span>$130</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>25%</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$54.76</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>$432.65</span>
              </div>
            </div>
            <button className="mt-6 w-full buttonBg-color  py-3 rounded hover:bg-yellow-600">
              Place an order &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
  