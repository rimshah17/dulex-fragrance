export default function ChefGrid() {
    const chefs = [
      { name: "Tahmina Rumi", role: "Chef", img: "/img/chef/c1.png" },
      { name: "Jorina Begum", role: "Chef", img: "/img/chef/c2.png" },
      { name: "M. Mohammad", role: "Chef", img: "/img/chef/c3.png" },
      { name: "Munna Kathy", role: "Chef", img: "/img/chef/c4.png" },
      { name: "Tahmina Rumi", role: "Chef", img: "/img/chef/c5.png" },
      { name: "Bisnu Devgon", role: "Chef", img: "/img/chef/c6.png" },
      { name: "Motin Molladsf", role: "Chef", img: "/img/chef/c7.png" },
      { name: "William Rumi", role: "Chef", img: "/img/chef/c8.png" },
      { name: "Kets William Roy", role: "Chef", img: "/img/chef/c9.png" },
      { name: "Mahmud Kholil", role: "Chef", img: "/img/chef/c10.png" },
      { name: "Ataur Rahman", role: "Chef", img: "/img/chef/c11.png" },
      { name: "Monalisa Holly", role: "Chef", img: "/img/chef/c12.png" },
      
    ];
  
    return (
      <div className="container mx-auto py-12 px-4 lg:px-0 chefContainer">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
          Our Chefs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className="flex-col items-center text-center space-y-4"
            >
              <img
                src={chef.img}
                alt={chef.name}
                className="w-full  h-auto rounded-md"
              />
              <h3 className="text-lg font-semibold">{chef.name}</h3>
              <p className="text-gray-600 mt-0">{chef.role}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  