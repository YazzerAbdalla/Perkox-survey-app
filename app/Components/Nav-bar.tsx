"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="logo">PerKos</div>
      <input type="checkbox" id="nav_check" hidden />
      <nav className="z-[1000]">
        <ul>
          <li>
            <Link href="/" className="active">
              Home
            </Link>
          </li>

          <li>
            <Link href="activities">Activity</Link>
          </li>
          <li>
            <Link href="term-of-service">terms of service</Link>
          </li>
        </ul>
      </nav>
      <label htmlFor="nav_check" className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </label>
    </header>
  );
};

export default Navbar;
