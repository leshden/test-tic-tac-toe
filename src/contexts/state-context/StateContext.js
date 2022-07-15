import {createContext, useState} from 'react';

export const StateContext = createContext();

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
