import React from "react";

const ProductCardShimmer = () => {
  return (
    <div className="animate-pulse p-4 rounded-xl shadow bg-white">
      <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  );
};

export default ProductCardShimmer;
