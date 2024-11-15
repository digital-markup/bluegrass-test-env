import ContactUs from "@/features/products/components/contact-us";
import MainProductContainer from "@/features/products/components/main-product-container";
import MainProductDetails from "@/features/products/components/main-product-details";
import MainProductHeader from "@/features/products/components/main-product-header";
import ProductInfoTabs from "@/features/products/components/product-info-tabs";
import ServicesContainer from "@/features/products/components/service-container";
import React from "react";

function SingleProductPage() {
  return (
    <div className="w-full min-h-screen px-6">
      {/* Breadcrumb nav*/}
      <div className="container mx-auto">
        <div className="w-full grid lg:grid-cols-[1fr_430px] gap-x-5 gap-4 mt-12">
          <div className="lg:sticky top-8 lg:h-screen overflow-auto">
            <div className="flex flex-col gap-y-4">
              {/* main product layout */}
              <MainProductContainer />
            </div>
          </div>
          <div className="flex flex-col gap-y-6 lg:py-12">
            {/* side product information */}
            <MainProductHeader />
            <MainProductDetails />
            <ServicesContainer />
            <ContactUs />
          </div>
        </div>
        <div className="flex flex-col w-full h-full pl-12">
          {/* Tabs with additional information */}
          <div className="flex flex-row w-full justify-evenly items-center mt-20">
            <ProductInfoTabs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;
