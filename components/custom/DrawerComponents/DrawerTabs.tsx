import React from "react";
import { useDrawerTabs } from "@/contexts/DrawerTabs";
import { useDeviceType } from "@/contexts/DeviceTypeContext";

const DrawerTabs = () => {
  const { drawerTab, setDrawerTab } = useDrawerTabs();
  const { deviceType } = useDeviceType();

  return (
    <div className="flex justify-center items-center space-x-2 top-0">
      <div
        onClick={() => setDrawerTab("details")}
        className={`flex items-center px-3 py-2 cursor-pointer rounded ${
          drawerTab === "details"
            ? "bg-pink-500 text-black"
            : "text-white hover:bg-pink-500"
        }`}
      >
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <path
            d="M15.1673 6.66634V9.99967C15.1673 13.333 13.834 14.6663 10.5007 14.6663H6.50065C3.16732 14.6663 1.83398 13.333 1.83398 9.99967V5.99967C1.83398 2.66634 3.16732 1.33301 6.50065 1.33301H9.83398"
            stroke="#0000009e"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M15.1673 6.66634H12.5007C10.5007 6.66634 9.83398 5.99967 9.83398 3.99967V1.33301L15.1673 6.66634Z"
            stroke="#0000009e"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        Offer Details
      </div>

      {deviceType === "web" && (
        <div
          onClick={() => setDrawerTab("links")}
          className={`flex items-center px-3 py-2 cursor-pointer rounded ${
            drawerTab === "links"
              ? "bg-pink-500 text-black"
              : "text-white hover:bg-pink-500"
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M9.99414 11.6663H11.0008C13.0141 11.6663 14.6675 10.0197 14.6675 7.99967C14.6675 5.98634 13.0208 4.33301 11.0008 4.33301H9.99414"
              stroke="#0000009e"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M6.00065 4.33301H5.00065C2.98065 4.33301 1.33398 5.97967 1.33398 7.99967C1.33398 10.013 2.98065 11.6663 5.00065 11.6663H6.00065"
              stroke="#0000009e"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M5.33398 8H10.6673"
              stroke="#0000009e"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          Get link options
        </div>
      )}
    </div>
  );
};

export default DrawerTabs;
