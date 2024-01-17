import DarkModeToggle from "../Dark/btndark"


export const Header = ()=>{
    return(
        <header className="flex fixed top-0 flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white/20 backdrop-blur-[48px] border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-black/20 dark:border-gray-700">
          <div className="w-full px-4 sm:px-8 md:px-12 lg:px-24 justify-center self-center items-center">
  <nav className="relative max-w-[1256px] w-full mx-auto sm:flex sm:items-center sm:justify-between " aria-label="Global">
    <div className="flex items-center w-full justify-between">
      <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Learn!T</a>
      <div className="sm:hidden">
        <button type="button" className="hs-collapse-toggle w-9 h-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
          <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          <svg className="hs-collapse-open:block flex-shrink-0 hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </div>
    </div>
    <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
      <div className="flex flex-col  justify-center gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-4 sm:mt-0 sm:ps-4">
        <a className="font-medium flex  justify-center w-full sm:flex sm:w-max text-indigo-500 sm:py-6 dark:text-indigo-400" href="#" aria-current="page">Home</a>
        <a className="font-medium flex  justify-center w-full sm:w-max text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="#">Planos</a>
        <a className="font-medium flex justify-center w-full sm:w-max text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="#">Contato</a>
        <a className="font-medium flex justify-center w-full sm:w-max  text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500 whitespace-nowrap" href="#">Área Estudantil</a>

         <DarkModeToggle className="flex pb-2 justify-center items-center gap-x-2 font-medium w-full sm:w-max text-gray-500 hover:text-indigo-600 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-indigo-500" />
        
      </div>
    </div>
  </nav>
  </div>
</header>
    )
}