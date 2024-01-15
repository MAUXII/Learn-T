import Image from "next/image"
import * as React from "react"

export function CarouselSpacing() {
  return (
    <div className="w-full flex mt-48 flex-col h-[50rem] md:h-[35rem] lg:h-[25rem] rounded-3xl shadow-xl shadow-gray-200/20 relative z-10 bg-white/10  dark:bg-preto/10 dark:shadow-indigo-950/5 ">
      <div className="w-full h-[60%] rounded-t-3xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/p4.jpg')"}}> </div>
      <div className="flex flex-col  py-4 px-6 md:px-12">
              <div className="flex flex-col">
                      <div className="w-full items-center flex justify-between">
                        <h4 className="text-lg text-black font-bold dark:text-white"> Guilherme Duarte</h4>
                        <span className="text-sm text-black font-semibold dark:text-white">22 anos</span>
                       
                        </div>
                      <span className="dark:text-gray-400 font-semibold text-xs text-gray-600" >Back-end Developer</span>
                      </div>
                      <p className="dark:text-gray-400 text-gray-600 font-normal text-normal mt-1">&ldquo;Tomar a decisão de ingressar no curso da LearnIT foi verdadeiramente transformador. Após concluir o programa, não apenas alcancei o prestigiado certificado C1, mas também abri as portas para uma emocionante jornada profissional. Hoje, faço parte de uma equipe incrível em uma empresa multinacional, contribuindo ativamente para projetos inovadores.&rdquo;</p>
                    </div>
    </div>
  )
}
