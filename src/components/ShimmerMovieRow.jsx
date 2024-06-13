// components/ShimmerMovieRow.js

import React from 'react';

function ShimmerMovieRow() {
  return (
    <div className="p-4">
      <div className="bg-gray-900 h-8 w-1/6 mb-4 animate-pulse"></div>

      <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hide">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="relative w-[360px] sm:w-[200px] md:w-[240px] lg:w-[300px] h-44 bg-gray-800 rounded-[4px] overflow-hidden animate-pulse">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 to-gray-700 opacity-50"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShimmerMovieRow;
