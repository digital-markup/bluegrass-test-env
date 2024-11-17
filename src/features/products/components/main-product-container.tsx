"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

function MainProductContainer() {
  return (
    <div className="w-full h-full py-6 px-12">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Image
              src={"/img/main.webp"}
              alt="main-image"
              width={1920}
              height={1080}
              className="md:object-cover h-[590px] rounded-md"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={"/img/second.webp"}
              alt="main-image"
              width={1920}
              height={1080}
              className="object-cover h-[590px]"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={"/img/back-top.webp"}
              alt="main-image"
              width={1920}
              height={1080}
              className="object-cover h-[590px]"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={"/img/back-bottom.webp"}
              alt="main-image"
              width={1920}
              height={1080}
              className="object-cover h-[590px]"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default MainProductContainer;
