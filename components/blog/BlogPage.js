export default function BlogPage() {
    return (
     <>
        {/* Left Side - Blog List */}
        <div className="w-full lg:w-3/4">
          {[1, 2, 3, 4].map((blog, index) => (
            <div
              key={index}
              className="mb-8 rounded-md overflow-hidden "
            >
              <img
                src={`/img/blogs/blog-${index + 1}.png`}
                alt={`Blog ${index + 1}`}
                className="w-full h-96 object-cover"
              />
              <div className="pt-6">
                <p className="mainColor flex font-bold mb-2 ">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.4781 3.75H4.49523C4.0815 3.75 3.74609 4.08579 3.74609 4.5V19.5C3.74609 19.9142 4.0815 20.25 4.49523 20.25H19.4781C19.8918 20.25 20.2272 19.9142 20.2272 19.5V4.5C20.2272 4.08579 19.8918 3.75 19.4781 3.75Z" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.4805 2.25V5.25" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.49219 2.25V5.25" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.74609 8.25H20.2272" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.61523 11.9996H11.2372L9.73895 13.8746C9.9853 13.8746 10.2279 13.9355 10.4451 14.0517C10.6624 14.1679 10.8477 14.336 10.9846 14.5411C11.1215 14.7461 11.2058 14.9818 11.23 15.2273C11.2542 15.4727 11.2176 15.7203 11.1234 15.9482C11.0291 16.1761 10.8803 16.3772 10.6899 16.5338C10.4995 16.6903 10.2735 16.7975 10.0319 16.8457C9.79032 16.8939 9.54057 16.8817 9.30478 16.8103C9.069 16.7388 8.85445 16.6102 8.68015 16.4359" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.4844 13.1248L14.9827 11.9998V16.8748" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 15 February 2022</p>
                <h2 className="text-xl font-bold mb-4">
                10 Reasons To Do A Digital Detox Challenge
                </h2>
                <p className="text-gray-600 mb-4">
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                </p>
                <a href="/blog-details" className="px-4 py-2 bg-buttonBg-color blogBtn rounded-md hover:bg-mainColor">
                  Read More →
                </a>
              </div>
            </div>
          ))}
          <div className="flex justify-center mt-6 space-x-2">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`px-3 py-2 border border-gray-300 rounded-md ${
                  page === 1
                    ? "buttonBg-color text-white"
                    : "bg-white text-gray-600 hover:bg-mainColor "
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
  
        </>
    );
  }
  