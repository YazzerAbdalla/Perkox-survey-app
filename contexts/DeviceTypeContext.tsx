// DeviceTypeContext.tsx
"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface DeviceTypeContextProps {
  deviceType: string;
  setDeviceType: React.Dispatch<React.SetStateAction<string>>;
}

const DeviceTypeContext = createContext<DeviceTypeContextProps | undefined>(
  undefined
);

interface DeviceTypeProviderProps {
  children: ReactNode;
}

const DeviceTypeProvider: React.FC<DeviceTypeProviderProps> = ({
  children,
}) => {
  const [deviceType, setDeviceType] = useState("unkown");

  return (
    <DeviceTypeContext.Provider value={{ deviceType, setDeviceType }}>
      {children}
    </DeviceTypeContext.Provider>
  );
};

const useDeviceType = (): DeviceTypeContextProps => {
  const context = useContext(DeviceTypeContext);
  if (!context) {
    throw new Error("useDeviceType must be used within a DeviceTypeProvider");
  }
  return context;
};

export { DeviceTypeProvider, useDeviceType };
