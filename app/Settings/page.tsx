"use client";

import { useEffect } from 'react';
import { IoLogoApple, IoLogoAndroid } from 'react-icons/io5'; // Import icons as needed

const Settings = () => {
  useEffect(() => {
    return () => {
      // Cleanup code if needed
    };
  }, []);

  return (
    <div>
      <section className="content-wrapper more-page-active">
        <div className="more-page flex flex-col row-gap-40 p-30 md:p-40">
          <div className="more-page__device-select">
            <div className="text-wrapper">
              <p className="title text-white">Select your devices</p>
              <p className="text text-white">
                Choosing a device will allow us to display the best offers for your device.
              </p>
            </div>
            <div className="platforms">
              <span className="device flex flex-row" data-device="4" data-user-device="2">
                <IoLogoApple size={50} className="text-black" />
                <IoLogoAndroid size={50} className="text-green-500" />
              </span>
            </div>
          </div>
          <div className="more-page__terms-wrapper">
            <span className="title text-white">Terms of Service</span>
            <div className="text text-white">
              <p>
                Welcome to offerwall! We strive to provide you with quality offers from safe and
                trustworthy advertisers. In return, we kindly request your cooperation in adhering
                to the following rules, ensuring a fair and enjoyable experience for everyone:
              </p>
              <ol className="list-decimal pl-8">
                <li className="mb-2">
                  <strong>Advertiser Selection:</strong> We carefully select our advertisers to
                  ensure your engagement with safe and honest merchants. We expect the same fairness
                  from you when participating in offers.
                </li>
                <li className="mb-2">
                  By accessing and using offerwall, you acknowledge that you have read, understood, and
                  agreed to abide by these terms. If you have any questions or concerns, our support
                  team is available to assist you. Enjoy engaging with the offers and earning your
                  well-deserved rewards.
                </li>
                <li>
                  By accessing and using offerwall, you acknowledge that you have read, understood, and
                  agreed to abide by these terms. If you have any questions or concerns, our support
                  team is available to assist you. Enjoy engaging with the offers and earning your
                  well-deserved rewards.
                </li>
                {/* Add other ordered list items */}
              </ol>
              <br />
              By accessing and using offerwall, you acknowledge that you have read, understood, and
              agreed to abide by these terms. If you have any questions or concerns, our support
              team is available to assist you. Enjoy engaging with the offers and earning your
              well-deserved rewards!
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;