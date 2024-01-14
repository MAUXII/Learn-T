import React, { createContext, useContext, useState, useEffect } from 'react';

interface DarkModeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

interface DarkModeProviderProps {
  children: React.ReactNode;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined);

const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(prefersDarkScheme.matches);

    const updateDarkMode = () => {
      setDarkMode(prefersDarkScheme.matches);
    };

    prefersDarkScheme.addEventListener('change', updateDarkMode);

    return () => {
      prefersDarkScheme.removeEventListener('change', updateDarkMode);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};
export default DarkModeProvider;
