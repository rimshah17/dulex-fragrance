import Image from 'next/image';
export default function AboutSection() {
    return (
      <section className="bg-black text-white py-28 px-6">
        <div className="container mx-auto items-center	grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Content */}
          <div>
            <p className="subTitle-bannerfont-light familytwo mb-2 text-2xl mainColor">About us</p>
            <h2 className=" xl:text-5xl md:text-4xl sm:text-3xl font-bold mb-4 leading-tight"> 
            <span className="mainColor">We</span> Create the best foody product
            </h2>
            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus.
            </p>
            {/* Checkmarks List */}
            <ul className="space-y-4 text-gray-300 mb-5">
              <li className="flex items-start">
                <span className="mainColor text-lg mr-3">✔</span>
                <span>Lacus nisi, et ac dapibus sit eu velit in consequat.</span>
              </li>
              <li className="flex items-start">
                <span className="mainColor text-lg mr-3">✔</span>
                <span>Quisque diam pellentesque bibendum non dui volutpat fringilla</span>
              </li>
              <li className="flex items-start">
                <span className="mainColor text-lg mr-3">✔</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
              </li>
            </ul>
            {/* Button */}
            <a href='#' className="homeBtn text-white px-10 py-3 rounded-full  transition">
              Read More
            </a>
          </div>
  
          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <img
                src="/img/home/about-left.png"
                alt="Food Image 1"
                className="rounded-lg w-full"
              />
            </div>
            
          </div>
        </div>
      </section>
    );
  }
  