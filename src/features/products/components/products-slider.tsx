"use client";
import {
  Carousel as BaseCarousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import { Product } from "../utils/interfaces/Iproduct";
import { getProductsByType } from "@/db/queries/getProducts.query";
import ItemCard from "@/features/public/components/item-card";

interface ProductSliderProps {
  productType: string;
}

function ProductSlider({ productType }: ProductSliderProps) {
  const [items, setItems] = React.useState<Product[]>([]);

  const onFetch = React.useCallback(() => {
    const fetchTags = async () => {
      const fetch = await getProductsByType(productType);
      return fetch;
    };

    return fetchTags();
  }, [productType]);

  React.useEffect(() => {
    const data = onFetch();
    data.then((res) => {
      setItems(res);
    });
  }, [onFetch]);
  return (
    <div className="w-full h-full">
      <BaseCarousel>
        <CarouselContent>
          {items.map((item, idx) => (
            <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/4">
              <ItemCard key={item.id} {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </BaseCarousel>
    </div>
  );
}

export default ProductSlider;
