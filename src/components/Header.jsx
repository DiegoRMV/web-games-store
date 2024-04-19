import React, { useState } from "react";
import {
  RiShoppingCartLine,
  RiHeart2Line,
  RiMenu2Line,
  RiCloseLine,
} from "react-icons/ri";
import imgPerfil from "/perfil.jpg"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="h-[7vh] lg:h-[10vh] text-gray-400 py-4 px-10 flex items-center justify-between z-40">
      {/* Movile */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden text-2xl"
      >
        <RiMenu2Line />
      </button>
      <div
        className={`fixed left-0 bg-[#181A20] w-full h-full z-50 transition-all ${
          showMenu ? "top-0" : "-top-full"
        }`}
      >
        <button onClick={() => setShowMenu(!showMenu)} className="text-3xl p-4">
          <RiCloseLine />
        </button>
        <ul className="mt-20">
          <li>
            <a href="#" className="text-4xl block text-center p-4">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-4xl block text-center p-4">
              Streams
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-4xl text-colorGreen block p-4 text-center"
            >
              Game store
            </a>
          </li>
          <li>
            <a href="#" className="text-4xl block text-center p-4">
              News
            </a>
          </li>
        </ul>
      </div>
      {/* Menu */}
      <ul className="hidden lg:flex items-center gap-6">
        <li>
          <a href="#" className="hover:text-colorGreen transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-colorGreen transition-colors">
            Streams
          </a>
        </li>
        <li>
          <a href="#" className="text-colorGreen transition-colors">
            Game store
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-colorGreen transition-colors">
            News
          </a>
        </li>
      </ul>
      {/* User menu */}
      <ul className="flex items-center gap-6 text-xl">
        <li>
          <button className="hover:text-colorGreen transition-colors">
            <RiShoppingCartLine />
          </button>
        </li>
        <li>
          <button className="hover:text-colorGreen transition-colors">
            <RiHeart2Line />
          </button>
        </li>
        <li>
          <button>
            <img
              src={imgPerfil}
              className="w-8 h-8 object-cover rounded-full ring-2 ring-colorGreen"
            />
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
