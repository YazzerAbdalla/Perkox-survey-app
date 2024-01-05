"use client";
import Image from "next/image";
// "use client" and other imports as needed

import { useEffect, useState } from "react";
import { IoLogoApple, IoLogoAndroid } from "react-icons/io5";

const Settings = () => {
  const [selectedDevice, setSelectedDevice] = useState("ios");

  useEffect(() => {
    // Handle side effects or cleanup code if needed
  }, [selectedDevice]);

  const handleDeviceClick = (device: string) => {
    setSelectedDevice(device);
  };

  return (
    <div>
      <section className="content-wrapper more-page-active ">
        <div className="more-page flex flex-col row-gap-10 p-10 md:p-10">
          <div className="more-page__device-select">
            <div className="text-wrapper">
              <p className="title text-white">Select your devices</p>
              <p className="text text-gray-400">
                Choosing a device will allow us to display the best offers for
                your device.
              </p>
            </div>
            <br />

            <div className="platforms flex">
              <span
                className={`device mr-2 ${selectedDevice == "iOS" && "active"}`}
                onClick={() =>
                  selectedDevice != "iOS"
                    ? setSelectedDevice("iOS")
                    : setSelectedDevice("")
                }
              >
                <Image src="/ios-icon.svg" width={32} height={32} alt="iOS" />
              </span>
              <span
                className={`device ${selectedDevice == "android" && "active"}`}
                onClick={() =>
                  selectedDevice != "android"
                    ? setSelectedDevice("android")
                    : setSelectedDevice("")
                }
                data-device="3"
                data-user-device="1"
              >
                <Image
                  src="/android-icon.svg"
                  width={32}
                  height={32}
                  alt="Android"
                />
              </span>
            </div>
          </div>
          <div className="more-page__terms-wrapper">
            <br />

            <span className="title text-white">Terms of Service</span>

            <div className="text text-white">
              <br />
              <p>
                Welcome to offerwall! We strive to provide you with quality
                offers from safe and trustworthy advertisers. In return, we
                kindly request your cooperation in adhering to the following
                rules, ensuring a fair and enjoyable experience for everyone:
              </p>
              <ul className="list-decimal pl-8">
                <li className="mb-2">
                  <strong>Advertiser Selection:</strong>{" "}
                  <p className="text-gray-400">
                    We carefully select our advertisers to ensure your
                    engagement with safe and honest merchants. We expect the
                    same fairness from you when participating in offers.
                  </p>
                </li>
                <li className="mb-2">
                  <strong> By accessing and using offerwall, </strong>
                  <p className="text-gray-400">
                    you acknowledge that you have read, understood, and agreed
                    to abide by these terms. If you have any questions or
                    concerns, our support team is available to assist you. Enjoy
                    engaging with the offers and earning your well-deserved
                    rewards.
                  </p>
                </li>
                <li>
                  <strong> By accessing and using offerwall, </strong>
                  <p className="text-gray-400">
                    you acknowledge that you have read, understood, and agreed
                    to abide by these terms. If you have any questions or
                    concerns, our support team is available to assist you. Enjoy
                    engaging with the offers and earning your well-deserved
                    rewards.
                  </p>
                </li>
                {/* Add other ordered list items */}
              </ul>
              <br />
              By accessing and using offerwall, you acknowledge that you have
              read, understood, and agreed to abide by these terms. If you have
              any questions or concerns, our support team is available to assist
              you. Enjoy engaging with the offers and earning your well-deserved
              rewards!
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;
