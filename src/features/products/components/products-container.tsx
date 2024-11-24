"use client";

import React from "react";
import ItemCard from "@/features/public/components/item-card";
import PagesNavigator from "@/components/pages-navigator";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { InsertProduct } from "@/db/schema";

function ProductsContainer() {
  const [products, setProducts] = React.useState<InsertProduct[]>([]);

  const searchParams = useSearchParams();

  const onFetch = React.useCallback(() => {
    const fetchAll = async () => {
      // get all values from the search params
      const allParams = Object.fromEntries(searchParams.entries());

      const response = await axios.get("/api/products/all", {
        params: allParams,
      });

      setProducts(response.data);
    };

    fetchAll();
  }, [searchParams]);

  React.useEffect(() => {
    onFetch();
  }, [onFetch]);

  return (
    <div className="w-full flex flex-col gap-y-10 md:mt-14 px-10">
      <PagesNavigator />
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 px-6">
        {products.map((product) => (
          <ItemCard key={product.id} id={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsContainer;
