export default function LatestBlog() {
    return (
      <section className="bg-black text-white py-16">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <p className="text-center subTitle-bannerfont-light familytwo mb-2 xl:text-3xl md:text-2xl mainColor">Blog Post</p>
            <h2 className="text-center lg:text-4xl md:text-3xl sm:text-2xl font-bold mb-4 leading-tight">
            <span className="mainColor">La</span>test News & Blog
            </h2>
          </div>
  
          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 gap-8 blogHOme">
            {[
              {
                image: "/img/home/blog1.png", // Replace with actual image path
                date: "10 February 2022",
                title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
                link: "#",
              },
              {
                image: "/img/home/blog1.png", // Replace with actual image path
                date: "10 February 2022",
                title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
                link: "#",
              },
              {
                image: "/img/home/blog1.png", // Replace with actual image path
                date: "10 February 2022",
                title: "Curabitur rutrum velit ac congue malesuada",
                link: "#",
              },
            ].map((blog, index) => (
              <div
                key={index}
                className="bg-black rounded-lg shadow-lg overflow-hidden"
              >
                {/* Blog Image */}
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full  object-cover"
                />
  
                {/* Blog Content */}
                <div className="p-4">
                  <p className="text-yellow-500 text-sm mb-2">{blog.date}</p>
                  <h3 className="font-bold text-lg mb-4">{blog.title}</h3>
                  <div className="flex justify-between">
                    <div>
                  <a
                    href={blog.link}
                    className="text-yellow-500 font-bold hover:underline"
                  >
                    Learn More
                  </a>
                  </div>
                  <div className="share">
                    <img src="img/home/social.png" alt="" />
                  </div>
                  </div>

                </div>
  
                {/* Blog Footer */}
               
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  