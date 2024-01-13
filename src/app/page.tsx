'use client'

import Image from 'next/image'
import { Cobe } from './components/Globe'
import { ButtonSpotlightBorder } from './components/Buttons/btnBorder'
import { BtnStart } from './components/Buttons/btnStart'
import { Features } from './components/Features'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between dark:bg-[#060606] p-24">
      
      <div className='w-full max-w-[1256px] flex flex-col'>
        <div className='self-center flex flex-col items-center gap-3 '>
          <div className='relative w-full text-center items-center justify-center flex flex-col gap-2'>

        <h1 className='font-bold h-auto z-10 lg:h-[66px] h1-gradient text-6xl text-center'>Aprenda Inglês da Forma Certa</h1>
        <span className='text-gray-400 z-10 text-center text-sm flex w-full max-w-[750px]'>Aprimore suas habilidades no idioma inglês de maneira eficaz e definitiva, proporcionando uma jornada de aprendizado transformadora. De uma vez por todas, LearnIT! Desperte o seu potencial linguístico com confiança e sucesso.</span>
        <h2 className='font-bold w-full text-indigo-500/5 mt-[70%] items-center justify-center absolute flex text-[18rem] text-center'>Learn!T</h2>

        </div>
        <div className='flex  z-10 gap-2 mt-2'>
      <ButtonSpotlightBorder />
      <BtnStart />
    </div>
        </div>
        <div className='relative'>
      <Cobe></Cobe>
      <div className='bottom-0 absolute bg-gray-800/10 w-full translate-y-[22rem] lg:h-[620px] backdrop-blur-xl rounded-xl'>
        <Features />
      </div>
      
      
      </div>
      <div className='h-[670px]  w-full '></div>
      <div className=''>
        continuand
      </div>
      
    
      
    </div>
    </main>
  )
}
