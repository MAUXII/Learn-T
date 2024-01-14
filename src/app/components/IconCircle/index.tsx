import * as React from "react";

type Props = {
    icone: React.ReactNode;
    className: string,
  };
export const IconCircle = ({icone, className}: Props ) =>{
    return(
        <div className={`flex items-center justify-center aspect-square rounded-full bg-indigo-500 ${className}`}>
            <span className="text-white self-center text-center">{icone}</span>
        </div>
    )
}