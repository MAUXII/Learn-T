'use client'

import React, { useRef, useState } from 'react';

export const ButtonSpotlightBorder = () => {
  const divRef = useRef<HTMLButtonElement>(null); // Mude para HTMLButtonElement
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => { // Mude para HTMLButtonElement
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div className='relative'>
      <button // Altere de input para button
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
       
        className='h-12 items-center text-sm flex w-auto cursor-pointer bg-transparent rounded-md border dark:border-slate-800 p-3.5 dark:text-slate-100 border-slate-300 text-slate-900 transition-colors duration-500 placeholder:select-none  placeholder:text-neutral-500 focus:border-[#8678F9] focus:outline-none'
        type='button' // Altere de email para button
      >
        Começar 🚀
      </button>
      <button // Altere de input para button
        ref={divRef}
        disabled
        style={{
          border: '1px solid #8678F9',
          opacity,
          WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
        }}
        aria-hidden='true'
        className='pointer-events-none absolute left-0 top-0 z-10 h-12 w-full cursor-default rounded-md border border-[#8678F9] bg-[transparent] p-3.5 opacity-0  transition-opacity duration-500 placeholder:select-none'
        type='button' // Altere de email para button
      />
    </div>
  );
};
