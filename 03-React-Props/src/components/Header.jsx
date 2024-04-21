import { navList } from "./data.js";
import { useState, useEffect } from "react";

const NavList = navList.map((item) => {
  return (
    <li key={item.id} className="cursor-pointer">
      <a
        href={item.href}
        className="px-2 py-1 rounded-full transition-colors duration-200 hover:bg-slate-200 hover:text-black "
      >
        {item.content}
      </a>
    </li>
  );
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center text-xl py-4 px-6 font-semibold relative">
      <div className="logo text-red-500 text-2xl font-bold cursor-pointer">
        Logo
      </div>
      <nav
        className={`navbar bg-transparent text-center text-white flex items-center top-0 justify-center max-lg:absolute max-lg:w-full max-lg:h-screen transition-translate ease-linear duration-300 ${
          isOpen ? "left-0 bg-blue-400" : "-left-full text-black"
        }`}
      >
        <ul className="navlist uppercase flex flex-col lg:flex lg:flex-row items-center gap-10 lg:gap-3">
          {NavList}
        </ul>
      </nav>
      <button
        className="border-2 px-2 py-1 rounded-md lg:hidden cursor-pointer z-10 hover:bg-blue-400 hover:text-black hover:border-black transition-colors duration-200"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Toggle
      </button>
    </header>
  );
}
