import { useDataContext } from "@/contexts/DataContext";
import Image from "next/image";
import React from "react";
interface DrawerHeaderProps {
  cardId: number;
}

const DrawerNewHeader = ({ cardId }: DrawerHeaderProps) => {
  const { dataArr } = useDataContext();

  const selectedCard = dataArr.filter(({ id }) => cardId == id);
  return (
    <div className="new-offer-popup__header">
      <div className="left">
        <Image
          src={selectedCard[0].image}
          alt="Offer Icon"
          width={50}
          height={50}
          loading="lazy"
        />
        <div className="text-content">
          <span className="title">{selectedCard[0].name}</span>
          <p className="description">
            {selectedCard[0].instructions && selectedCard[0].description}
          </p>
        </div>
      </div>
      <div className="right">
        <div className="offer-tags">
          <div className="platform">
            <span
              className={
                selectedCard[0].os == "all" ? "desktop" : selectedCard[0].os
              }
            ></span>
          </div>
        </div>
        <div className="offer-reward">
          <Image src="/reward-coins.svg" width={18} height={18} alt="reward" />
          <span className="actual-reward">{selectedCard[0].reward}</span>
        </div>
      </div>
    </div>
  );
};

export default DrawerNewHeader;
