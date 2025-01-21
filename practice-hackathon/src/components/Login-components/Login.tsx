import React from 'react';

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-[70vh] font-lato">
      <div className="bg-white shadow-lg rounded-lg p-16 w-[30%] h-auto">
        <h1 className="text-3xl font-bold font-josefin text-center mb-4">Login</h1>
        <p className="text-[#9096B2] text-lg text-center mb-6">
          Please login using account detail below.
        </p>
        <form>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="w-full border placeholder:text-[#9096B2] border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full border placeholder:text-[#9096B2] border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="mb-4">
            <a href="#" className="text-[#9096B2] text-sm hover:underline">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-[#FB2E86] hover:bg-pink-600 text-white py-2 rounded-sm font-semibold transition-colors"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-[#9096B2] text-lg mt-6">
          Don’t have an Account? Create account
        </p>
      </div>
    </div>
  );
}
