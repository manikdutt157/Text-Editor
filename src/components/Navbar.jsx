import React from 'react';

const Navbar = ({heading}) => {
  return (
    <nav className="flex justify-between items-center py-4 bg-gray-800">
      <h1 className="text-3xl font-bold text-white mx-4">
        <a href="#" className="hover:text-gray-200 transition duration-300">
          {heading}
        </a>
      </h1>
      <ul className="flex items-center">
        <li className="mr-6">
          <a
            href="#"
            className="text-gray-200 hover:text-white transition duration-300"
          >
            Home
          </a>
        </li>
        <li className="mr-6">
          <a
            href="#"
            className="text-gray-200 hover:text-white transition duration-300"
          >
            About
          </a>
        </li>
        <li className="mr-6">
          <a
            href="#"
            className="text-gray-200 hover:text-white transition duration-300"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;