import React from 'react';

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 font-lato py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 sm:p-12 md:p-16 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-md">
        <h1 className="text-2xl sm:text-3xl font-bold font-josefin text-center mb-4">Login</h1>
        <p className="text-[#9096B2] text-sm sm:text-lg text-center mb-6">
          Please login using account detail below.
        </p>
        <form>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="w-full border placeholder:text-[#9096B2] border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full border placeholder:text-[#9096B2] border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="mb-4 text-center">
            <a href="#" className="text-[#9096B2] text-sm hover:underline">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-[#FB2E86] hover:bg-pink-600 text-white py-2 rounded-md font-semibold transition-colors"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-[#9096B2] text-sm sm:text-lg mt-6">
          Don’t have an Account? <a href="#" className="text-pink-500 hover:underline">Create account</a>
        </p>
      </div>
    </div>
  );
}
