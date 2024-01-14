import * as React from "react"

import { Card, CardContent } from "@/app/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel"

export function CarouselSpacing() {
  return (
    <Carousel className="w-full max-w-[1256px] mt-8">
      <CarouselContent className="-ml-1">
        
          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="">
              <Card className="">
                <CardContent className="flex bg-gray/10 aspect-square items-center justify-center p-0">
                  <div className="w-full relative rounded-xl border border-gray-200/10  top-0 h-full">
                    <div className="flex flex-col rounded-t-xl absolute bg-gray-400 top-0 h-[40%] w-full bg-cover bg-no-repeat bg-center" style={{backgroundImage : 'url("/p1.jpg")'}}></div>
                    <div className="flex flex-col rounded-xl h-[40%] w-full"></div>
                    <div className="flex flex-col p-4">
                      <div className="w-full items-center flex justify-between">
                        <h4 className="text-lg text-black font-bold dark:text-white"> Rafaela Duarte</h4>
                        <span className="text-sm text-black font-semibold dark:text-white">22 anos</span>
                       
                        </div>
                      <span className="dark:text-gray-400 font-semibold text-sm text-gray-600" >Back-end Developer</span>
                      <p className="dark:text-gray-400 text-white-600 font-normal text-xs mt-2">"Foi uma das melhores decisões que tomei, depois que terminei o curso da LearnIT, conquistei meu certificado C1 e fui contratada por uma empresa multi-nacional"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="">
              <Card className="">
                <CardContent className="flex bg-gray/10 aspect-square items-center justify-center p-0">
                  <div className="w-full relative rounded-xl border border-gray-200/10  top-0 h-full">
                    <div className="flex flex-col rounded-t-xl absolute bg-gray-400 top-0 h-[40%] w-full bg-cover bg-no-repeat bg-center" style={{backgroundImage : 'url("/p2.jpg")'}}></div>
                    <div className="flex flex-col rounded-xl h-[40%] w-full"></div>
                    <div className="flex flex-col p-4">
                      <div className="w-full items-center flex justify-between">
                        <h4 className="text-lg text-black font-bold dark:text-white"> Gabriel Rodrigues</h4>
                        <span className="text-sm text-black font-semibold dark:text-white">27 anos</span>
                       
                        </div>
                      <span className="dark:text-gray-400 font-semibold text-sm text-gray-600" >Front-end Developer</span>
                      <p className="dark:text-gray-400 text-white-600 font-normal text-xs mt-2">"Foi uma das melhores decisões que tomei, depois que terminei o curso da LearnIT, conquistei meu certificado C1 e fui contratada por uma empresa multi-nacional"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="">
              <Card className="">
                <CardContent className="flex bg-gray/10 aspect-square items-center justify-center p-0">
                  <div className="w-full relative rounded-xl border border-gray-200/10  top-0 h-full">
                    <div className="flex flex-col rounded-t-xl absolute bg-gray-400 top-0 h-[40%] w-full bg-cover bg-no-repeat bg-center" style={{backgroundImage : 'url("/p3.jpg")'}}></div>
                    <div className="flex flex-col rounded-xl h-[40%] w-full"></div>
                    <div className="flex flex-col p-4">
                      <div className="w-full items-center flex justify-between">
                        <h4 className="text-lg text-black font-bold dark:text-white">Francisco Mattuzo</h4>
                        <span className="text-sm text-black font-semibold dark:text-white">52 anos</span>
                       
                        </div>
                      <span className="dark:text-gray-400 font-semibold text-sm text-gray-600" >Senior Full-stack Developer</span>
                      <p className="dark:text-gray-400 text-white-600 font-normal text-xs mt-2">"Foi uma das melhores decisões que tomei, depois que terminei o curso da LearnIT, conquistei meu certificado C1 e fui contratada por uma empresa multi-nacional"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          
          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="">
              <Card className="">
                <CardContent className="flex bg-gray/10 aspect-square items-center justify-center p-0">
                  <div className="w-full relative rounded-xl border border-gray-200/10  top-0 h-full">
                    <div className="flex flex-col rounded-t-xl absolute bg-gray-400 top-0 h-[40%] w-full bg-cover bg-no-repeat bg-center" style={{backgroundImage : 'url("/p4.jpg")'}}></div>
                    <div className="flex flex-col rounded-xl h-[40%] w-full"></div>
                    <div className="flex flex-col p-4">
                      <div className="w-full items-center flex justify-between">
                        <h4 className="text-lg text-black font-bold dark:text-white">Guilherme Lima</h4>
                        <span className="text-sm text-black font-semibold dark:text-white">23 anos</span>
                       
                        </div>
                      <span className="dark:text-gray-400 font-semibold text-sm text-gray-600" >Criador de Conteúdo</span>
                      <p className="dark:text-gray-400 text-white-600 font-normal text-xs mt-2">"Foi uma das melhores decisões que tomei, depois que terminei o curso da LearnIT, conquistei meu certificado C1 e fui contratada por uma empresa multi-nacional"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="">
              <Card className="">
                <CardContent className="flex bg-gray/10 aspect-square items-center justify-center p-0">
                  <div className="w-full relative rounded-xl border border-gray-200/10  top-0 h-full">
                    <div className="flex flex-col rounded-t-xl absolute bg-gray-400 top-0 h-[40%] w-full bg-cover bg-no-repeat bg-center" style={{backgroundImage : 'url("/p5.jpg")'}}></div>
                    <div className="flex flex-col rounded-xl h-[40%] w-full"></div>
                    <div className="flex flex-col p-4">
                      <div className="w-full items-center flex justify-between">
                        <h4 className="text-lg text-black font-bold dark:text-white">Marcela Abragão</h4>
                        <span className="text-sm text-black font-semibold dark:text-white">32 anos</span>
                       
                        </div>
                      <span className="dark:text-gray-400 font-semibold text-sm text-gray-600"> Market Leader</span>
                      <p className="dark:text-gray-400 text-white-600 font-normal text-xs mt-2">"Foi uma das melhores decisões que tomei, depois que terminei o curso da LearnIT, conquistei meu certificado C1 e fui contratada por uma empresa multi-nacional"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>


          
        
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
