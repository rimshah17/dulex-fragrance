export default function CouponAndTotalBill() {
    return (
      <div className="container mx-auto py-8 px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Coupon Code Section */}
          <div className="flex-1 border border-gray-300 p-6 rounded-md shadow-sm">
            <h2 className="text-xl font-bold mb-4">Coupon Code</h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non.
            </p>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter Here code"
                className="flex-1 border border-gray-300 p-2 rounded-l-md focus:outline-none"
              />
              <button className="buttonBg-color  text-white px-6 py-2 rounded-r-md hover:bg-orange-600">
                Apply
              </button>
            </div>
          </div>
  
          {/* Total Bill Section */}
          <div className="flex-1 border border-gray-300 p-6 rounded-md shadow-sm">
            <h2 className="text-xl font-bold mb-4">Total Bill</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <p className="text-gray-600">Cart Subtotal</p>
                <p className="font-bold">$120.00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Shipping Charge</p>
                <p className="font-bold">$0.00</p>
              </div>
              <div className="flex justify-between border-t border-gray-300 pt-4">
                <p className="font-bold">Total Amount</p>
                <p className="font-bold text-mainColor">$205.00</p>
              </div>
            </div>
            <button className="w-full buttonBg-color text-white py-3 mt-6 rounded-md hover:bg-orange-600">
              Proceed to Checkout →
            </button>
          </div>
        </div>
      </div>
    );
  }
  