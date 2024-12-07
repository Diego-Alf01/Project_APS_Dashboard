import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Button Hamburger */}
      <button
        className="p-1 text-white rounded-xl focus:outline-none mt-1"
        onClick={toggleMenu}
      >
        {/* Ikon Hamburger */}
        <div className="space-y-1">
          <div className="w-8 h-1 bg-white rounded-xl"></div>
          <div className="w-8 h-1 bg-white rounded-xl"></div>
          <div className="w-8 h-1 bg-white rounded-xl"></div>
          <div className="w-8 h-1 bg-white rounded-xl"></div>
        </div>
      </button>

      {/* Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-10 left-0 bg-white border rounded shadow-sm">
          <ul className="flex flex-col p-2 space-y-2">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
