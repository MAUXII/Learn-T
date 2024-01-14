import React from 'react';
import { useDarkMode } from './index';
import { FaSun, FaMoon } from 'react-icons/fa';  // Importe os ícones corretamente

const DarkModeToggle = (e: any) => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    toggleDarkMode();
  };

  return (
    <button onClick={handleClick} type="button"> {/* Defina o tipo como "button" */}
      {darkMode !== undefined ? (darkMode ? <FaMoon /> : <FaSun />) : 'Loading...'}
    </button>
  );
};

export default DarkModeToggle;
