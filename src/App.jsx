import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import PopularItems from "./components/PopularItems";
import Testimonials from "./components/Testimonials";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <Features />
      </section>
      <section id="portfolio">
        <PopularItems />
      </section>

      <section id="contact">
        <BookingForm />
      </section>

      <section id="clients">
        <Testimonials />
      </section>

      <section id="blog">
        <Footer />
      </section>
    </div>
  );
};

export default App;
