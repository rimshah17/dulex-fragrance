export default function SidebarBog() {
    return (
     
    <>
        {/* Right Side - Sidebar */}
        <div className="w-full lg:w-1/4">
          {/* Search */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none"
            />
          </div>
  
          {/* Profile Section */}
          <div className="border border-gray-200 rounded-md shadow-md p-6 text-center mb-8">
            <img
              src="/img/blogs/profile.png"
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Author Name</h3>
            <p className="text-gray-600 mb-4">Food Blogger</p>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex justify-center space-x-4">
              <button className=" blogBtn px-4 py-2 bg-buttonBg-color text-white rounded-md hover:bg-mainColor">
                Follow
              </button>
            </div>
          </div>
  
          {/* Recent Posts */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
            {[1, 2, 3].map((post, index) => (
              <div key={index} className="mb-4 flex items-center">
                <img
                  src={`/img/blogs/re${index + 1}.png`}
                  alt={`Recent ${index + 1}`}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                <span className="text-gray-600 font-light block text-xs">June 22, 2020</span>
                <p className="text-gray-600">Lorem ipsum dolor sit cingelit, sed do.</p>
                </div> 
              </div>
            ))}
          </div>
  
          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2 tagsMain">
              {["Food", "Beverage", "Healthy", "Snacks"].map((category) => (
                <li key={category} className="text-gray-600 hover:text-mainColor">
                  {category}
                </li>
              ))}
            </ul>
          </div>
  
          {/* Gallery */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((img) => (
                <img
                  key={img}
                  src={`/img/shop/s${img}.png`}
                  alt={`Gallery ${img}`}
                  className="w-full h-16 object-cover rounded-md"
                />
              ))}
            </div>
          </div>
  
          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <img src="/img/blogs/icon.png" alt="" />
            </div>
          </div>
        </div>
    </>
      
    );
  }
  