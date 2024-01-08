"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";

interface CardContextProps {
  cardID: number;
  setCardID: React.Dispatch<React.SetStateAction<number>>;
}

const CardContext = createContext<CardContextProps | undefined>(undefined);

interface DeviceProviderProps {
  children: ReactNode;
}

export const CardProvider: React.FC<DeviceProviderProps> = ({ children }) => {
  const [cardID, setCardID] = useState<number>(0);

  return (
    <CardContext.Provider value={{ cardID, setCardID }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCardContext must be used within an CardProvider");
  }
  return context;
};
