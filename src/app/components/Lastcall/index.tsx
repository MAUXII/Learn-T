export const Lastcall = ()=>{
    return(
        <div className="w-full h-[30rem] sm:h-80 mt-24 flex flex-col sm:flex-row sm:items-center justify-center sm:justify-normal bg-cover bg-center bg-opacity-0 bg-indigo-500/70 rounded-xl relative" style={{backgroundImage: 'url("/bgcall.png")', backgroundBlendMode: 'overlay', }}>
            <div className="absolute bg-center sm:bg-left  sm:left-2 md:left-12 bottom-0 w-full h-[40%] sm:h-[20rem] md:h-[28rem] bg-no-repeat bg-contain" style={{backgroundImage: 'url("/man.png")'}}></div>
            <div className="hidden sm:block w-1/2 h-full "></div>
            <div className=" z-10 sm:justify-normal justify-center w-full text-center sm:text-start flex flex-col sm:w-auto p-6">
                <span className="text-sm font-medium text-white">Venha para o LearnIT</span>
                <span className="text-4xl text-white self-center text-center sm:text-start font-bold w-[310px] sm:w-[405px]">Matricule-se já <br /> ganhe desconto no curso <br className="hidden sm:block" /> e material didático</span>
                <div className="flex flex-row sm:self-start self-center gap-2">
                <a className="w-max bg-indigo-600 cursor-pointer hover:bg-indigo-600/90 text-white ring ring-white/20  rounded-lg py-4 px-6 mt-6 whitespace-nowrap">Matricule-se já</a>
                </div>
                </div>
                <div className="sm:hidden w-full h-1/2"></div>
        </div>
    )
}