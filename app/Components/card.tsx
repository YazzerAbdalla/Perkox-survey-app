import Image from "next/image";
import React from "react";

interface dataProps {
  name: string;
  instructions: string;
  image: string;
  os: string;
  reward: number;
}
const Card = ({ name, instructions, image, os, reward }: dataProps) => {
  return (
    <div
      className="offer-card "
      data-device-ids="4,7"
      data-offer-id="19607158"
      data-recommendation-rate="1.73689"
      data-creation-ts="1681997580"
      data-offer-type=""
      data-offer-amount="180"
    >
      <div className="offer-card__top">
        <Image src={image} width={60} height={60} alt="" loading="lazy" />
        <div className="text-content">
          <span className="title">{name}</span>
          <p className="description">
            {instructions}
            <br />
          </p>
        </div>
      </div>
      <div className="offer-card__bottom">
        <div className="offer-tags">
          <div className="platform">
            <span className={os == "all" ? "desktop" : os}></span>
          </div>

          <span className="offer-tag">Gaming</span>
        </div>
        <div className="offer-reward ">
          <span className="old-reward"></span>
          <Image
            src="https://torox.io/assets/images/reward-coins.svg"
            width={16}
            height={16}
            alt="reward"
          />
          <span className="actual-reward">{reward} points</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
