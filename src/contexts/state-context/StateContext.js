import {createContext, useState, useContext} from 'react';

const StateContext = createContext();

export const StateContextProvider = ({children}) => {
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXNext] = useState(true);

  const value = {stepNumber, setStepNumber, xIsNext, setXNext};

  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  );
}

export const useSateContext = () => {
  const context = useContext(StateContext);

  if (context === undefined) {
    throw new Error("useSateContext was used outside of its Provider");
  }

  return context;
}
