import React from "react";

import red from "../assets/red.png";
import khaled from "../assets/khaled.png";

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <p className="text-red-600 font-bold mb-2 flex items-center">
            <img src={red} alt="" />
            Crispy, Every Bite Taste
          </p>
          <p className="text-3xl font-semibold text-black">
            WHAT SOME OF MY CUSTOMERS SAY
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 text-left bg-yellow-300 p-8 rounded-lg">
            <p className="w-1/2 text-lg mb-6">
              You can't go wrong with Chicken Manoli, I had it twice. The
              chicken was cooked perfectly, juicy & soft (usually manoli chicken
              is a bit dry). I would definitely recommend it.
            </p>

            <div className="flex justify-between">
              <p className="font-bold">
                KHALID AL DAWSRY <br />
                Jeddah, Saudi
              </p>

              <img src={khaled} alt="" />
            </div>
            <hr />
          </div>

          <div className="lg:w-1/2">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/echLdbjKWFI?si=BmBAsXyh2nE_BCsa"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
