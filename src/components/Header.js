/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="text-black py-4">
      <div className="container mx-auto flex justify-around items-center">
      
        <div>
          <img src={Logo} alt="Logo" className="h-16 w-auto" />
        </div>

        {/* Navigation Links */}
        <nav className="space-x-10 font-semibold">
          <a href="#" className="hover:text-gray-300">
            Produits
          </a>
          <a href="#" className="hover:text-gray-300">
            Solutions
          </a>
          <a href="#" className="hover:text-gray-300">
            Programmes
          </a>
          <a href="#" className="hover:text-gray-300">
            Actualités
          </a>
          <a href="#" className="hover:text-gray-300">
            App PaieCash QR
          </a>
          <a href="#" className="hover:text-gray-300">
            Aider
          </a>
        </nav>
        <button className="bg-ActivityPbackground1 text-white px-4 py-4 rounded font-semibold">
          Créer un compte
        </button>
      </div>
    </header>
  );
};

export default Header;
