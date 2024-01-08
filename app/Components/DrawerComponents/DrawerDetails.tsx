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

  const selectedCard = dataArr.filter(({ id }) => cardId == id);
  let showDetail = drawerTab == "details" ? true : false;

  return (
    <>
      {showDetail && (
        <div className="z-[1000] w-full gap-4 new-offer-popup__text-content overflow-y-scroll">
          <div className="flex flex-col w-[50%] gap-1 offer-instructoins">
            <div className="offer-description">
              <span className="title">Offer description</span>
              <p className="description">
                {selectedCard[0].name}:{" "}
                {selectedCard[0].instructions && selectedCard[0].description}
              </p>
            </div>
            <div className="offer-text-wrapper">
              <span className="title">
                To enjoy our offerwall, please remember:
              </span>
              <div className="text">
                <ol>
                  <li>
                    Use a genuine device: Emulators are not allowed. Avoid using
                    VPNs or proxies to ensure accurate location tracking and the
                    best user experience.
                  </li>
                  <li>
                    Stick with one device and location: Completing tasks on the
                    same device and location helps track your progress.
                  </li>
                  <li>
                    Time limit: Most offers have a 30-day completion window
                    unless stated otherwise, but also pay attention to specified
                    time limits for offer completion.
                  </li>
                  <li>
                    New users: If you’re new you will be able to enjoy the
                    offers. Existing users may not be eligible unless
                    specifically mentioned in the offer details.
                  </li>
                  <li>
                    Reward delivery: Rewards are usually prompt, but there may
                    be up to a 24-hour delay in some cases.
                  </li>
                  <li>
                    Mobile app tips: Open the app immediately after installation
                    for a smooth experience and higher completion chances.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          {selectedCard[0].goals && (
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
