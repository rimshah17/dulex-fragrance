export default function RestaurantProcess() {
    return (
      <section className="relative bg-black text-white py-16 processSection">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          {/* Left Content: Image */}
          <div className="flex-1">
          
          </div>
  
          {/* Right Content: Text and Buttons */}
          <div className="flex-1 px-6 lg:px-12 text-right">
            <p className=" subTitle-bannerfont-light familytwo mb-2 xl:text-3xl md:text-2xl mainColor">
              Restaurant Active Process
            </p>
            <h2 className=" lg:text-4xl md:text-3xl sm:text-2xl font-bold mb-4 leading-tight">
              We Document Every Food <br />
              Bean Process until it is saved
            </h2>
            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna.
            </p>
  
            {/* Buttons */}
            <div className="flex justify-end items-center gap-4">
              <button className="bg-yellow-500 text-black px-6 py-3 rounded-full hover:bg-yellow-600 transition">
                Read More
              </button>
              <button className="flex items-center gap-2 p-5  border border-yellow-500 text-yellow-500 rounded-full mainColor hover:text-black transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.79 5.093a.5.5 0 0 1 .51-.034l4.5 2.5a.5.5 0 0 1 0 .884l-4.5 2.5A.5.5 0 0 1 6.5 10.5v-5a.5.5 0 0 1 .29-.407z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  