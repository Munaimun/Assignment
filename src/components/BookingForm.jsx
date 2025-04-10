import React, { useState } from "react";
import cover from "../assets/black.jpeg";
import red from "../assets/red.png";

const BookingForm = () => {
  const [people, setPeople] = useState(2); // Default to 2 people
  const [dateType, setDateType] = useState("text");

  return (
    <section className="relative py-20 text-white">
      <div className="absolute inset-0 z-0">
        <img
          src={cover}
          alt="Restaurant background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <p className="flex items-center text-xl text-red-600 font-bold mb-2">
            <img src={red} alt="red" className="w-2 h-2 mr-2" />
            Book Now
          </p>

          <h2 className="text-2xl font-semibold mb-6">BOOK YOUR TABLE</h2>
          <p className="mb-8 max-w-md">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>

          <form className="w-full max-w-lg">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name*"
                  className="w-full p-3 rounded bg-transparent border border-white/50 placeholder-white/70"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-3 rounded bg-transparent border border-white/50 placeholder-white/70"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="relative">
                <input
                  type={dateType}
                  onFocus={() => setDateType("date")}
                  onBlur={(e) => !e.target.value && setDateType("text")}
                  className="w-full p-3 rounded bg-transparent border border-white/50 text-white"
                  required
                />
                {dateType === "text" && (
                  <span className="absolute left-3 top-3 text-white/70 pointer-events-none">
                    Reservation date
                  </span>
                )}
              </div>

              <div className="flex items-center border border-white/50 rounded">
                <button
                  type="button"
                  onClick={() => setPeople((prev) => Math.max(1, prev - 1))}
                  className="px-4 py-2 text-white hover:bg-white/10"
                >
                  -
                </button>
                <div className="flex-1 text-center px-2">
                  {people} {people === 1 ? "Person" : "People"}
                </div>
                <button
                  type="button"
                  onClick={() => setPeople((prev) => prev + 1)}
                  className="px-4 py-2 text-white hover:bg-white/10"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mb-6">
              <textarea
                placeholder="Message"
                className="w-full p-3 rounded bg-transparent border border-white/50 placeholder-white/70"
                rows="4"
              ></textarea>
            </div>

            <button className="bg-yellow-300 w-max text-black font-bold py-3 px-8 rounded hover:bg-[#c0261a]">
              BOOK NOW
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
