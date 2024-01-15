import React from 'react';
import { useDarkMode } from './index';
import { FaSun, FaMoon } from 'react-icons/fa';

type Props = {
  className?: string;
};

const DarkModeToggle: React.FC<Props> = ({ className }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleDarkMode();
  };

  return (
    <button onClick={handleClick} type="button" className={className}>
      {darkMode !== undefined ? (darkMode ? <FaMoon /> : <FaSun />) : 'Loading...'}
    </button>
  );
};

export default DarkModeToggle;
