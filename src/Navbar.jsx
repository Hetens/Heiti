// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <nav className=" bg-teal-500 bg-opacity-20 p-4 mx-auto w-1/2 rounded-lg flex flex-col items-center mt-5 backdrop:blur-md">
        <div className="flex space-x-10">
          <Link to="/blog" className="text-white font-bold hover:text-gray-300 hover:border-white border-b-2 border-transparent transition duration-300">
            Blog
          </Link>
          <Link to="/creative" className="text-white font-bold hover:text-gray-300 hover:border-white border-b-2 border-transparent transition duration-300">
            Creative Excursions
          </Link>
          <Link to="/work" className="text-white font-bold hover:text-gray-300 hover:border-white border-b-2 border-transparent transition duration-300">
            Work
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
