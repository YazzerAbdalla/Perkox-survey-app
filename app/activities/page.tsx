"use client";
import { useState, useEffect } from "react";
import { FaApple, FaDesktop, FaAndroid } from "react-icons/fa";

type Device = "iOS" | "Desktop" | "Android";

const Activity = () => {
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);

  // useEffect to set the initial selected device
  useEffect(() => {
    setSelectedDevice('Desktop');
  }, []);

  return (
    <div>
      <h1>Activities page</h1>
      <div>
        <p>Choose a device:</p>
        {["iOS", "Desktop", "Android"].map((device) => (
          <button
            key={device}
            style={{
              border:
                selectedDevice === device
                  ? "3px solid green"
                  : "2px solid transparent",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px", // Add padding for better appearance
            }}
            onClick={() => setSelectedDevice(device as Device)}
          >
            {device === "iOS" && <FaApple color="white" />}
            {device === "Desktop" && <FaDesktop color="white" />}
            {device === "Android" && <FaAndroid color="green" />}
            {device}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Activity;
