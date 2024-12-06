/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import ItemCard from "@/features/public/components/item-card";
import PagesNavigator from "@/components/pages-navigator";
import { Product } from "../utils/interfaces/Iproduct";

function ProductsContainer() {
  const [products, setProducts] = React.useState<Product[]>([]);

  const onFetch = React.useCallback(() => {
    console.log("searchParams");
  }, []);

  React.useEffect(() => {
    onFetch();
  }, [onFetch]);

  return (
    <div className="w-full flex flex-col gap-y-10 md:mt-14 lg:px-10">
      <PagesNavigator />
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 px-6">
        {products.map((product) => (
          <ItemCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsContainer;
