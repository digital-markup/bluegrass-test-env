/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import TypeScrollBar from "@/components/types-scrollbar";
import ProductsContainer from "@/features/products/components/products-container";
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
    <div className="w-full min-h-screen">
      <div className="flex flex-col gap-y-4 py-12 w-full">
        <TypeScrollBar params={data}/>
        <div className="container mx-auto">
          {/* Product container goes here */}
          <ProductsContainer />
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
