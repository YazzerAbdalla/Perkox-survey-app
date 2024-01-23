import { useDataContext } from "@/contexts/DataContext";
import Image from "next/image";
import React from "react";

interface DrawerHeaderProps {
  cardId: number;
}

const DrawerNewHeader = ({ cardId }: DrawerHeaderProps) => {
  const { dataArr } = useDataContext();

  // Find the selected card
  const selectedCard = dataArr.find(({ id }) => cardId === id);

  // Check if selectedCard is not undefined
  if (!selectedCard) {
    return null; // or display a loading state or an error message
  }

  return (
    <div className="new-offer-popup__header">
      <div className="left">
        <Image
          src={selectedCard.image}
          alt="Offer Icon"
          width={50}
          height={50}
          loading="lazy"
        />
        <div className="text-content">
          <span className="title">{selectedCard.name}</span>
          <p className="description">
            {selectedCard.instructions && selectedCard.instructions}
          </p>
        </div>
      </div>
      <div className="right">
        <div className="offer-tags">
          <div className="platform">
            <span
              className={
                selectedCard.os === "all" ? "desktop" : selectedCard.os
              }
            ></span>
          </div>
        </div>
        <div className="offer-reward">
          <Image src="/reward-coins.svg" width={18} height={18} alt="reward" />
          <span className="actual-reward">{selectedCard.reward}</span>
        </div>
      </div>
    </div>
  );
};

export default DrawerNewHeader;
