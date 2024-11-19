"use client";
import {
  Carousel as BaseCarousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ItemCard from "@/features/public/components/item-card";
import React from "react";

interface ProductSliderProps {
  productType: string;
}

function ProductSlider({ productType }: ProductSliderProps) {
  console.log(productType);
  return (
    <div className="w-full h-full">
      <BaseCarousel>
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <ItemCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <ItemCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <ItemCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <ItemCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <ItemCard />
          </CarouselItem>
        </CarouselContent>
      </BaseCarousel>
    </div>
  );
}

export default ProductSlider;
