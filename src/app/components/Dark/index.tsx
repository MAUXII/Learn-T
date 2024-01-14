import React, { useState, useEffect } from 'react';
import { MdNightsStay } from 'react-icons/md';
import { FaSun } from 'react-icons/fa';
import '../../globals.css';

interface DarkProps {
  prefersDarkMode: boolean; // Você pode precisar ajustar o tipo com base no seu caso de uso
}

export const Dark: React.FC<DarkProps> = ({ prefersDarkMode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateDarkMode = () => {
      setIsDarkMode(darkModeMediaQuery.matches);
      console.log('Dark mode updated:', darkModeMediaQuery.matches);
    };

    // Primeira inicialização
    updateDarkMode();

    // Adiciona o listener para atualizações
    darkModeMediaQuery.addEventListener('change', updateDarkMode);

    // Remove o listener no cleanup
    return () => {
      darkModeMediaQuery.removeEventListener('change', updateDarkMode);
    };
  }, []);

  useEffect(() => {
    // Verifica se o tema preferido do usuário é dark
    if (prefersDarkMode !== undefined && prefersDarkMode !== isDarkMode) {
      setIsDarkMode(prefersDarkMode);
    }
  }, [prefersDarkMode]);

  useEffect(() => {
    // Toggle da classe 'dark' no elemento HTML
    document.documentElement.classList.toggle('dark', isDarkMode !== undefined && isDarkMode);
    console.log('Theme set to dark:', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  console.log('Rendering with isDarkMode:', isDarkMode);

  return (
    <div className={`transition-all ${isDarkMode ? 'dark' : ''}`}>
      <button className='' onClick={toggleDarkMode}>
        {isDarkMode !== undefined ? (isDarkMode ? <MdNightsStay /> : <FaSun />) : 'Loading...'}
      </button>
    </div>
  );
};
