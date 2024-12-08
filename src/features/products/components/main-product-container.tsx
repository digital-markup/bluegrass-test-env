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
import MainProductHeader from "./main-product-header";

interface MainProductContainerProps {
  images: Array<string>;
  stock: number;
  title: string;
}

function MainProductContainer({
  images,
  title,
  stock,
}: MainProductContainerProps) {
  console.log(images);
  return (
    <div className="flex flex-col gap-y-8">
      {/* side product information */}
      <MainProductHeader stock={stock} title={title} className="md:hidden" />
      <div className="w-full h-full lg:py-6 lg:px-12 px-4">
        <Carousel>
          <CarouselContent>
            {images.map((url, idx: number) => (
              <CarouselItem key={idx}>
                <Image
                  src={url}
                  alt="main-image"
                  width={1920}
                  height={1080}
                  className="md:object-cover md:h-[590px] rounded-md"
                  placeholder="blur"
                  blurDataURL={url}
                  decoding="async"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default MainProductContainer;
