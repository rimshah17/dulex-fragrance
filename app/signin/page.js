import InnerHeader from "../../components/InnerHeader";
import Footer from "../../components/Footer";
import InnerPageBanner from "../../components/InnerPageBanner";
import ChefGrid from '../../components/chef/ChefGrid';


export default function SignInCom() {
    return (
      <>       <InnerHeader/>
              <InnerPageBanner  heading="Our Chef" breadcrumb="Menu" />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-white via-yellow-50 to-white">
        <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="relative mt-1">
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring "
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative mt-1">
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring "
                />
            
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="inline-flex items-center text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="form-checkbox border-gray-300 rounded "
                />
                <span className="ml-2">Remember me?</span>
              </label>
              <a
                href="#"
                className="text-sm text-yellow-500 hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Sign In
            </button>
          </form>
          <div className="my-4 flex items-center">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-sm text-gray-500">OR</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <div className="space-y-2">
            <button className="w-full flex items-center justify-center bg-gray-100 py-2 px-4 rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:ring-yellow-400">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.6313 10.534C15.6224 8.90075 16.3614 7.668 17.8572 6.76012C17.0203 5.56297 15.7559 4.90432 14.0865 4.77525C12.506 4.65064 10.7787 5.69648 10.1465 5.69648C9.47873 5.69648 7.94727 4.81976 6.74525 4.81976C4.26108 4.85981 1.62109 6.80018 1.62109 10.7477C1.62109 11.9137 1.83479 13.1182 2.26217 14.3614C2.83202 15.9947 4.8888 20 7.03463 19.9332C8.15651 19.9065 8.94895 19.1366 10.4092 19.1366C11.8249 19.1366 12.5595 19.9332 13.8104 19.9332C15.9741 19.9021 17.835 16.2617 18.3781 14.6239C15.4755 13.2577 15.6313 10.6186 15.6313 10.534ZM13.1115 3.22652C14.3269 1.7846 14.2156 0.47174 14.18 0C13.107 0.0623053 11.865 0.729862 11.1571 1.55318C10.378 2.43436 9.91947 3.5247 10.0174 4.753C11.1794 4.84201 12.2389 4.24566 13.1115 3.22652Z" fill="black"/>
</svg>
              Sign up with Google
            </button>
            <button className="w-full flex items-center justify-center bg-gray-100 py-2 px-4 rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:ring-yellow-400">
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

    );
  }
  