import React from 'react';

const FaqSection: React.FC = () => {
  return (
    <div className="w-full mx-auto mt-48">

      <div className="w-full mx-auto text-center">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Suas perguntas, respondidas</h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">Encontre respostas para as dúvidas mais comuns sobre o LearnIT.</p>
      </div>

    
      <div className="mt-8">
   
        <div className="hs-accordion-group">
          <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl py-6 dark:hs-accordion-active:bg-white/[.05] active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
            <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 focus:text-indigo-500 dark:focus:text-indigo-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
              Posso cancelar a qualquer momento?
              <svg className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              <svg className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
            </button>
            <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
              <p className="text-gray-800 dark:text-gray-400">
                Sim, você pode cancelar a qualquer momento sem perguntas, mas ficaríamos muito agradecidos se você nos desse algum feedback.
              </p>
            </div>
          </div>
    
          <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl py-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-two">
            <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 focus:text-indigo-500 dark:focus:text-indigo-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
              Minha equipe possui créditos. Como podemos usá-los?
              <svg className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              <svg className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
            </button>
            <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
              <p className="text-gray-800 dark:text-gray-400">
                Assim que sua equipe se inscrever em um plano de assinatura, é aqui que nos sentamos, pegamos uma xícara de café e detalhamos as informações.
              </p>
            </div>
          </div>
    
          <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl py-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-three">
            <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 focus:text-indigo-500 dark:focus:text-indigo-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
              Como funciona a precificação do LearnIT?
              <svg className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              <svg className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
            </button>
            <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
              <p className="text-gray-800 dark:text-gray-400">
                A precificação do LearnIT é baseada no número de usuários e nos recursos adicionais que você escolher. Quanto mais usuários e recursos, maior será o plano.
              </p>
            </div>
          </div>

          <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl py-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-four">
            <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 focus:text-indigo-500 dark:focus:text-indigo-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
            É possível acessar o LearnIT em vários dispositivos?
              <svg className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              <svg className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
            </button>
            <div id="hs-basic-with-title-and-arrow-stretched-collapse-four" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
              <p className="text-gray-800 dark:text-gray-400">
              Sim, é totalmente possível acessar o LearnIT em vários dispositivos. Oferecemos suporte a uma ampla variedade de plataformas, incluindo desktops, laptops, tablets e smartphones. Sincronizamos seu progresso automaticamente para que você possa continuar de onde parou, independentemente do dispositivo que estiver usando. Aproveite a flexibilidade e estude quando e onde quiser com o LearnIT!
              </p>
            </div>
          </div>
  
    
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
