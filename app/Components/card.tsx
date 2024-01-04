// Import necessary components and styles
"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import Drawer from "./Drawer";


// Create the Card component
const Card = () => {
  // State to manage the drawer visibility
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Sample data for the card
  const cardData = {
    name: "Donald's Empire - iOS",
    description: "Play the game and build a Florida private club.",
    points: 180,
  };



  // Function to open the drawer
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  // Function to close the drawer
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="offer-card " data-device-ids="4,7" data-offer-id="19607158" data-recommendation-rate="1.73689" data-creation-ts="1681997580" data-offer-type="" data-offer-amount="180">

      {/* Drawer component */}
      <Drawer />
       
      {/* Card content */}
      <div className="offer-card__top" onClick={openDrawer}>
        <Image src="/card-img-1.jpg" width={60} height={60} alt="" loading="lazy" />
        <div className="text-content">
          <span className="title">{cardData.name}</span>
          <p className="description">{cardData.description}</p>
        </div>
      </div>
      <div className="offer-card__bottom">
        <div className="offer-tags">
          <div className="platform">
            <span className={"desktop" }></span>
          </div>
          <span className="offer-tag">Gaming</span>
        </div>
        <div className="offer-reward ">
          <span className="old-reward"></span>
          <Image src="https://torox.io/assets/images/reward-coins.svg" width={16} height={16} alt="reward" />
          <span className="actual-reward">{cardData.points} points</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
