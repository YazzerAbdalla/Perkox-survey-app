import Image from "next/image";
import React from "react";

const Card = () => {
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
        <Image
          src="/card-img-1.jpg"
          width={60}
          height={60}
          alt=""
          loading="lazy"
        />
        <div className="text-content">
          <span className="title">Donald&apos;s Empire - iOS</span>
          <p className="description">
            Play the game and build a Florida private club.
            <br />
          </p>
        </div>
      </div>
      <div className="offer-card__bottom">
        <div className="offer-tags">
          <div className="platform">
            <span className="desktop"></span>
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
          <span className="actual-reward">180 points</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
