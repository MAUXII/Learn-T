type Props = {
    title: string;
    icone?: React.ReactNode;
    text: string;
  };

import { IconCircle } from "../IconCircle"

export const Benefits = ({title,icone,text} : Props)=>{
    return(
        <div className="flex flex-col w-full p-4 gap-2 items-center justify-start h-[200px]">
            <IconCircle icone = {icone} className="min-w-12 text-xl lg:mt-0" />
            <div className="flex flex-col  lg:mt-2 text-center items-center justify-center">
            <h3 className="dark:text-white text-preto text-2xl font-semibold">{title}</h3>
            <p className=" dark:text-gray-400 text-gray-600 max-w-[370px] text-center">{text}</p>
            </div>
        </div>
    )
}