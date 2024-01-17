export const FirstCall = () =>{
    return(
        <div className="w-full rounded-2xl mt-8 relative bg-cover flex items-end justify-center bg-center aspect-video max-h-[30rem]" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'}}>
            <div className="w-[clamp(20rem,100%,30rem)] h-[clamp(5rem,30%,10rem)] rounded-t-2xl bg-[#E8EBEC] dark:bg-[#090909] sm:border-x-2 border-t-2  border-indigo-500/40 p-6 items-center gap-4 relative bottom-0 justify-between flex flex-col ">
                <h2 className="font-semibold text-xl text-center">Aulas Online como você nunca viu</h2>
                <span className="text-sm text-center text-gray-600 dark:text-gray-400">As nossa sulas são especiais, dinâmicas incrivéis com os professores junto a variedade dinâmica de ossa plataforma</span>
                <a className="cursor-pointer flex text-white py-4 px-8 self-center w-max justify-center items-center rounded-lg bg-indigo-500 hover:bg-indigo-600">Ver Mais</a>
            </div>
        </div>
    )
}