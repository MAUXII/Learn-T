export const Features = ( )=>{
    return(
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  
  <nav className="max-w-6xl mx-auto grid sm:flex gap-y-px sm:gap-y-0 sm:gap-x-4" aria-label="Tabs" role="tablist">
    <button type="button" className="hs-tab-active:bg-white/[.05] hs-tab-active:hover:border-transparent group  items-center justify-center focus:text-indigo-500 w-full flex flex-col text-start hover:bg-indigo-700/10 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-indigo-700/10 dark:focus:outline-none  dark:focus:text-indigo-500 active" id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
      <svg className="flex-shrink-0 hidden group-focus:text-indigo-500 dark:group-focus:text-indigo-400 sm:block h-7 w-7 hs-tab-active:text-indigo-600 text-gray-800 dark:hs-tab-active:text-indigo-500 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>
      <span className="sm:mt-5">
        <span className="hs-tab-active:text-indigo-600 block text-center group-focus:text-indigo-500 dark:group-focus:text-indigo-400 font-semibold text-gray-800 dark:hs-tab-active:text-indigo-500 dark:text-gray-200">Tudo em um lugar só</span>
        <span className="hidden lg:block mt-2 text-center text-gray-800 dark:text-gray-400">Aprenda o inglês falado tudo em uma plataforma só, sem complicações</span>
      </span>
    </button>

    <button type="button" className="hs-tab-active:bg-white/[.05]    justify-center items-center  hs-tab-active:hover:border-transparent w-full flex flex-col text-start hover:bg-indigo-700/10 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-indigo-700/10 dark:focus:outline-none group focus:text-indigo-500 dark:focus:text-indigo-500" id="tabs-with-card-item-2" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2" role="tab">
      <svg className="flex-shrink-0 hidden sm:block h-7 w-7 hs-tab-active:text-indigo-600 group-focus:text-indigo-500 dark:group-focus:text-indigo-400 text-gray-800 dark:hs-tab-active:text-indigo-500 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
      <span className="sm:mt-5">
        <span className="hs-tab-active:text-indigo-600 block text-center font-semibold text-gray-800 group-focus:text-indigo-500 dark:group-focus:text-indigo-400 dark:hs-tab-active:text-indigo-500 dark:text-gray-200">Aumente o seu level</span>
        <span className="hidden lg:block text-center mt-2 text-gray-800 dark:text-gray-400">Um sistema de Rank saudável, incentivamos os alunos a estudarem cada vez mais!</span>
      </span>
    </button>

    <button type="button" className="hs-tab-active:bg-white/[.05]  justify-center items-center group focus:text-indigo-500 hs-tab-active:hover:border-transparent w-full flex flex-col text-start hover:bg-indigo-700/10 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-indigo-700/10 dark:focus:outline-none  dark:focus:text-indigo-500" id="tabs-with-card-item-3" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3" role="tab">
      <svg className="flex-shrink-0 hidden sm:block h-7 w-7 hs-tab-active:text-indigo-600 group-focus:text-indigo-500 dark:group-focus:text-indigo-400 text-gray-800 dark:hs-tab-active:text-indigo-500 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
      <span className="sm:mt-5">
        <span className="hs-tab-active:text-indigo-600 block text-center group-focus:text-indigo-500 dark:group-focus:text-indigo-400 font-semibold text-gray-800 dark:hs-tab-active:text-indigo-500 dark:text-gray-200">Respondendo suas dúvidas</span>
        <span className="hidden text-center lg:block mt-2 text-gray-800 dark:text-gray-400">Agora temons uma nova feature, um IA Chatbot que irá tirar todas suas dúvidas</span>
      </span>
    </button>
  </nav>
  

  
  <div className="mt-12 md:mt-16">
    <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
      
      <div className="max-w-[1140px] lg:pb-32 relative">
      
        <figure className="hidden absolute bottom-0 start-0 z-[2] max-w-full w-60 h-auto mb-20 ms-20 lg:block">
          <div className="p-1.5 bg-gray-100 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-900 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(233_233_233_/_20%),_0_2rem_4rem_-2rem_rgb(233_233_233_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(233_233_233_/_20%)]">
            <img className="max-w-full h-auto rounded-[1.25rem]" src="/exercise-mobile.jpg" alt="Image Description" />
          </div>
        </figure>
        

       
        <figure className="ms-auto me-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(233_233_233_/_20%),_0_0_5rem_-2rem_rgb(233_233_233_/_15%)]">
          <div className="relative flex items-center max-w-[50rem] bg-white border-b border-gray-100 rounded-t-lg py-2 px-24 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex space-x-1 absolute top-2/4 start-4 -translate-y-1">
              <span className="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-900"></span>
              <span className="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-900"></span>
              <span className="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-900"></span>
            </div>
            <div className="flex justify-center items-center w-full h-full bg-gray-200 text-[.25rem] text-gray-800 rounded-sm sm:text-[.5rem] dark:bg-gray-900 dark:text-gray-200">www.learnit.com.br</div>
          </div>

          <div className=" rounded-b-lg">
            <img className="max-w-full h-auto rounded-b-lg" src="/exercise-desktop.jpg" alt="Image Description" />
          </div>
        </figure>
       
      </div>
      
    </div>

    <div id="tabs-with-card-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
      
      <div className="max-w-[1140px] lg:pb-32 relative">
        
        <figure className="hidden absolute bottom-0 start-0 z-[2] max-w-full w-60 h-auto mb-20 ms-20 lg:block">
          <div className="p-1.5 bg-gray-900 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_40%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_50%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-900 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(233_233_233_/_10%),_0_2rem_4rem_-2rem_rgb(233_233_233_/_10%),_inset_0_-0.1875rem_0.3125rem_0_rgb(233_233_233_/_5%)]">
            <img className="max-w-full h-auto rounded-[1.25rem]" src="/rank-mobile.jpg" alt="Image Description" />
          </div>
        </figure>
       

        
        <figure className="ms-auto me-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_60%),_0_0_5rem_-2rem_rgb(45_55_75_/_30%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(233_233_233_/_10%),_0_0_5rem_-2rem_rgb(233_233_233_/_5%)]">
          <div className="relative flex items-center max-w-[50rem] bg-gray-800 border-b border-gray-700 rounded-t-lg py-2 px-24">
            <div className="flex space-x-1 absolute top-2/4 start-4 -translate-y-1">
              <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
            </div>
            <div className="flex justify-center items-center w-full h-full bg-gray-900 text-[.25rem] text-gray-200 rounded-sm sm:text-[.5rem]">www.learnit.com.br</div>
          </div>

          <div className=" rounded-b-lg">
            <img className="max-w-full h-auto rounded-b-xl" src="/rank-desktop.jpg" alt="Image Description" />
          </div>
        </figure>
       
      </div>
    
    </div>

    <div id="tabs-with-card-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-3">
      
      <div className="max-w-[1140px] lg:pb-32 relative">
        
        <figure className="hidden absolute bottom-0 start-0 z-[2] max-w-full w-60 h-auto mb-20 ms-20 lg:block">
          <div className="p-1.5 bg-gray-100 rounded-3xl shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(233_233_233_/_20%),_0_0_5rem_-2rem_rgb(233_233_233_/_15%)] dark:bg-gray-900">
            <img className="max-w-full h-auto rounded-[1.25rem]" src="/chatbot-mobile.jpg" alt="Image Description" />
          </div>
        </figure>
       

        
        <figure className="ms-auto me-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(233_233_233_/_20%),_0_0_5rem_-2rem_rgb(233_233_233_/_15%)]">
          <div className="relative flex items-center max-w-[50rem] bg-white border-b border-gray-100 rounded-t-lg py-2 px-24 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex space-x-1 absolute top-2/4 start-4 -translate-y-1">
              <span className="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-900"></span>
              <span className="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-900"></span>
              <span className="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-900"></span>
            </div>
            <div className="flex justify-center items-center w-full h-full bg-gray-200 text-[.25rem] text-gray-800 rounded-sm sm:text-[.5rem] dark:bg-gray-900 dark:text-gray-200">www.learnit.com.br</div>
          </div>

          <div className=" rounded-b-lg">
            <img className="max-w-full h-auto rounded-b-lg" src="/chatbot-desktop.jpg" alt="Image Description" />
          </div>
        </figure>
        
      </div>
      
    </div>
  </div>
 
</div>

    )
}