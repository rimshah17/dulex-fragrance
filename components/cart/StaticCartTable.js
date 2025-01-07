export default function StaticCartTable() {
    return (
      <div className="container mx-auto py-8 px-4 lg:px-0">
        <table className="w-full border-collapse ">
          {/* Table Header */}
          <thead>
            <tr className="text-left">
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Total</th>
              <th className="px-4 py-2">Remove</th>
            </tr>
          </thead>
  
          {/* Table Body */}
          <tbody>
            {/* Row 1 */}
            <tr className="border-b">
              <td className=" px-4 py-2 flex items-center space-x-4">
                <img
                  src="/img/shop/s4.png"
                  alt="Burger"
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p className="font-bold">Burger</p>
                  <p className="mainColor text-sm">★★★★☆</p>
                </div>
              </td>
              <td className=" px-4 py-2">$35.00</td>
              <td className=" px-4 py-2 text-center">1</td>
              <td className=" px-4 py-2">$35.00</td>
              <td className=" px-4 py-2 text-center">
                <button className="text-red-500 font-bold hover:text-red-700">×</button>
              </td>
            </tr>
  
            {/* Row 2 */}
            <tr className="border-b">
              <td className=" px-4 py-2 flex items-center space-x-4">
                <img
                  src="/img/shop/s5.png"
                  alt="Fresh Lime"
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p className="font-bold">Fresh Lime</p>
                  <p className="mainColor text-sm">★★★☆☆</p>
                </div>
              </td>
              <td className=" px-4 py-2">$25.00</td>
              <td className=" px-4 py-2 text-center">1</td>
              <td className=" px-4 py-2">$25.00</td>
              <td className=" px-4 py-2 text-center">
                <button className="text-red-500 font-bold hover:text-red-700">×</button>
              </td>
            </tr>
  
            {/* Row 3 */}
            <tr className="border-b">
              <td className=" px-4 py-2 flex items-center space-x-4">
                <img
                  src="/img/shop/s6.png"
                  alt="Pizza"
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p className="font-bold">Pizza</p>
                  <p className="mainColor text-sm">★★★☆☆</p>
                </div>
              </td>
              <td className=" px-4 py-2">$15.00</td>
              <td className=" px-4 py-2 text-center">1</td>
              <td className=" px-4 py-2">$15.00</td>
              <td className=" px-4 py-2 text-center">
                <button className="text-red-500 font-bold hover:text-red-700">×</button>
              </td>
            </tr>
  
            {/* Row 4 */}
            <tr className="border-b">
              <td className=" px-4 py-2 flex items-center space-x-4">
                <img
                  src="/img/shop/s7.png"
                  alt="Chocolate Muffin"
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p className="font-bold">Chocolate Muffin</p>
                  <p className="mainColor text-sm">★★★☆☆</p>
                </div>
              </td>
              <td className=" px-4 py-2">$45.00</td>
              <td className=" px-4 py-2 text-center">1</td>
              <td className=" px-4 py-2">$45.00</td>
              <td className=" px-4 py-2 text-center">
                <button className="text-red-500 font-bold hover:text-red-700">×</button>
              </td>
            </tr>
  
            {/* Row 5 */}
            <tr>
              <td className=" px-4 py-2 flex items-center space-x-4">
                <img
                  src="/img/shop/s9.png"
                  alt="Cheese Butter"
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p className="font-bold">Cheese Butter</p>
                  <p className="mainColor text-sm">★★★☆☆</p>
                </div>
              </td>
              <td className=" px-4 py-2">$15.00</td>
              <td className=" px-4 py-2 text-center">1</td>
              <td className=" px-4 py-2">$15.00</td>
              <td className=" px-4 py-2 text-center">
                <button className="text-red-500 font-bold hover:text-red-700">×</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  