const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800 text-center">
          Sign In
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <div className="mb-6">
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded focus:outline-none"
              type="submit"
            >
              Signin
            </button>
          </div>
        </form>

        {/* Social Authentication Buttons */}
        <div className="text-center">
          <p className="text-gray-600">Or register with</p>
          <div className="flex justify-center mt-2">
            {/* Google Button */}
            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded mr-4">
              <i className="fab fa-google mr-2"></i> Google
            </button>

            {/* GitHub Button */}
            <button className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded">
              <i className="fab fa-github mr-2"></i> GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
