import React from "react";
import HamburgerMenu from "./HumbergerMenu";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
      <div className="flex justify-between">
      <HamburgerMenu/>
      <img
            src="/Images/acc_logo.png"
            alt="Profile"
            className="rounded w-10 h-11 ml-6"
          />
      <h1 className="text-xl ml-2 mt-1">| Dashboard APS</h1>
      </div>
      <div className="flex items-center">
        <span className="mr-4 text-xs pr-8">Kamis, 28 November 2024</span>
        <div className="flex items-center gap-2">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="rounded-full w-10 h-10"
          />
          <span>Yesaya Purwocaroko(12345)</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
