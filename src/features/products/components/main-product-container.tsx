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

interface MainProductContainerProps {
  images: Array<{ id: string; imgUrl: string }>;
}

function MainProductContainer({ images }: MainProductContainerProps) {
  return (
    <div className="w-full h-full py-6 px-12">
      <Carousel>
        <CarouselContent>
          {images.map(({ id, imgUrl }) => (
            <CarouselItem key={id}>
              <Image
                src={imgUrl}
                alt="main-image"
                width={1920}
                height={1080}
                className="md:object-cover h-[590px] rounded-md"
                placeholder="blur"
                blurDataURL={imgUrl}
                decoding="async"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default MainProductContainer;
