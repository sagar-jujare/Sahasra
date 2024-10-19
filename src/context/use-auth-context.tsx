"use client";

import React, { useState, createContext, useContext } from "react";

type AuthContextType = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  isModelOpen: boolean;
  setIsModelOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialValues: AuthContextType = {
  currentStep: 1,
  setCurrentStep: () => {},
  isModelOpen: false,
  setIsModelOpen: () => {},
};

const AuthContext = createContext<AuthContextType>(initialValues);

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(
    initialValues.currentStep
  );
  const [isModelOpen, setIsModelOpen] = useState<boolean>(
    initialValues.isModelOpen
  );

  const values: AuthContextType = {
    currentStep,
    setCurrentStep,
    isModelOpen,
    setIsModelOpen,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );
  }
  return context;
};
// "use client"
// import React, { createContext, useState, useContext, ReactNode } from 'react';

// // Define the types for the context values
// interface InitialValuesProps {
//   currentStep: number;
//   setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
//   isModelOpen: boolean;
//   setisModelOpen: React.Dispatch<React.SetStateAction<boolean>>; // Corrected type here
// }

// // Create the context
// const AuthContext = createContext<InitialValuesProps | undefined>(undefined);

// // Create a provider component
// export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [currentStep, setCurrentStep] = useState<number>(1);
//   const [isModelOpen, setIsModelOpen] = useState<boolean>(true);

//   return (
//     <AuthContext.Provider value={{ currentStep, setCurrentStep, isModelOpen, setIsModelOpen }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use the context
// export const useAuthContextHook = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuthContextHook must be used within an AuthContextProvider');
//   }
//   return context;
// };
