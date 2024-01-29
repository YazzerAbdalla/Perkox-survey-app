/* eslint-disable @next/next/no-img-element */
import { useDataContext } from "@/contexts/DataContext";
import { useDrawerTabs } from "@/contexts/DrawerTabs";
import React from "react";

interface DrawerHeaderProps {
  cardId: number;
}

const DrawerDetails = ({ cardId }: DrawerHeaderProps) => {
  const { drawerTab } = useDrawerTabs();
  const { dataArr } = useDataContext();

  // Use find instead of filter to get a single selected card
  const selectedCard = dataArr.find(({ id }) => cardId === id);

  // Check if selectedCard is not defined
  if (!selectedCard) {
    return null; // or display a loading state or an error message
  }

  let showDetail = drawerTab === "details";

  return (
    <>
      {showDetail && (
        <div className="z-[1000] w-full gap-4 new-offer-popup__text-content overflow-y-scroll flex  left-4 ">
          <div className="flex flex-col w-[50%] gap-1 offer-instructoins">
            <div className="offer-description  text-wrap">
              <span className="title">Offer description :</span>
              <h1 className="text-gray-300 font-bold text-sm ">
                {" "}
                {selectedCard.name} :{" "}
              </h1>
              <p className="description">
                {" "}
                {selectedCard.description && selectedCard.description}
              </p>
            </div>
          </div>
          {selectedCard.goals && (
            <div className="new-offer-popup__steps-wrapper w-[50%]">
              <span className="title">All steps</span>
              <span className="horizontal-line"></span>
              <div className="steps">
                <div className="step">
                  <div className="step-info">
                    <span className="step-counter">1</span>
                    <div className="text-content">
                      <span className="title">Open and use the app.</span>
                      <p className="text"></p>
                    </div>
                  </div>
                  <div className="offer-reward">
                    <img src="/reward-coins.svg" alt="reward" />
                    <span className="actual-reward">3.6</span>
                  </div>
                </div>

                <div className="step">
                  <div className="step-info">
                    <span className="step-counter">2</span>
                    <div className="text-content">
                      <span className="title">Get 1000 coins.</span>
                      <p className="text"></p>
                    </div>
                  </div>
                  <div className="offer-reward">
                    <img src="/reward-coins.svg" alt="reward" />
                    <span className="actual-reward">468</span>
                  </div>
                </div>

                <div className="step">
                  <div className="step-info">
                    <span className="step-counter">3</span>
                    <div className="text-content">
                      <span className="title">Get 5000 coins.</span>
                      <p className="text"></p>
                    </div>
                  </div>
                  <div className="offer-reward">
                    <img src="/reward-coins.svg" alt="reward" />
                    <span className="actual-reward">3510</span>
                  </div>
                </div>

                <div className="step">
                  <div className="step-info">
                    <span className="step-counter">4</span>
                    <div className="text-content">
                      <span className="title">Get 10000 coins.</span>
                      <p className="text"></p>
                    </div>
                  </div>
                  <div className="offer-reward">
                    <img src="/reward-coins.svg" alt="reward" />
                    <span className="actual-reward">9360</span>
                  </div>
                </div>

                <div className="step">
                  <div className="step-info">
                    <span className="step-counter">5</span>
                    <div className="text-content">
                      <span className="title">Get 25000 coins.</span>
                      <p className="text"></p>
                    </div>
                  </div>
                  <div className="offer-reward">
                    <img src="/reward-coins.svg" alt="reward" />
                    <span className="actual-reward">35100</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default DrawerDetails;
