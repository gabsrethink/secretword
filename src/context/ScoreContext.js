import { createContext, useState } from "react";

export const ScoreContext = createContext();

// 2 - criar provider
export const ScoreContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <ScoreContext.Provider value={{ counter, setCounter }}>
      {children}
    </ScoreContext.Provider>
  );
};