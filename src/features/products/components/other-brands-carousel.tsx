"use client";

import { getProductsByBrand } from "@/db/queries/getProducts.query";
import React from "react";
import { Product } from "../utils/interfaces/Iproduct";
import {
  Carousel as BaseCarousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ItemCard from "@/features/public/components/item-card";

interface OtherBrandCarouselProps {
  props: string;
}

function OtherBrandCarousel({ props }: OtherBrandCarouselProps) {
  const [products, setProducts] = React.useState<Product[]>([]);

  const onFetch = React.useCallback(() => {
    const getBrands = async () => {
      const fetch = await getProductsByBrand(props);
      return fetch;
    };

    const response = getBrands();
    response.then((res) => setProducts(res));
  }, [props]);

  React.useEffect(() => {
    onFetch();
  }, [onFetch]);

  return (
    <div className="w-full h-full">
      <BaseCarousel>
        <CarouselContent>
          {products.map((item, idx) => (
            <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/4">
              <ItemCard key={item.id} {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </BaseCarousel>
    </div>
  );
}

export default OtherBrandCarousel;
