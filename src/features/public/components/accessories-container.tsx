/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Header from "./header";
import { ItemContainer } from "@/features/products/components/item-container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductSlider from "@/features/products/components/products-slider";
import { productRoutes } from "@/shared/routes";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import MobileProductSlider from "@/features/products/components/mobile-product-slider";

interface AccessoriesContainerProps {
  routes: string;
}

function AccessoriesContainer({ routes }: AccessoriesContainerProps) {
  const [tabs, setTabs] = React.useState<any[]>([]);

  const mount = React.useMemo(() => {
    const routerList = productRoutes.find((item) => item.key === routes);
    if (routerList) {
      setTabs(routerList.values);
    }
  }, [routes]);

  return (
    <div className="w-full h-full">
      <div className="container mx-auto p-4 md:p-8 hidden md:block">
        <Header classNames="mb-6 2xl:pr-5 pt-10 flex-col gap-y-2 justify-start items-start">
          <h2 className="lg:text-4xl font-semibold">Accessories.</h2>
          <p>Other accessories are listed here</p>
        </Header>
        {/* Accessories go here */}
        <ItemContainer>
          <div className="my-10 hidden md:block">
            {tabs.length > 0 && (
              <Tabs
                key={tabs[0].key}
                defaultValue={tabs[0].key}
                className="w-full"
              >
                <TabsList className="w-full gap-x-4">
                  {tabs.map((item: any) => (
                    <TabsTrigger
                      key={item.key}
                      value={item.key}
                      className="data-[state=active]:bg-white text-black"
                    >
                      {item.value}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {tabs.map((item: any) => (
                  <TabsContent key={item.key} value={item.key}>
                    <ProductSlider.Accessories productType={item.key} />
                  </TabsContent>
                ))}
              </Tabs>
            )}
          </div>
        </ItemContainer>
      </div>
      <div className="md:hidden px-4 py-6 flex flex-col gap-y-6">
        <Header classNames="mb-6 2xl:pr-5 pt-10 flex-col gap-y-2 md:justify-start md:items-start justify-center items-center">
          <h2 className="lg:text-4xl font-semibold text-2xl">Accessories.</h2>
          <p className="font-light text-slate-500">Other accessories are listed here</p>
        </Header>
        <MobileProductSlider props={tabs} />
      </div>
    </div>
  );
}
export default AccessoriesContainer;
