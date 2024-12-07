/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Product } from "../utils/interfaces/Iproduct";
import { getProductsByType } from "@/db/queries/getProducts.query";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ItemCard from "@/features/public/components/item-card";

interface MobileProductSliderProps {
  props: Array<{ key: string; value: string }>;
}

function MobileProductSlider({ props }: MobileProductSliderProps) {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const first = getProductsByType(props[0].key);
    first.then((res) => setProducts(res));
  }, [props]);

  const onFetch = (value: string) => {
    setProducts([]);
    // fetch the products by type
    const fetchItems = getProductsByType(value);
    fetchItems.then((res) => setProducts(res));
  };
  return (
    <>
      <ScrollArea className="h-20 w-full">
        <ToggleGroup
          type="single"
          className="flex w-max space-x-4 p-4"
          defaultValue="iphone"
        >
          {props.map((item) => (
            <ToggleGroupItem
              key={item.key}
              value={item.value}
              aria-label="Toggle iphone"
              className="data-[state=on]:bg-blue-600 data-[state=on]:text-white"
              onClick={() => onFetch(item.key)}
            >
              <span className="text-sm font-medium">{item.value}</span>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="mt-4">
        <Carousel>
          <CarouselContent>
            {products.map((item: any) => (
              <CarouselItem key={item.id} className="basis-1/2">
                <ItemCard key={item.id} {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}

export default MobileProductSlider;
