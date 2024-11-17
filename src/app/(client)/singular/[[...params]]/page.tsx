import MainProductContainer from "@/features/products/components/main-product-container";
import MainProductHeader from "@/features/products/components/main-product-header";
import ProductColorPicker from "@/features/products/components/product-color-picker";
import ProductDescription from "@/features/products/components/product-description";
import ProductInfoTabs from "@/features/products/components/product-info-tabs";
import React from "react";

function SingularPage() {
  return (
    <div className="w-full min-h-screen px-6">
      <nav></nav>
      <div className="container mx-auto">
        <div className="w-full grid lg:grid-cols-[1fr_430px] lg:gap-x-6 gap-4 mt-12">
          <div className="lg:sticky top-8 lg:h-screen overflow-auto">
            <div className="flex flex-col gap-y-4">
              {/* main product layout */}
              <MainProductContainer />
            </div>
          </div>
          <div className="flex flex-col gap-y-6 lg:py-12">
            {/* product information with less information */}
            <MainProductHeader />
            <ProductDescription />
            <ProductColorPicker />
          </div>
        </div>
        <div className="w-full h-full px-12">
          <ProductInfoTabs />
        </div>
      </div>
    </div>
  );
}

export default SingularPage;
