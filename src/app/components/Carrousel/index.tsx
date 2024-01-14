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
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">oioi</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">oioi</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">oioi</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">oioi</span>
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
