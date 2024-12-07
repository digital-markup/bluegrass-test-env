"use client";
import React from "react";
import { LayoutGrid } from "lucide-react";
import Header from "@/features/public/components/header";
import { Product } from "@/features/products/utils/interfaces/Iproduct";
import getProductByQuery from "@/db/queries/getProducts.query";
import ItemCard from "./item-card";

function BestsellerSection() {
  const [items, setItems] = React.useState<Product[]>([]);

  const onFetch = React.useCallback(() => {
    const fetchTags = async () => {
      const fetch = await getProductByQuery(["bestseller"]);
      return fetch;
    };

    return fetchTags();
  }, []);

  React.useEffect(() => {
    const data = onFetch();
    data.then((res) => setItems(res));
  }, [onFetch]);

  return (
    <div className="container mx-auto p-4 md:p-8 flex flex-col gap-y-8">
      <Header classNames="md:mb-6 2xl:pr-5 pt-10">
        <h2 className="lg:text-4xl text-2xl font-semibold">Bestseller.</h2>
        <LayoutGrid className="h-6 w-6" />
      </Header>
      <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 md:pt-12 lg:px-20">
        {items.map((item) => (
          <ItemCard key={item.id} {...item} />
        ))}
      </section>
    </div>
  );
}

export default BestsellerSection;
