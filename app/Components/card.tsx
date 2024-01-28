// Import necessary components and styles
"use client";
import Image from "next/image";
import React from "react";
import { useDrawer } from "@/contexts/DrawerContext";
import { useCardContext } from "@/contexts/CardContext";
interface dataProps {
  id: number;
  name: string;
  instructions: string;
  image: string;
  os: string;
  reward: number;
  onClick: () => void;
}
// Create the Card component
const Card = ({ id, name, instructions, image, os, reward }: dataProps) => {
  // State to manage the drawer visibility
  const { setIsDrawerOpen } = useDrawer();
  const { setCardID } = useCardContext();

  // Sample data for the card

  // Function to open the drawer
  const handleCardClick = () => {
    setIsDrawerOpen(true);
    setCardID(id);
  };

  return (
    
    <div
      onClick={handleCardClick}
      className="offer-card   z-[10] max-w-xl  w-full  mx-auto   justify-center  mb-4"
    >
      <div className="offer-card__top" onClick={handleCardClick}>
        <Image src={image} width={60} height={60} alt="" loading="lazy" />
        <div className="text-content">
          <span className="title">{name}</span>
          <p className="description">{instructions}</p>
        </div>
      </div>
      <div className="offer-card__bottom">
        <div className="offer-tags">
          <div className="platform">
            <span className={os == "web" ? "desktop" : os}></span>
          </div>
          <span className="offer-tag">Gaming</span>
        </div>
        <div className="offer-reward ">
          <span className="old-reward"></span>
          <Image src="/reward-coins.svg" width={16} height={16} alt="reward" />
          <span className="actual-reward">{reward} points</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
