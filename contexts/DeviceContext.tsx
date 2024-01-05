"use client";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface DeviceContextProps {
  device: string;
  setDevice: Dispatch<SetStateAction<string>>;
}

const DeviceContext = createContext<DeviceContextProps | undefined>(undefined);

interface DeviceProviderProps {
  children: ReactNode;
}

export const DeviceProvider: React.FC<DeviceProviderProps> = ({ children }) => {
  const [device, setDevice] = useState<string>(""); // Set the initial state as needed

  return (
    <DeviceContext.Provider value={{ device, setDevice }}>
      {children}
    </DeviceContext.Provider>
  );
};

export const useDevice = (): DeviceContextProps => {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error("useDevice must be used within a DeviceProvider");
  }
  return context;
};
