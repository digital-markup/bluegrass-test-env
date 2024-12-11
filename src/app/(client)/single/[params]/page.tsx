/* eslint-disable @typescript-eslint/no-explicit-any */
import Footer from "@/components/footer";
import PagesNavigator from "@/components/pages-navigator";
import { Separator } from "@/components/ui/separator";
import getProductById from "@/features/products/actions/getProductById.action";
import ContactUs from "@/features/products/components/contact-us";
import MainProductContainer from "@/features/products/components/main-product-container";
import MainProductDetails from "@/features/products/components/main-product-details";
import MainProductHeader from "@/features/products/components/main-product-header";
import ProductInfoTabs from "@/features/products/components/product-info-tabs";
import ReviewsPanel from "@/features/products/components/reviews-panel";
import ServicesContainer from "@/features/products/components/service-container";
import React from "react";

interface SingleProductPageParams {
  params: { params: string };
}

async function SingleProductPage({
  params: { params },
}: SingleProductPageParams) {
  // call the function from API
  const product = await getProductById(params);

  return (
    <div className="w-full min-h-screen">
      {/* Breadcrumb nav*/}
      <PagesNavigator previousLink="/products" title={product.title} />
      <div className="container mx-auto px-6">
        <div className="w-full grid lg:grid-cols-[1fr_430px] gap-x-5 gap-4 my-12">
          <div className="lg:sticky top-8 lg:h-screen overflow-auto">
            <div className="flex flex-col gap-y-4">
              {/* main product layout */}
              <MainProductContainer
                images={product.images}
                stock={product.stock}
                title={product.title}
              />
              <ServicesContainer />
              <ContactUs />
            </div>
          </div>
          <div className="flex flex-col gap-y-6 lg:py-12">
            {/* side product information */}
            <MainProductHeader
              stock={product.stock}
              title={product.title}
              className="hidden md:flex"
            />
            <MainProductDetails
              battery={product.battery}
              camera={product.camera}
              colors={product.colors}
              displayInfo={product.display_info}
              ramInformation={product.ram_information}
              storage={product.storage}
            />
          </div>
        </div>
        <div className="flex flex-col w-full h-full md:pl-12 px-3">
          {/* Tabs with additional information */}
          <div className="flex flex-row w-full justify-evenly items-center mt-20">
            <ProductInfoTabs
              description={product.product_description}
              additionalInfo={product.additional_information}
            />
          </div>
          {/* mobile tabs */}
          <div className="flex flex-col gap-y-4 py-5 md:hidden">
            <header>
              <h2 className="font-bold text-2xl">Additional Information</h2>
            </header>
            <section className="mb-8">
              <p className="font-light">{product.product_description}</p>
            </section>
            <div className="w-full h-full flex flex-col gap-6">
              {product.additional_information.map((info: any, idx: number) => (
                <div key={idx} className="flex flex-col gap-4 px-0 items-start">
                  <h2 className="font-bold text-xl">{info.title}</h2>
                  {/* {info.description.map((item: any, idx: number) => (
                    <p key={idx} className="text-slate-500">
                      {item}
                    </p>
                  ))} */}
                </div>
              ))}
            </div>
            <Separator className="my-4" />
            <header>
              <h2 className="font-bold text-2xl">Reviews</h2>
            </header>
            <div className="flex flex-col gap-y-6 py-10">
              <ReviewsPanel />
              <ReviewsPanel />
              <ReviewsPanel />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SingleProductPage;
