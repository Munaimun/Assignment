import React from "react";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="bg-[#da291c] text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="relative z-10">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4 md:mb-8 relative inline-block">
            <span className="relative z-10">
              TASTE THE AUTHENTIC <br /> SAUDI CUISINE
            </span>
            <span className="absolute inset-0 bg-[#da291c]/60 rounded-lg blur-[1px] z-0"></span>
          </h1>
          <p className="mb-6 text-lg max-w-lg">
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.
          </p>
          <div className="flex space-x-4">
            <button className="bg-yellow-400 text-black px-6 py-3 font-semibold rounded hover:bg-yellow-300">
              EXPLORE MENU
            </button>
          </div>
        </div>

        <div className="mt-10 md:mt-0 relative md:absolute md:top-0 md:right-0 md:w-1/2">
          <img
            src={hero}
            alt="Food"
            className="rounded-xl w-full max-w-[500px] shadow-xl ml-auto"
          />
          <div className="absolute bottom-1 right-8 bg-yellow-400 text-black w-20 h-20 flex items-center justify-center text-center text-base font-bold rounded-full shadow-md border-2 border-dotted border-[#da291c]">
            TODAY <br /> OFFER
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
