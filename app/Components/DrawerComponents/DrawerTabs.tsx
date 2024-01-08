import { useDrawerTabs } from "@/contexts/DrawerTabs";
import React from "react";

const DrawerTabs = () => {
  const { drawerTab, setDrawerTab } = useDrawerTabs();
  return (
    <div className="popup__tabs">
      <div
        onClick={() => setDrawerTab("details")}
        className={`popup__tab ${drawerTab == "details" && "active"}`}
        data-header-tab="details"
      >
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.1673 6.66634V9.99967C15.1673 13.333 13.834 14.6663 10.5007 14.6663H6.50065C3.16732 14.6663 1.83398 13.333 1.83398 9.99967V5.99967C1.83398 2.66634 3.16732 1.33301 6.50065 1.33301H9.83398"
            stroke="#A0AEC0"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M15.1673 6.66634H12.5007C10.5007 6.66634 9.83398 5.99967 9.83398 3.99967V1.33301L15.1673 6.66634Z"
            stroke="#A0AEC0"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        Offer Details
      </div>
      <div
        onClick={() => setDrawerTab("links")}
        className={`popup__tab ${drawerTab == "links" && "active"}`}
        data-header-tab="links"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.99414 11.6663H11.0008C13.0141 11.6663 14.6675 10.0197 14.6675 7.99967C14.6675 5.98634 13.0208 4.33301 11.0008 4.33301H9.99414"
            stroke="#9DA5BD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M6.00065 4.33301H5.00065C2.98065 4.33301 1.33398 5.97967 1.33398 7.99967C1.33398 10.013 2.98065 11.6663 5.00065 11.6663H6.00065"
            stroke="#9DA5BD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M5.33398 8H10.6673"
            stroke="#9DA5BD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        Get link options
      </div>
    </div>
  );
};

export default DrawerTabs;
