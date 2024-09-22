import React, { useState } from 'react';

const Home = ({ heading }) => {
  const [text, setText] = useState('Enter text here');

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleLowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="flex flex-col items-center h-[81vh] justify-start  bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 text-white p-6">
      <h1 className="text-4xl md:text-5xl font-extrabold mt-10 mb-8 text-orange-500 tracking-wide">{heading}</h1>

      <div className="w-full flex justify-center">
        <textarea
          className="text-gray-900 border-2 p-4 border-gray-400 w-4/5 md:w-2/3 lg:w-1/2 h-56 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition ease-in-out duration-300"
          onChange={handleOnChange}
          value={text}
          id="mybox"
          rows="8"
          placeholder=''
        />
      </div>

      <div className="w-full flex flex-wrap justify-center gap-6 my-6">
        <button
          className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
          onClick={handleUpClick}
        >
          Uppercase Text
        </button>
        <button
          className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
          onClick={handleLowClick}
        >
          Lowercase Text
        </button>
      </div>

      <div className="text-center mt-4">
        <h3 className="text-xl font-semibold mb-2">Your text summary</h3>
        <p className="text-lg">
          {text.split(" ").filter((word) => word !== "").length} words, {text.length} characters
        </p>
        <p className="text-sm mt-2 text-gray-300">
          {0.008 * text.split(" ").filter((word) => word !== "").length} minutes,{" "}
          {0.48 * text.split(" ").filter((word) => word !== "").length} seconds to read
        </p>
      </div>
    </div>
  );
};

export default Home;
