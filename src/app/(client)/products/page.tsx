/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import TypeScrollBar from "@/components/types-scrollbar";
import ProductsContainer from "@/features/products/components/products-container";
import Navbar from "@/features/public/components/navbar";
import React from "react";

function ProductsPage({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  const { category: data } = searchParams;
  return (
    <main className="w-full min-h-screen">
      <Navbar slug="products" className="text-slate-800" />
      <div className="flex flex-col gap-y-4 py-12 w-full">
        <TypeScrollBar params={data} />
        <div className="container mx-auto">
          {/* Product container goes here */}
          <ProductsContainer />
        </div>
      </div>
    </main>
  );
}

export default ProductsPage;
