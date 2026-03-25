import React from 'react';
import Logo from "../assets/img/logo.webp";

function Profile() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">

      <div className="bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md w-full text-center">

        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <img
            src={Logo}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-blue-500"
          />
        </div>

        {/* Name */}
        <h2 className="text-2xl font-bold mb-2">
          Mario
        </h2>

        {/* Role */}
        <p className="text-blue-400 mb-4">
          Web Developer
        </p>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Info */}
        <div className="text-left text-sm text-gray-300 space-y-2 mb-6">
          <p><span className="text-white font-medium">Email:</span> lorem@example.com</p>
          <p><span className="text-white font-medium">Phone:</span> 0812-3456-7890</p>
          <p><span className="text-white font-medium">Location:</span> Indonesia</p>
        </div>
      </div>

    </div>
  )
}

export default Profile
