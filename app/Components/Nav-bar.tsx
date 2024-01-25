"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { colors } from "./theme/Color";
import { FaBars, FaTimes } from "react-icons/fa";

const NavLink = styled(Link)<{ isActive: boolean }>`
  color: ${({ isActive }) =>
    isActive ? colors.palette.purple : colors.palette.neutral100};

  &:hover,
  &:active {
    color: ${colors.palette.purple};
    border-bottom-color: rgb(194, 0, 248);
  }
`;

const HamburgerIcon = styled.div`
  color: ${colors.palette.neutral100};
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const routes = {
  home: "/",
  activities: "/activities",
  term: "/term-of-service",
};

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const pathname = usePathname();

  return (
    <header className="fixed z-[1000]">
      <Link href="/">
        <div className="logo">
          <Image
            src="/White-Perkox.png"
            alt="White-Perkox"
            width={150}
            height={60}
          />
        </div>
      </Link>

      <input type="checkbox" id="nav_check" hidden />
      <nav className={`z-[1500]  ${isMenuOpen ? "" : "close"}`}>
        <ul>
          <li>
            <NavLink
              isActive={pathname === routes.home}
              onClick={toggleMenu}
              href={routes.home}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              isActive={pathname === routes.activities}
              href={routes.activities}
              onClick={toggleMenu}
            >
              Activity
            </NavLink>
          </li>

          <li>
            <NavLink
              isActive={pathname === routes.term}
              onClick={toggleMenu}
              href={routes.term}
            >
              Term of service
            </NavLink>
          </li>
        </ul>
      </nav>
      <label htmlFor="nav_check" className="hamburger" onClick={toggleMenu}>
        <HamburgerIcon>{isMenuOpen ? <FaTimes /> : <FaBars />}</HamburgerIcon>
      </label>
    </header>
  );
};

export default Navbar;
