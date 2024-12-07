"use client";

import Image from "next/image";
import React from "react";
import ProductTypeSlider from "./product-type-slider";
import { getProductsByBrand } from "@/db/queries/getProducts.query";
import ProductSlider from "./products-slider";
import { Product } from "../utils/interfaces/Iproduct";

function OtherProductsSection() {
  const [brands, setBrands] = React.useState<string>();
  const [products, setProducts] = React.useState<Product[]>([]);

  const onFetch = React.useCallback((value: string) => {
    const fetchTags = async () => {
      const fetch = await getProductsByBrand(value);
      return fetch;
    };

    return fetchTags();
  }, []);

  React.useEffect(() => {
    const data = onFetch(brands!);
    data.then((res) => setProducts(res));
  }, [brands, onFetch]);

  return (
    <div className="w-full h-full py-28">
      {/* Other mobiles section */}
      <div className="grid lg:grid-cols-[600px_1fr] grid-cols-1 gap-8 md:grid-cols-[200px_1fr] items-start">
        <header className="flex flex-col gap-y-6">
          <h2 className="text-2xl font-semibold">Other Mobile Brands</h2>
          <p className="text-lg text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            labore inventore, eaque deserunt eligendi minus sint veniam vero
            optio minima, iusto distinctio voluptatibus aliquid quod itaque
            quaerat id vel qui!
          </p>
        </header>
        <Image
          src={"/img/background-img.webp"}
          alt="img-alt"
          width={1920}
          height={1080}
          className="object-cover h-[500px] rounded-lg"
        />
      </div>
      <section className="flex flex-col gap-y-6 pt-20">
        <ProductTypeSlider setBrand={setBrands} />
        <div className="w-full flex flex-wrap gap-3">
          <ProductSlider.Brand products={products} />
        </div>
      </section>
    </div>
  );
}

export default OtherProductsSection;
