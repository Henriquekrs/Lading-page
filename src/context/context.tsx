import { createContext } from 'react';

export type ProviderValue = {
  value: {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
  };
};

const myContext = createContext({} as ProviderValue);

export default myContext;
