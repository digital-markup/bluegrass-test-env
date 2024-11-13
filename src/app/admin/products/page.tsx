// Imports start here----
import MainForm from "@/features/products/components/main-form";
import React from "react";
// imports end here----

function ProductsPage() {
  return (
    <div className="w-full min-h-screen">
      <header className="pt-0">
        <p className="text-sm text-blue-600">Products Page</p>
        <h2 className="text-2xl capitalize font-semibold">Add new product</h2>
      </header>
      <MainForm />
    </div>
  );
}

export default ProductsPage;
