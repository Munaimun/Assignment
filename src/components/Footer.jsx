import React from "react";

import footer from "../assets/footer.jpeg";
import call from "../assets/call.png";
import clock from "../assets/clock.png";
import map from "../assets/map.png";
import mail from "../assets/maill.png";

const Footer = () => {
  return (
    <footer className="relative py-16 text-white">
      <div className="absolute inset-0 bg-black/95 z-0">
        <img
          src={footer}
          alt="Footer background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-center">
            WE READY TO HAVE YOU THE BEST DINING EXPERIENCES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {/* Opening Hours */}
          <div className="text-center">
            <div className="mb-4">
              <img src={clock} alt="Hours icon" className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold mb-4">OPENING HOURS</h3>
            <p className="mb-2">Monday, Sunday</p>
            <p>200-Male 11:30 PM</p>
          </div>

          {/* Let's Talk */}
          <div className="text-center">
            <div className="mb-4">
              <img src={call} alt="Phone icon" className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold mb-4">LET'S TALK</h3>
            <p className="mb-2">Phone: 1-800-225-0405</p>
            <p className="mb-2">Fax: 1-800-225-0405</p>
            <p>Email: david@dinship.oph</p>
          </div>

          {/* Book Table */}
          <div className="text-center">
            <div className="mb-4">
              <img src={mail} alt="Booking icon" className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold mb-4">BOOK TABLE</h3>
            <p>Support support@dinship.com</p>
          </div>

          {/* Our Address */}
          <div className="text-center">
            <div className="mb-4">
              <img src={map} alt="Address icon" className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold mb-4">OUR ADDRESS</h3>
            <p className="mb-2">123 Store Here From City, United</p>
            <p>States of America</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/20 text-center">
          <p className="text-sm">© 2023 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
