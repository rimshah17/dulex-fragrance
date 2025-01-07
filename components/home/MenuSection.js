export default function MenuSection() {
    return (
      <section className="bg-black text-white py-16">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
          <p className="text-center subTitle-bannerfont-light familytwo mb-2 xl:text-3xl md:text-2xl mainColor">Choose & pick</p>
            <h2 className="text-center	 xl:text-5xl md:text-4xl  font-bold mb-4 leading-tight">
            <span className="mainColor">Fr</span>om Our Menu
            </h2>
          </div>
  
          {/* Menu Categories */}
          <ul className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              "Breakfast",
              "Lunch",
              "Dinner",
              "Dessert",
              "Drink",
              "Snack",
              "Soups",
            ].map((category) => (
              <li
                key={category}
                className="text-sm md:text-base lg:text-lg text-whitetext hover:text-bordercoloryello cursor-pointer"
              >
                {category}
              </li>
            ))}
          </ul>
  
          <div className="flex flex-col lg:flex-row md:gap-10 xl:gap-20 px-6">
            <div className="flex justify-center items-center relative">
              <img src="/img/home/salad-plate.png" alt="Salad" className="md:max-w-[300px] xl:max-w-[400px] lg:max-w-[500px] rounded-lg" />
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Lettuce Leaf",
                  description: "Lacus nisi, et ac dapibus velit in consequat.",
                  price: "12.5$",
                  image: "/img/home/menu1.png",
                },
                {
                  name: "Fresh Breakfast",
                  description: "Lacus nisi, et ac dapibus velit in consequat.",
                  price: "14.5$",
                  image: "/img/home/menu1.png",
                },
                {
                  name: "Mild Butter",
                  description: "Lacus nisi, et ac dapibus velit in consequat.",
                  price: "12.5$",
                  image: "/img/home/menu1.png",
                },
                {
                  name: "Fresh Bread",
                  description: "Lacus nisi, et ac dapibus velit in consequat.",
                  price: "12.5$",
                  image: "/img/home/menu1.png",
                },
                {
                  name: "Glow Cheese",
                  description: "Lacus nisi, et ac dapibus velit in consequat.",
                  price: "12.5$",
                  image: "/img/home/menu1.png",
                },
                {
                  name: "Italian Pizza",
                  description: "Lacus nisi, et ac dapibus velit in consequat.",
                  price: "14.5$",
                  image: "/img/home/menu1.png",
                },
                {
                  name: "Slice Beef",
                  description: "Lacus nisi, et ac dapibus velit in consequat.",
                  price: "12.5$",
                  image: "/img/home/menu1.png",
                },
                {
                  name: "Mushroom Pizza",
                  description: "Lacus nisi, et ac dapibus velit in consequat.",
                  price: "12.5$",
                  image: "/img/home/menu1.png",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4  rounded-md bg-black"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-md object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-bold">{item.name}</h4>
                    <p className="text-sm text-gray-400">{item.description}</p>
                    <p className="mainColor font-bold mt-2">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  