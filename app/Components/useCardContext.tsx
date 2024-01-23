"use client"
import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface CardContextProps {
  cardID: number | null;
  setCardID: Dispatch<SetStateAction<number | null>>;
}

const CardContext = createContext<CardContextProps | undefined>(undefined);

export const CardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cardID, setCardID] = useState<number | null>(null);

  return <CardContext.Provider value={{ cardID, setCardID }}>{children}</CardContext.Provider>;
};

export const useCardContext = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error('useCardContext must be used within a CardProvider');
  }

  return context;
};
