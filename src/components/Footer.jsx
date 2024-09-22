import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

const Footer = ({heading}) => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-xl font-semibold text-white mb-2">{heading}</h3>
          <p className="text-sm">
            © {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>

        {/* Middle Section (Social Links) */}
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition duration-300 ease-in-out">
             <BsTwitter className='h-6 w-6'/>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition duration-300 ease-in-out">
            <BsGithub className='h-6 w-6'/> 
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition duration-300 ease-in-out">
            <BsLinkedin className='h-6 w-6'/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
