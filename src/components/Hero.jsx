import React from "react";

function Hero() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            Build and ship software on a
          </h1>
          <h1 className="text-5xl font-bold mb-6">
            single, collaborative platform
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Join the world’s most widely adopted AI-powered developer platform.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-3 rounded-md bg-white text-gray-900 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold">
              Sign up for GitHub
            </button>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-white mb-2">100M+</h3>
              <p className="text-gray-400">Developers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-white mb-2">90M+</h3>
              <p className="text-gray-400">Repositories</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-white mb-2">4M+</h3>
              <p className="text-gray-400">Organizations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
