// ErrorContext.tsx
"use client";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

// Define the type for error
type ErrorType = {
  type?: string;
  message: string;
};

// Define the type for the context
type ErrorContextType = {
  error: ErrorType | null;
  setError: Dispatch<SetStateAction<ErrorType | null>>;
};

// Create the context
const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

// Create a provider component
export const ErrorContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [error, setError] = useState<ErrorType | null>(null);

  const contextValue: ErrorContextType = {
    error,
    setError,
  };

  return (
    <ErrorContext.Provider value={contextValue}>
      {children}
    </ErrorContext.Provider>
  );
};

// Create a custom hook to use the context
export const useErrorContext = () => {
  const context = useContext(ErrorContext);

  if (!context) {
    throw new Error(
      "useErrorContext must be used within an ErrorContextProvider"
    );
  }

  return context;
};
