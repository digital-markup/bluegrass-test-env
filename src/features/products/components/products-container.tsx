/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import ItemCard from "@/features/public/components/item-card";
import PagesNavigator from "@/components/pages-navigator";
import { Product } from "../utils/interfaces/Iproduct";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import getProductsAction, {
  getAllProductsAction,
} from "../actions/getProductsAction";

function ProductsContainer() {
  const [products, setProducts] = React.useState<Product[]>([]);

  const searchParams = useSearchParams();

  const onFetch = React.useCallback((category: string, brand: string) => {
    const fetchData = async () => {
      const result = await getProductsAction({
        category,
        brand: brand || null,
      });

      return result;
    };

    fetchData().then((data) => {
      setProducts(data);
    });
  }, []);

  //  get all products
  const onFetchAll = React.useCallback(() => {
    const getAll = async () => {
      const result = await getAllProductsAction();
      return result;
    };

    getAll().then((data) => {
      setProducts(data);
    });
  }, []);

  React.useEffect(() => {
    if (searchParams.size > 0) {
      return onFetch(searchParams.get("category")!, searchParams.get("brand")!);
    }
    // else fetch all the products and set them to the state
    return onFetchAll();
  }, [onFetch, onFetchAll, searchParams]);

  return (
    <div className="w-full flex flex-col gap-y-10 md:mt-14 lg:px-10">
      {/* <PagesNavigator /> */}
      <header className="flex justify-between items-center mt-8 md:mt-0">
        <h2 className="text-lg pl-4">Products: Mobile</h2>
        <div className="px-6">
          <Button className="bg-slate-800 text-white" type="button" size={"sm"}>
            <p className="text-xs capitalize">filter</p>
            <SlidersHorizontal size={14} className="md:mr-2" />
          </Button>
        </div>
      </header>
      <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 md:px-0 px-4">
        {products.map((product) => (
          <ItemCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsContainer;
