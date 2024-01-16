'use client'
import { Ri24HoursLine, RiBookLine, RiHeartLine, RiLightbulbFlashLine } from "react-icons/ri";
import { LuClover } from "react-icons/lu";
import { RiBriefcase4Line } from "react-icons/ri";

import Image from 'next/image'
import { Cobe } from './components/Globe'
import { ButtonSpotlightBorder } from './components/Buttons/btnBorder'
import { BtnStart } from './components/Buttons/btnStart'
import { Features } from './components/Features'
import { useEffect } from 'react'

import { Benefits } from './components/Benefits'
import { Table } from "./components/Table";
import { CarouselSpacing } from "./components/Carrousel";
import { Testimonial } from "./components/Carrousel/testimonial";
import { Header } from "./components/Header";
import React from 'react';
import DarkModeProvider from "./components/Dark";
import { Funil } from "./components/CallFunil";
import { Price } from "./components/Price";
import { Footer } from "./components/Footer";
import FaqSection from "./components/Faq";
import { Lastcall } from "./components/Lastcall";

export default function Home() {

  
  useEffect( ()=>{
    (
      async () =>{
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        
      }
    )()
  }, []);
  
  useEffect(() => {
    const setTheme = () => {
      const isDarkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', isDarkModeEnabled);
      document.documentElement.classList.toggle('light', !isDarkModeEnabled);
    };

    // Defina o tema inicial
    setTheme();

    // Adicione um ouvinte de evento para detectar mudanças na preferência de cor do sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', setTheme);

    // Remova o ouvinte de evento quando o componente é desmontado
    return () => {
      mediaQuery.removeEventListener('change', setTheme);
    };
  }, []);

  return (
    
    <DarkModeProvider>
      <div>
    <Header />
    <main className="flex min-h-screen mt-16 flex-col items-center justify-between transition-colors p-4 sm:p-8 md:p-12 lg:p-24">
    
      <div className='w-full max-w-[1256px] flex flex-col'>
        <div className='self-center flex flex-col items-center gap-3 '>
          <div className='relative w-full text-center items-center justify-center flex flex-col gap-2'>

        <h1 className='font-bold h-auto z-10 lg:h-[66px] h1-gradient text-6xl text-center'>Aprenda Inglês da Forma Certa</h1>
        <span className='dark:text-gray-400 text-gray-600 z-10 text-center text-sm flex w-full max-w-[750px]'>Aprimore suas habilidades no idioma inglês de maneira eficaz e definitiva, proporcionando uma jornada de aprendizado transformadora. De uma vez por todas, LearnIT! Desperte o seu potencial linguístico com confiança e sucesso.</span>
        <h2 className='font-bold w-full text-indigo-500/5 mt-[130%] sm:mt-[70%] items-center justify-center absolute flex text-[clamp(48px,20vw,22rem)] text-center'>Learn!T</h2>

        </div>
        <div className='flex  z-10 gap-2 mt-2'>
      <ButtonSpotlightBorder />
      <BtnStart />
    </div>
        </div>
        <div className='relative'>
      <Cobe></Cobe>
      <div className='bottom-0 absolute bg-gray-300/10 dark:bg-gray-950/5 w-full translate-y-[70%] lg:h-[620px] backdrop-blur-xl rounded-xl'>
        <Features />
      </div>
      
      
      </div>
      <div className='lg:h-[40rem] md:h-[30rem] sm:h-[20rem] h-[19.6rem] w-full '></div>
      <div className='flex w-full mt-48 self-center justify-center flex-col items-center gap-3'>
        <div className='w-full text-center items-center justify-center flex flex-col gap-2'>
      <h2 className='font-bold h-auto z-10 min-h-[66px] max-w-[900px] h1-gradient text-6xl text-center'>O tal do Inglês falado no mundo</h2>
        <span className='dark:text-gray-400 text-gray-600 z-10 text-center justify-center items-center text-sm flex w-full max-w-[750px]'>Desbravando o Inglês Falado no Mundo - Conectando Você ao Idioma Global</span>
        </div>
      
        <div className="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 w-full mt-8 gap-y-6 sm:gap-y-8 md:gap-y-[100px] lg:gap-y-4">
  <Benefits icone={<RiHeartLine />} title='Bem-estar Emocional' text='Promovemos o equilíbrio emocional, proporcionando um ambiente acolhedor e de apoio.' />
  <Benefits icone={<RiLightbulbFlashLine />} title='Inovação Constante' text='Estamos sempre atualizados e comprometidos em fornecer conteúdo inovador e relevante.' />
  <Benefits icone={<RiBookLine />} title='Aprendizado Contínuo' text='Fomentamos uma cultura de aprendizado contínuo, incentivando o crescimento constante.' />

  <Benefits icone={<Ri24HoursLine />} title='Sempre Acessível' text='Mantemos um contato 24 horas com nossos alunos, não importa o horário, estaremos lá!' />
  <Benefits icone={<RiBriefcase4Line />} title='Empregabilidade' text='Ao final do curso você será encaminhado a entrevistas dependendo da sua área!' />
  <Benefits icone={<LuClover />} title='Fluência Fortuita' text='Cultive Seu Inglês tão bem como um Jardim de Trevo de Quatro Folhas' />
</div>
      </div>

      <div className='flex w-full mt-48 self-center flex-col items-center gap-3'>
        <div className='w-full text-center items-center justify-center flex flex-col gap-2'>
      <h2 className='font-bold h-auto z-10 lg:h-[126px] max-w-[900px] h1-gradient text-6xl text-center'>Veja o Rank dos alunos mais dedicados da LearnIT</h2>
        <span className='dark:text-gray-400 text-gray-600 z-10 text-center justify-center items-center text-sm flex w-full max-w-[750px]'>Quer fazer parte do rank também? não perca tempo e assine nosso plano gratuito</span>
        </div>
      
        <Table></Table>
      </div>

      <div className='flex w-full mt-48 self-center flex-col items-center gap-3'>
        <div className='w-full mb-[-48px] text-center items-center justify-center flex flex-col gap-2'>
      <h2 className='font-bold h-auto z-10  max-w-[900px] h1-gradient text-6xl text-center'>Pronto decolar sua carreira?</h2>
        <span className='dark:text-gray-400 text-gray-600 z-10 text-center justify-center items-center text-sm flex w-full max-w-[750px]'>Nossa reputação como uma das melhores escolas de inglês nacionais não é a toa.</span>
        </div>
        <div className=" flex-col gap-8  flex w-full">
      <Price />
      <Testimonial />
      </div>
      
      <Funil />
      <Lastcall />
      </div>
      <FaqSection />
      
    </div>
    </main>
    <Footer />
    </div>
    </DarkModeProvider>
    
  )
}
