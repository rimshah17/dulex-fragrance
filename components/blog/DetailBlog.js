import CommentsSection from '../../components/blog/CommentsSection';
export default function DetailBlog() {
    return (
        <>
      <div className="container mx-auto py-8 px-4 lg:px-0">
        <div className="border border-gray-300 rounded-md overflow-hidden shadow-md">
          {/* Image Section */}
          <img
            src="/img/blogs/singleBlog.png"
            alt="Blog Detail"
            className="w-full h- object-cover"
          />
  
          {/* Content Section */}
          <div className="p-6">
            {/* Metadata */}
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <p className="flex items-center mr-4">
                <span className="material-icons mainColor mr-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.5 2.25V5.25" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.5 2.25V5.25" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.75 8.25H20.25" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.625 11.9998H11.25L9.75 13.8748C9.99664 13.8748 10.2395 13.9356 10.457 14.0518C10.6745 14.1681 10.86 14.3362 10.9971 14.5412C11.1341 14.7463 11.2185 14.9819 11.2427 15.2274C11.267 15.4728 11.2303 15.7205 11.136 15.9484C11.0417 16.1763 10.8926 16.3774 10.702 16.5339C10.5114 16.6904 10.2852 16.7976 10.0433 16.8458C9.80143 16.894 9.55139 16.8819 9.31534 16.8104C9.07928 16.7389 8.86449 16.6104 8.68999 16.4361" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.5 13.1248L15 11.9998V16.8748" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
                Feb 14, 2022
              </p>
              <p className="flex items-center mr-4">
              <span className="material-icons mainColor mr-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.7109 13.5L3 16.5V4.5C3 4.30109 3.07902 4.11032 3.21967 3.96967C3.36032 3.82902 3.55109 3.75 3.75 3.75H15.75C15.9489 3.75 16.1397 3.82902 16.2803 3.96967C16.421 4.11032 16.5 4.30109 16.5 4.5V12.75C16.5 12.9489 16.421 13.1397 16.2803 13.2803C16.1397 13.421 15.9489 13.5 15.75 13.5H6.7109Z" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 13.5V17.25C7.5 17.4489 7.57902 17.6397 7.71967 17.7803C7.86032 17.921 8.05109 18 8.25 18H17.2891L21 21V9C21 8.80109 20.921 8.61032 20.7803 8.46967C20.6397 8.32902 20.4489 8.25 20.25 8.25H16.5" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </span>
                3 Comments
              </p>
              <p className="flex items-center">
                <span className="mainColor">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15C14.0711 15 15.75 13.3211 15.75 11.25C15.75 9.17893 14.0711 7.5 12 7.5C9.92893 7.5 8.25 9.17893 8.25 11.25C8.25 13.3211 9.92893 15 12 15Z" stroke="#FF9F0D" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M5.98047 18.6913C6.54542 17.5806 7.40671 16.6478 8.469 15.9963C9.53129 15.3448 10.7531 15 11.9993 15C13.2455 15 14.4673 15.3448 15.5296 15.9963C16.5919 16.6478 17.4532 17.5806 18.0181 18.6913" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 5.25H21" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.75 3V7.5" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.89 10.5804C21.1879 12.456 20.8843 14.3776 20.0228 16.07C19.1612 17.7623 17.7859 19.1384 16.094 20.0009C14.4022 20.8635 12.4806 21.1681 10.6049 20.8713C8.72925 20.5744 6.99573 19.6912 5.65291 18.3484C4.31009 17.0056 3.42694 15.2721 3.13007 13.3964C2.83321 11.5207 3.13789 9.59917 4.00041 7.90731C4.86294 6.21546 6.23902 4.84015 7.93137 3.97858C9.62371 3.11701 11.5454 2.81342 13.4209 3.11134" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </span>
                Admin
              </p>
            </div>
  
            {/* Title */}
            <h1 className="text-2xl font-bold mb-4">
              10 Reasons To Do A Digital Detox Challenge
            </h1>
  
            {/* Description */}
            <p className="text-gray-600 mb-6 leading-7">
              Neutros proin tellus nulla commodo massa adipiscing in elementum
              magna congue condimentum placerat habitasse potenti orci ac quisque
              tristique vitae elementum et viverra at condimentum scelerisque eu
              mi. Etiam praesent eros vehicula a ullamcorper nulla scelerisque
              aliquet tempus faucibus quam ac aliquet nibh a condimentum
              suspendisse hac integer leo erat aliquam mi himenaeos.
            </p>
  
            {/* Blockquote */}
            <blockquote className="lightBg flex text-yellow-900 border-l-4 border-mainColor p-4 italic rounded-md mb-6">
            <svg className="mr-3" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.25 27H7.5C7.10218 27 6.72064 26.842 6.43934 26.5607C6.15804 26.2794 6 25.8978 6 25.5V13.5C6 13.1022 6.15804 12.7206 6.43934 12.4393C6.72064 12.158 7.10218 12 7.5 12H18.75C19.1478 12 19.5294 12.158 19.8107 12.4393C20.092 12.7206 20.25 13.1022 20.25 13.5V30C20.25 31.9891 19.4598 33.8968 18.0533 35.3033C16.6468 36.7098 14.7391 37.5 12.75 37.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42 27H29.25C28.8522 27 28.4706 26.842 28.1893 26.5607C27.908 26.2794 27.75 25.8978 27.75 25.5V13.5C27.75 13.1022 27.908 12.7206 28.1893 12.4393C28.4706 12.158 28.8522 12 29.25 12H40.5C40.8978 12 41.2794 12.158 41.5607 12.4393C41.842 12.7206 42 13.1022 42 13.5V30C42 31.9891 41.2098 33.8968 39.8033 35.3033C38.3968 36.7098 36.4891 37.5 34.5 37.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip.
            </blockquote>
  
            {/* Additional Paragraph */}
            <p className="text-gray-600 leading-7">
              Ac hac ullamcorper donec ante habitasse donec imperdiet varius
              varius purus a per augue magna hac. Ne nec ac vestibulum dui a
              tincidunt per a aptent interdum purus fusce et laoreet erat aptent
              inceptos nunc torquent euismod adipiscing adipiscing dui gravida
              justo.
            </p>
            <p className="text-gray-600 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua erat, sed
          aliquam volutpat. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est. Lorem
          ipsum dolor sit amet.
        </p>
        <div className="flex">
        <p className="text-gray-600 leading-7 w-1/2 sm:w-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua erat, sed
          aliquam volutpat. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua erat, sed
          aliquam volutpat. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua erat, sed
          aliquam volutpat. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est.rebum. Stet clita kasd gubergren, no sea takimata sanctus est. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua erat, sed
          aliquam volutpat. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
        </p>
          <img 
            src="/img/blogs/center.png"
            alt="Inline"
            className="w-full w-1/2 rounded-md inline md:hidden sm:hidden"
          />
      </div>
      <p className="text-gray-600 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua erat, sed
          aliquam volutpat. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="text-gray-600 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua erat, sed
          aliquam volutpat. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Tags & Share Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-4">
          {/* Tags */}
          <div className="flex flex-wrap align-center space-x-2 mb-4 md:mb-0">
            <span className="text-gray-600 font-medium">Tags:</span>
            <span className="text-mainColor font-light  text-sm">Restaurant</span>
            <span className="text-mainColor font-light text-sm">Dinner</span>
            <span className="text-mainColor font-light text-sm">Pizza</span>
            <span className="text-mainColor font-light text-sm">Yummy</span>
          </div>

          {/* Share Buttons */}
          <div className="flex space-x-4">
            {["facebook", "twitter", "instagram", "linkedin"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-mainColor text-white rounded-full hover:bg-orange-600"
              >
                {platform[0].toUpperCase()}
              </a>
            ))}
          </div>
        </div>
          </div>
        </div>
        <CommentsSection />
      </div>
      
      </>
    );
  }
  