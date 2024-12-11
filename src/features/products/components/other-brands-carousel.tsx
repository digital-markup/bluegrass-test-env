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
import { ProductCardSkeleton } from "@/components/product-card-skeleton";

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
          {products.length > 0
            ? products.map((item, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/4">
                  <ItemCard key={item.id} {...item} />
                </CarouselItem>
              ))
            : [...Array(5)].map((_, i) => (
                <section key={i} className="mx-2 my-8 w-full">
                  <ProductCardSkeleton />
                </section>
              ))}
        </CarouselContent>
      </BaseCarousel>
    </div>
  );
}

export default OtherBrandCarousel;
