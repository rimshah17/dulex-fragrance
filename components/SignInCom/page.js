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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
                />
                <span className="absolute top-2 left-3 text-gray-500">
                  📧
                </span>
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
                />
                <span className="absolute top-2 left-3 text-gray-500">
                  🔒
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="inline-flex items-center text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="form-checkbox border-gray-300 rounded focus:ring-yellow-400"
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
              <img
                src="/img/google-logo.png"
                alt="Google"
                className="w-5 h-5 mr-3"
              />
              Sign up with Google
            </button>
            <button className="w-full flex items-center justify-center bg-gray-100 py-2 px-4 rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:ring-yellow-400">
              <img
                src="/img/apple-logo.png"
                alt="Apple"
                className="w-5 h-5 mr-3"
              />
              Sign up with Apple
            </button>
          </div>
        </div>
      </div>
       <Footer/>
      </>

    );
  }
  