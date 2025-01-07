
export default function MeetOurChef() {
    return (
      <section className="bg-black text-white py-16">
        <div className="container mx-auto text-center">
        <p className="text-center subTitle-bannerfont-light familytwo mb-2 xl:text-3xl md:text-2xl mainColor">Chefs</p>
            <h2 className="text-center xl:text-5xl md:text-4xl sm:text-3xl font-bold mb-4 leading-tight">
            <span className="mainColor">Me</span>et Our Chef
            </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 gap-6 mt-10 homeChef">
            {[
              {
                name: "D. Estwood",
                role: "Chief Chef",
                image: "/img/home/chef1.png",
              },
              {
                name: "D. Scoriesh",
                role: "Assistant Chef",
                image: "/img/home/chef1.png",
              },
              {
                name: "M. William",
                role: "Advertising Chef",
                image: "/img/home/chef1.png",
              },
              {
                name: "W. Readfroad",
                role: "Chef",
                image: "/img/home/chef1.png",
              },
            ].map((chef, index) => (
              <div
                key={index}
                className="rounded-md overflow-hidden shadow-lg"
              >
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full  object-cover"
                />
                <div className="p-4 text-left text-blackbg-white  chefDetails">
                  <h4 className="font-bold text-lg">{chef.name}</h4>
                  <p className="">{chef.role}</p>
                </div>
              </div>
            ))}
          </div>
  
          <button className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-full hover:bg-yellow-600 transition">
            See More
          </button>
        </div>
      </section>
    );
  }
  