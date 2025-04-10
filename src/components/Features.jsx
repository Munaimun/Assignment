import React from "react";

import call from "../assets/call-alt.png";
import feature from "../assets/feature.png";
import packages from "../assets/package.png";
import medal from "../assets/medal.png";
import bag from "../assets/bag.png";

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-16">
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={feature}
              alt="Featured culinary"
              className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              EXCEPTIONAL CULINARY <br />
              EXPERIENCE AND DELICIOUS FOOD
            </h1>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Oraea
              felis sed est eiusmod. Vid incidunt ut labore et dolore magna
              aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <div className="flex">
              <button className="bg-yellow-400  px-6 py-3 font-semibold rounded hover:bg-[#c0261a] mr-4 mb-4">
                ABOUT MORE
              </button>
              <div className="text-gray-500 font-medium flex items-center">
                <img src={call} alt="call" className="w-4 h-4" />
                +88 3426 739 485
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12">
          <div className="flex flex-col md:flex-row justify-between gap-8 max-w-4xl mx-auto">
            <div className="flex-1">
              <div className="flex items-center gap-4 p-6 rounded-lg">
                <img src={packages} alt="Fast delivery" className="w-12 h-12" />
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2">FAST DELIVERY</h3>
                  <p className="text-gray-600">Within 30 minutes</p>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-4 p-6 rounded-lg">
                <img src={medal} alt="Absolute dining" className="w-12 h-12" />
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2">ABSOLUTE DINING</h3>
                  <p className="text-gray-600">Best buffet restaurant</p>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-4 p-6 rounded-lg">
                <img src={bag} alt="Pickup delivery" className="w-12 h-12" />
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2">PICKUP DELIVERY</h3>
                  <p className="text-gray-600">Grab your food order</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
