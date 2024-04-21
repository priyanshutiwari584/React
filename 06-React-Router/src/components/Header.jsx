import React from "react";
import { Link, NavLink } from "react-router-dom";
import { NavLinks } from "../constants/index.";

const navLinks = NavLinks.map((item) => (
  <li key={item.id}>
    <NavLink
      to={item.url}
      className={({ isActive }) => (isActive ? "text-red-500" : "")}
    >
      {item.title}
    </NavLink>
  </li>
));
export default function Header() {
  return (
    <header className="w-full flex justify-between items-center p-5">
      <div className="logo text-3xl font-semibold text-red-500">Logo</div>
      <nav>
        <ul className="flex gap-2">{navLinks}</ul>
      </nav>
    </header>
  );
}
