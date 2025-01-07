import InnerHeader from "../../components/InnerHeader";
import Footer from "../../components/Footer";
import InnerPageBanner from "../../components/InnerPageBanner";
import ChefGrid from '../../components/chef/ChefGrid';


export default function SignUpForm() {
    return (
        <>
        <InnerHeader/>
        <InnerPageBanner  heading="Our Chef" breadcrumb="Menu" />
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-1 text-gray-600">Name</label>
              <div className="flex items-center border rounded-md px-3 py-2">
                
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full outline-none border-none text-gray-600"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-600">Email</label>
              <div className="flex items-center border rounded-md px-3 py-2">
                
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full outline-none border-none text-gray-600"
                />
              </div>
            </div>
  
            <div className="mb-4">
              <label className="block mb-1 text-gray-600">Password</label>
              <div className="flex items-center border rounded-md px-3 py-2">
                
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full outline-none border-none text-gray-600"
                />
              </div>
            </div>
  
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-mainColor focus:ring-mainColor"
              />
              <label htmlFor="remember" className="ml-2 text-gray-600">
                Remember me?
              </label>
            </div>
  
            <button className="w-full buttonBg-color py-2 rounded-md shadow-md ">
              Sign Up
            </button>
  
            <div className="text-center mt-4 text-sm">
              <a href="#" className="text-gray-500 hover:text-mainColor">
                Forgot password?
              </a>
            </div>
          </form>
  
          <div className="flex items-center justify-between mt-6">
            <span className="border-t flex-grow"></span>
            <span className="px-4 text-gray-400 text-sm">OR</span>
            <span className="border-t flex-grow"></span>
          </div>
  
          <div className="mt-6">
            <button className="w-full flex items-center justify-center border py-2 rounded-md mb-3 text-gray-600 hover:bg-gray-100">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.6313 10.534C15.6224 8.90075 16.3614 7.668 17.8572 6.76012C17.0203 5.56297 15.7559 4.90432 14.0865 4.77525C12.506 4.65064 10.7787 5.69648 10.1465 5.69648C9.47873 5.69648 7.94727 4.81976 6.74525 4.81976C4.26108 4.85981 1.62109 6.80018 1.62109 10.7477C1.62109 11.9137 1.83479 13.1182 2.26217 14.3614C2.83202 15.9947 4.8888 20 7.03463 19.9332C8.15651 19.9065 8.94895 19.1366 10.4092 19.1366C11.8249 19.1366 12.5595 19.9332 13.8104 19.9332C15.9741 19.9021 17.835 16.2617 18.3781 14.6239C15.4755 13.2577 15.6313 10.6186 15.6313 10.534ZM13.1115 3.22652C14.3269 1.7846 14.2156 0.47174 14.18 0C13.107 0.0623053 11.865 0.729862 11.1571 1.55318C10.378 2.43436 9.91947 3.5247 10.0174 4.753C11.1794 4.84201 12.2389 4.24566 13.1115 3.22652Z" fill="black"/>
</svg>

              Sign up with Google
            </button>
            <button className="w-full flex items-center justify-center border py-2 rounded-md text-gray-600 hover:bg-gray-100">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.6313 10.534C15.6224 8.90075 16.3614 7.668 17.8572 6.76012C17.0203 5.56297 15.7559 4.90432 14.0865 4.77525C12.506 4.65064 10.7787 5.69648 10.1465 5.69648C9.47873 5.69648 7.94727 4.81976 6.74525 4.81976C4.26108 4.85981 1.62109 6.80018 1.62109 10.7477C1.62109 11.9137 1.83479 13.1182 2.26217 14.3614C2.83202 15.9947 4.8888 20 7.03463 19.9332C8.15651 19.9065 8.94895 19.1366 10.4092 19.1366C11.8249 19.1366 12.5595 19.9332 13.8104 19.9332C15.9741 19.9021 17.835 16.2617 18.3781 14.6239C15.4755 13.2577 15.6313 10.6186 15.6313 10.534ZM13.1115 3.22652C14.3269 1.7846 14.2156 0.47174 14.18 0C13.107 0.0623053 11.865 0.729862 11.1571 1.55318C10.378 2.43436 9.91947 3.5247 10.0174 4.753C11.1794 4.84201 12.2389 4.24566 13.1115 3.22652Z" fill="black"/>
</svg>

              Sign up with Apple
            </button>
          </div>
        </div>
      </div>
        <Footer/>
        </>
    )

}

  