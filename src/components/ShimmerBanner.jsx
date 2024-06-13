import React from 'react';

function ShimmerBanner() {
  return (
    <div className="relative w-full h-[550px] lg:h-[600px] bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 animate-shimmer transform translate3d(0, 0, 0)"></div>
      
      <div className="absolute top-[10%] lg:top-[35%] p-4 md:p-8 text-gray-900">
        <div className="bg-gray-800 h-14 w-96 mb-8 rounded"></div>
        <div className="flex space-x-4 mt-8 mb-4">
          <div className="bg-gray-800 h-10 w-32 rounded"></div>
          <div className="bg-gray-800 h-10 w-32 rounded"></div>
        </div>
        <div className="bg-gray-800 h-6 w-[600px] mb-4 rounded"></div>
        <div className="bg-gray-800 h-6 w-full md:w-3/4 lg:w-[400px]xl:w-1/3 rounded"></div>
      </div>
    </div>
  );
}

export default ShimmerBanner;
