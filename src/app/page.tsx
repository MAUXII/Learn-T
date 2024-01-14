'use client'
import { Ri24HoursLine, RiBookLine, RiHeartLine, RiLightbulbFlashLine } from "react-icons/ri";
import { LuClover } from "react-icons/lu";
import { RiBriefcase4Line } from "react-icons/ri";

import Image from 'next/image'
import { Cobe } from './components/Globe'
import { ButtonSpotlightBorder } from './components/Buttons/btnBorder'
import { BtnStart } from './components/Buttons/btnStart'
import { Features } from './components/Features'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/ui/carousel'
import { useEffect } from 'react'
import { Dark } from './components/Dark'
import { Benefits } from './components/Benefits'
import { Table } from "./components/Table";
import { CarouselSpacing } from "./components/Carrousel";

export default function Home() {
  
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
    <main className="flex min-h-screen flex-col items-center justify-between  p-8 lg:p-24">
     
      <div className='w-full max-w-[1256px] flex flex-col'>
        <div className='self-center flex flex-col items-center gap-3 '>
          <div className='relative w-full text-center items-center justify-center flex flex-col gap-2'>

        <h1 className='font-bold h-auto z-10 lg:h-[66px] h1-gradient text-6xl text-center'>Aprenda Inglês da Forma Certa</h1>
        <span className='dark:text-gray-400 text-gray-600 z-10 text-center text-sm flex w-full max-w-[750px]'>Aprimore suas habilidades no idioma inglês de maneira eficaz e definitiva, proporcionando uma jornada de aprendizado transformadora. De uma vez por todas, LearnIT! Desperte o seu potencial linguístico com confiança e sucesso.</span>
        <h2 className='font-bold w-full text-indigo-500/5 mt-[70%] items-center justify-center absolute flex text-[clamp(48px,20vw,22rem)] text-center'>Learn!T</h2>

        </div>
        <div className='flex  z-10 gap-2 mt-2'>
      <ButtonSpotlightBorder />
      <BtnStart />
    </div>
        </div>
        <div className='relative'>
      <Cobe></Cobe>
      <div className='bottom-0 absolute bg-gray-800/10 w-full translate-y-[70%] lg:h-[620px] backdrop-blur-xl rounded-xl'>
        <Features />
      </div>
      
      
      </div>
      <div className='lg:h-[40rem] md:h-[30rem] sm:h-[20rem] h-[19.6rem] w-full '></div>
      <div className='flex w-full mt-24 self-center justify-center flex-col items-center gap-3'>
        <div className='w-full text-center items-center justify-center flex flex-col gap-2'>
      <h2 className='font-bold h-auto z-10 lg:h-[126px] max-w-[900px] h1-gradient text-6xl text-center'>A importância de aprender inglês fugindo do convencional</h2>
        <span className='dark:text-gray-400 text-gray-600 z-10 text-center justify-center items-center text-sm flex w-full max-w-[750px]'>Aprimore suas habilidades no idioma inglês de maneira eficaz e definitiva, proporcionando uma jornada de aprendizado transformadora. De uma vez por todas, LearnIT! Desperte o seu potencial linguístico com confiança e sucesso.</span>
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

      <div className='flex w-full mt-24 self-center flex-col items-center gap-3'>
        <div className='w-full text-center items-center justify-center flex flex-col gap-2'>
      <h2 className='font-bold h-auto z-10 lg:h-[126px] max-w-[900px] h1-gradient text-6xl text-center'>Veja o Rank dos alunos mais dedicados da LearnIT</h2>
        <span className='dark:text-gray-400 text-gray-600 z-10 text-center justify-center items-center text-sm flex w-full max-w-[750px]'>Quer fazer parte do rank também? não perca tempo e assine nosso plano gratuito</span>
        </div>
      
        <Table></Table>
      </div>

      <div className='flex w-full mt-24 self-center flex-col items-center gap-3'>
        <div className='w-full text-center items-center justify-center flex flex-col gap-2'>
      <h2 className='font-bold h-auto z-10  max-w-[900px] h1-gradient text-6xl text-center'>O que falam de nós?</h2>
        <span className='dark:text-gray-400 text-gray-600 z-10 text-center justify-center items-center text-sm flex w-full max-w-[750px]'>Quer fazer parte do rank também? não perca tempo e assine nosso plano gratuito</span>
        </div>
        <div className="px-12 mx-12 flex w-full">
      <CarouselSpacing />
      </div>
      </div>
      
    
      
    </div>
    </main>
  )
}
