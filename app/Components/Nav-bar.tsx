"use client";
import React, { useRef } from "react";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement | null>(null);

  const showNavBar = () => {
    //@ts-ignore
    navRef.current.classList.toggle("responsive");
  };
  return (
    <>
      <header className="z-[1000]">
        <a className="logo" href="#">
          Yasser
        </a>
        <div className="nav z-[1500] bg-[#582070]" ref={navRef}>
          <a href="#about" onClick={showNavBar}>
            About me
          </a>
          <a href="#skills" onClick={showNavBar}>
            Skills
          </a>
          <a href="#projects" onClick={showNavBar}>
            Projects
          </a>
          <a href="#contacts" onClick={showNavBar}>
            Contacts
          </a>
          <button onClick={showNavBar} className="nav-btn nav-close-btn">
            X
          </button>
        </div>
        <button onClick={showNavBar} id="navBtn" className="nav-btn ">
          X
        </button>
      </header>
    </>
  );
};

export default Navbar;
