import React, { useState } from "react";

import burger from "../assets/burger.png";
import french from "../assets/french.png";
import pizza from "../assets/pizza.png";
import shrimp from "../assets/shrimp.png";

const PopularItems = () => {
  const items = [
    {
      title: "VEGETABLES BURGER",
      description: "Barbecue Italian cuisine pizza",
      image: burger,
    },
    {
      title: "SPACIAL PIZZA",
      description: "Barbecue Italian cuisine pizza",
      image: pizza,
    },
    {
      title: "SPACIAL FRENCH FRIES",
      description: "Barbecue Italian cuisine pizza",
      image: french,
    },
    {
      title: "CUISINE CHICKEN",
      description: "Barbecue Italian cuisine pizza",
      image: shrimp,
    },
    {
      title: "VEGETABLES BURGER",
      description: "Barbecue Italian cuisine pizza",
      image: burger,
    },
    {
      title: "SPACIAL PIZZA",
      description: "Barbecue Italian cuisine pizza",
      image: pizza,
    },
    {
      title: "SPACIAL FRENCH FRIES",
      description: "Barbecue Italian cuisine pizza",
      image: french,
    },
    {
      title: "CUISINE CHICKEN",
      description: "Barbecue Italian cuisine pizza",
      image: shrimp,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (currentIndex < items.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className="py-20 bg-[#f9f9f9]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-2xl font-semibold text-[#da291c]">
              Cringy, Every Bite Trade
            </span>
            <p className="text-4xl font-bold mb-2">POPULAR FOOD ITEMS</p>
          </div>
          <div className="flex gap-4">
            <button
              className="bg-amber-50 text-red-600 w-12 h-12 rounded-full flex items-center justify-center"
              onClick={handleLeftClick}
            >
              ←
            </button>
            <button
              className="bg-amber-50 text-red-600 w-12 h-12 rounded-full flex items-center justify-center"
              onClick={handleRightClick}
            >
              →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.slice(currentIndex, currentIndex + 4).map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-48 bg-gray-200 rounded-lg mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-3">{item.description}</p>
              <p className="text-lg font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularItems;
