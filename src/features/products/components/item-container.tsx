/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import ProductSlider from "./products-slider";

interface BaseContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

interface ContainerNavbarProps {
  routes: any;
}

function ItemContainer({ children }: BaseContainerProps) {
  return (
    <div className="py-6 px-0 w-full h-full flex flex-col">{children}</div>
  );
}

function ContainerHeader({ children }: BaseContainerProps) {
  return (
    <div className="w-full h-full flex flex-col gap-y-2 items-center">
      {children}
    </div>
  );
}

function ContainerContent({ children }: BaseContainerProps) {
  return <div className="w-full h-full">{children}</div>;
}

function ProductContainer({ routes }: ContainerNavbarProps) {
  console.log(routes);
  return (
    <div className="my-10">
      <Tabs defaultValue="tab1" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          <TabsTrigger value="tab4">Tab 4</TabsTrigger>
          <TabsTrigger value="tab5">Tab 5</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <ProductSlider productType="iphone" />
        </TabsContent>
        <TabsContent value="tab2">
          <ProductSlider productType="macbook" />
        </TabsContent>
        <TabsContent value="tab3">
          <ProductSlider productType="ipad" />
        </TabsContent>
        <TabsContent value="tab4">
          <ProductSlider productType="watch" />
        </TabsContent>
        <TabsContent value="tab5">
          <ProductSlider productType="vision-pro" />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export { ItemContainer, ContainerHeader, ContainerContent, ProductContainer };
