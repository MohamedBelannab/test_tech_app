import React from "react";

const CardStyleProduct = ({img , name , emballage}) => {
  return (
    <div className=" p-3 md:p-4 rounded-lg   transition-all duration-300 transform hover:-translate-y-1">
      <div className="bg-gray-100 w-full aspect-square flex items-center justify-center rounded-xl mb-3 overflow-hidden transition-all duration-300 hover:bg-gray-50">
        <img
          src={`${import.meta.env.VITE_PUBLIC_URL}${img}`}
          alt="Product"
          className="object-contain w-full h-full p-4 transition-all duration-300 hover:scale-105"
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-base md:text-lg uppercase font-black font-poppins truncate">
          {name}
        </h3>
        <p className="text-gray-600 font-medium">{emballage}</p>
      </div>
    </div>
  );
};

export default CardStyleProduct;
