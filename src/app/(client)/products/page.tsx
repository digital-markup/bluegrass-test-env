/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

function ProductsPage({
  params,
  searchParams,
}: {
  params: string;
  searchParams: any;
}) {
  console.log({ searchParams, params });
  return <div>ProductsPage</div>;
}

export default ProductsPage;
