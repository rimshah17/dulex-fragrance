export default function InnerHeader() {
    return (
      <header className="bg-black text-white py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="mainColor">Food</span>tuck
          </div>
  
          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-6 ">
            {["Home", "Menu", "Blog", "Pages", "About", "Shop", "Contact"].map(
              (item, index) => (
                <a
                  key={index}
                  href={` ${item.toLowerCase()}`}
                  className={`text-sm ${
                    item === "Home"
                      ? " font-bold"
                      : ""
                  }`}
                >
                  {item}
                </a>
              )
            )}
          </nav>
  
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="">
            
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                // strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M16.7 10.6a6.1 6.1 0 1 0-6.1 6.1 6.1 6.1 0 0 0 6.1-6.1z"
                />
              </svg>
            </button>
            <a href="/signup" className="">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
            <path d="M2.90527 20.2491C3.82736 18.6531 5.15322 17.3278 6.74966 16.4064C8.34611 15.485 10.1569 15 12.0002 15C13.8434 15 15.6542 15.4851 17.2506 16.4065C18.8471 17.3279 20.1729 18.6533 21.0949 20.2493" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            </a>
            <a href="/cart" className="">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5787 20.25H4.42122C4.23665 20.25 4.05856 20.1819 3.92103 20.0588C3.7835 19.9358 3.69619 19.7663 3.67581 19.5828L2.34248 7.58282C2.33083 7.47799 2.34143 7.37188 2.37357 7.27142C2.40572 7.17095 2.4587 7.0784 2.52904 6.99981C2.59939 6.92121 2.68553 6.85834 2.78182 6.81529C2.87812 6.77225 2.98241 6.75 3.08789 6.75H20.912C21.0175 6.75 21.1218 6.77225 21.2181 6.81529C21.3144 6.85834 21.4005 6.92121 21.4708 6.99981C21.5412 7.0784 21.5942 7.17095 21.6263 7.27142C21.6585 7.37188 21.6691 7.47799 21.6574 7.58282L20.3241 19.5828C20.3037 19.7663 20.2164 19.9358 20.0789 20.0588C19.9413 20.1819 19.7632 20.25 19.5787 20.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.25 9.75V6.75C8.25 5.75544 8.64509 4.80161 9.34835 4.09835C10.0516 3.39509 11.0054 3 12 3C12.9946 3 13.9484 3.39509 14.6517 4.09835C15.3549 4.80161 15.75 5.75544 15.75 6.75V9.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            </a>
          </div>
        </div>
      </header>
    );
  }
  