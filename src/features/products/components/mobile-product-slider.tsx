/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Product } from "../utils/interfaces/Iproduct";
import {
  getProductsByBrand,
  getProductsByType,
} from "@/db/queries/getProducts.query";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
              className="data-[state=on]:bg-blue-600 data-[state=on]:text-white bg-blue-50 text-blue-500 px-7"
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
              <CarouselItem key={item.id} className="basis-auto">
                <ItemCard key={item.id} {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}

MobileProductSlider.Child = function MobileProductSliderChild({
  props,
}: {
  props: Array<{ key: string; value: string }>;
}) {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    if (props.length > 0) {
      const first = getProductsByBrand(props[0].key);
      first.then((res) => setProducts(res));
    }
  }, [props]);

  const onFetch = (value: string) => {
    setProducts([]);
    // fetch the products by type
    const fetchItems = getProductsByBrand(value);
    fetchItems.then((res) => setProducts(res));
  };
  return (
    <div>
      <ScrollArea className="h-20 w-full">
        <ToggleGroup
          type="single"
          className="flex w-max space-x-4 p-4"
          defaultValue="huawei"
        >
          {props.map((item) => (
            <ToggleGroupItem
              key={item.key}
              value={item.value}
              aria-label="Toggle huawei"
              className="data-[state=on]:bg-blue-600 data-[state=on]:text-white bg-blue-50 text-blue-500 px-7"
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
              <CarouselItem key={item.id} className="basis-auto">
                <ItemCard key={item.id} {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default MobileProductSlider;
