import React, { useState } from "react";
import SectionPages from "../widget/SectionPages";

const LandingPage: React.FC = () => {
   const [isOpen, setIsOpen] =  useState(false);


  return (
    <div className="bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400">
      {/* Navbar */}
      <nav className="bg-purple-900 text-white flex justify-between items-center px-4 py-3">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          className="h-10 rounded-2xl"
          alt="logo"
        />
        <ul className="hidden md:flex space-x-8 text-sm md:text-base">
          <li className="cursor-pointer hover:text-gray-300">Home</li>
          <li className="cursor-pointer hover:text-gray-300">About</li>
          <li className="cursor-pointer hover:text-gray-300">Catalog</li>
          <li className="cursor-pointer hover:text-gray-300">Contact us</li>
        </ul>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none h-12 w-12 flex items-center justify-center text-2xl bg-purple-700 rounded-lg"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

       {/* Mobile Menu */}
       {isOpen && (
        <ul className="flex flex-col bg-purple-800 text-white space-y-2 py-4 px-6 md:hidden">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Catalog</li>
          <li className="cursor-pointer">Contact us</li>
        </ul>
      )}


      {/* Mobile Menu */}
      <ul
        id="mobile-menu"
        className="hidden flex-col bg-purple-800 text-white space-y-2 py-4 px-6 md:hidden"
      >
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Catalog</li>
        <li className="cursor-pointer">Contact us</li>
      </ul>

      {/* Main Content */}
      <main className="flex flex-col-reverse md:flex-row items-center md:justify-between justify-center md:px-12 px-6 py-10 md:py-20">
        {/* Text Section */}
        <div className="md:w-6/12 text-center md:text-left space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Best Used Phone in Lucknow - Grab the deal now
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Looking for a reliable and affordable used phone in Lucknow? Look no
            further! Our collection of pre-owned smartphones offers great value
            for money without compromising on quality. Whether you're seeking
            the latest models or budget-friendly options, we have something for
            everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-purple-800 text-white px-5 py-2 rounded-lg hover:bg-purple-600">
              Buy Now
            </button>
            <button className="bg-purple-800 text-white px-5 py-2 rounded-lg hover:bg-purple-600">
              Get More Deals
            </button>
          </div>
        </div>
        {/* Image Section */}
        <div className="md:w-5/12 flex justify-center md:justify-end mb-8 md:mb-0">
        <img
            src="/src/assets/phone.png"
            alt="Phone"
            className="w-56 sm:w-72 md:w-96 rounded-2xl shadow-2xl hover:shadow-purple-400/60 transform transition duration-500 hover:scale-105 animate-float"
        />
        </div> 

      </main>

      {/* Next Section: Features */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionPages />
      </div>

      {/* Footer View */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo / About */}
            <div>
              <h2 className="text-xl font-bold">MyBrand</h2>
              <p className="mt-2 text-sm text-gray-400">
                Building beautiful UIs with Tailwind CSS.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-2 space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="mt-2 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  🐦
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  📘
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  📸
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  💼
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
            © 2025 MyBrand. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
