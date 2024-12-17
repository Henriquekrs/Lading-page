import { useState } from 'react';
import myContext from './context';

type MyProviderProps = {
  children: React.ReactNode;
};

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  console.log(darkMode);

  const value = {
    darkMode,
    setDarkMode,
  };

  return <myContext.Provider value={{ value }}>{children}</myContext.Provider>;
};
