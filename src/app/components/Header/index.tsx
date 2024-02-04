import DarkModeToggle from "../Dark/btndark"


export const Header = ()=>{
    return(
        <header className="flex fixed top-0 flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white/20 backdrop-blur-[48px] border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-black/20 dark:border-gray-700">
          <div className="w-full px-4 sm:px-8 md:px-12 lg:px-24 justify-center self-center items-center">
  <nav className="relative max-w-[1256px] w-full mx-auto sm:flex sm:items-center sm:justify-between " aria-label="Global">
    <div className="flex items-center w-full justify-between">
      <a className="flex items-center justify-center gap-3 text-xl font-semibold dark:text-white" href="#" aria-label="Brand">
        <svg className="aspect-square h-auto" width="28" height="150" viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M65.3661 2.323C50.9531 3.652 32.6241 4.659 22.0851 4.703C6.12609 4.769 3.72309 4.987 3.17509 6.415C2.83009 7.315 3.08109 8.777 3.73209 9.665C10.1611 18.429 11.5891 31.177 7.38609 42.279C5.92809 46.129 3.81809 51.754 2.69809 54.779C-0.250913 62.741 -0.881913 77.319 1.29909 87.12C6.88009 112.209 29.1061 132.741 61.4001 142.642C78.5901 147.912 87.3591 149.124 108.866 149.199C125.332 149.257 130.103 148.916 139.531 147.009C180.766 138.669 206.188 120.41 215.911 92.148C216.986 89.023 217.866 85.411 217.866 84.122C217.866 82.834 218.316 81.779 218.866 81.779C219.459 81.779 219.866 78.112 219.866 72.779C219.866 67.446 219.459 63.779 218.866 63.779C218.316 63.779 217.866 62.835 217.866 61.682C217.866 60.529 216.066 54.163 213.866 47.536C208.433 31.171 208.324 23.882 213.368 14.206C215.802 9.535 216.566 7.122 215.874 6.288C215.176 5.447 207.174 4.878 189.122 4.386C174.956 4 153.945 2.805 142.431 1.731C115.975 -0.736003 96.9741 -0.590003 65.3661 2.323ZM87.3661 16.364C86.2661 16.535 81.4291 16.964 76.6161 17.317C71.8041 17.67 67.8661 18.262 67.8661 18.632C67.8661 19.003 70.2281 19.862 73.1161 20.541C86.4431 23.678 100.572 34.344 106.254 45.557C107.709 48.429 109.283 50.779 109.751 50.779C110.219 50.779 112.349 47.791 114.484 44.138C121.268 32.532 132.993 23.761 145.697 20.788C148.629 20.102 150.654 19.209 150.197 18.803C148.487 17.284 126.72 15.781 108.366 15.914C97.9161 15.989 88.4661 16.192 87.3661 16.364ZM49.8111 35.229C42.7821 37.819 38.2081 40.685 34.2511 44.977C20.0531 60.381 20.6031 83.042 35.5101 96.851C43.6631 104.402 51.5751 107.228 62.7391 106.576C76.9381 105.746 88.6831 97.802 94.7061 84.954C97.0011 80.057 97.3661 77.976 97.3661 69.779C97.3661 61.408 97.0351 59.604 94.5781 54.601C90.8981 47.107 81.7491 38.627 74.3631 35.864C67.8831 33.439 55.5361 33.12 49.8111 35.229ZM149.62 34.799C143.276 36.403 134.358 41.454 130.88 45.415C129.059 47.49 126.398 51.683 124.967 54.733C122.706 59.555 122.366 61.592 122.366 70.334C122.366 79.799 122.566 80.783 125.783 87.118C129.629 94.692 134.32 99.406 142.08 103.493C146.84 106.001 148.36 106.278 157.366 106.278C166.275 106.279 168.046 105.965 173.6 103.399C181.139 99.918 187.933 93.005 191.686 84.997C193.972 80.12 194.366 77.953 194.366 70.258C194.366 62.101 194.055 60.604 191.116 54.635C185.068 42.351 174.341 35.166 160.778 34.317C156.701 34.062 151.68 34.279 149.62 34.799ZM55.1361 58.262C50.2521 60.385 47.6621 65.209 48.1821 71.217C48.5381 75.339 49.2061 76.703 52.2231 79.467C63.1971 89.524 79.6691 75.809 71.9061 63.078C68.3681 57.274 61.7681 55.378 55.1361 58.262ZM153.366 58.179C140.339 64.021 143.565 82.779 157.596 82.779C167.569 82.779 173.894 72.536 169.349 63.746C166.726 58.674 158.585 55.838 153.366 58.179ZM0.226087 73.779C0.226087 79.004 0.395087 81.141 0.601087 78.529C0.807087 75.917 0.807087 71.641 0.601087 69.029C0.395087 66.417 0.226087 68.554 0.226087 73.779ZM92.3661 110.373C87.8931 114.132 79.0561 118.382 73.0671 119.654C70.1521 120.273 63.6271 120.816 58.5671 120.861L49.3661 120.943L54.7771 123.412C79.7711 134.817 117.564 137.188 146.866 129.188C154.289 127.161 167.006 122.585 166.532 122.111C166.321 121.901 161.923 121.577 156.758 121.391C144.58 120.953 136.453 118.321 128.861 112.356C125.656 109.839 122.417 107.779 121.663 107.779C120.908 107.779 118.075 110.029 115.366 112.779C112.657 115.529 109.893 117.779 109.222 117.779C108.551 117.779 105.872 115.529 103.269 112.779C100.665 110.029 97.8221 107.795 96.9501 107.815C96.0791 107.835 94.0161 108.986 92.3661 110.373Z" fill="#9180FF"/>
</svg>
Learn!T</a>
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