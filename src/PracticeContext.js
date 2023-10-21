import React, { createContext, useContext, useState } from "react";

const PracticeContext = createContext();

export const usePracticeContext = () => useContext(PracticeContext);

export function PracticeProvider({ children }) {
  const [practiceSelected, setPracticeSelected] = useState("#practica_1");

  return (
    <PracticeContext.Provider value={{ practiceSelected, setPracticeSelected }}>
      {children}
    </PracticeContext.Provider>
  );
}