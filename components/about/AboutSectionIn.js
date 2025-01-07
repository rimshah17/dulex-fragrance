export default function AboutSectionIn() {
    return (
      <div className="container mx-auto py-12 px-4 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Left Side - Single Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/img/about/left.png"
            alt="Placeholder"
            className="w-full max-w-md "
          />
        </div>
  
        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 space-y-6">
        <p className="subTitle-bannerfont-light familytwo mb-2 text-2xl mainColor">About us</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Food is an important <br />
            part Of a balanced Diet
            </h2>
          
          <p className="text-gray-600 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
            pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
            augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
            sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
            consequat.
          </p>
          <div className="flex items-center space-x-4">
            <button className="buttonBg-color text-white px-6 py-3 rounded-md shadow-md hover:bg-orange-600">
              Show more
            </button>
            
          </div>
        </div>
      </div>
    );
  }
  