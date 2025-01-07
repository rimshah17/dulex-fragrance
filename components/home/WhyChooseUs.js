import Image from "next/image";
export default function WhyChooseUs() {
    return (
      <section className="bg-black text-white py-12 px-6 whyChosseHome">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Content */}
          <div className="leftImages">
            
              <img src="/img/home/whychose.png" alt="Food 1" className="rounded-lg w-full" />
           
          </div>
  
          {/* Right Content */}
          <div>
          <p className="subTitle-banner font-light familytwo mb-2 xl:text-3xl md:text-2xl mainColor">Why Choose us</p>  
          <h2 className="xl:text-5xl md:text-4xl  font-bold mb-4 leading-tight sm:text-3xl">
            <span className="mainColor">Ex</span>tra ordinary taste<br />
            And Experienced
            </h2>
           
            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus.
            </p>
  
            {/* Icons with Text */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="flex flex-col items-center">
              <img src="/img/home/icon1.png" alt="icon1" className=" w-28" />
                <p className="mt-2 text-center">Fast Food</p>
              </div>
              <div className="flex flex-col items-center">
              <img src="/img/home/icon2.png" alt="icon1" className=" w-28" />
                <p className="mt-2 text-center">Lunch</p>
              </div>
              <div className="flex flex-col items-center">
              <img src="/img/home/icon3.png" alt="icon1" className=" w-28" />
                <p className="mt-2 text-center">Dinner</p>
              </div>
            </div>
  
            {/* Statistic */}
            <div className="flex items-center bg-white rounded-lg p-4 shadow-lg maidel">
              <span className="text-4xl md:text-2xl font-bold mainColor mr-2">30+</span>
              <h4 className="text-2xl font-bold text-black"><span className="font-light">Years of</span> Experienced</h4>
            </div>
          </div>
        </div>
      </section>
    );
  }
  