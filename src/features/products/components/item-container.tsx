/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import ProductSlider from "./products-slider";
import { BrandType } from "../utils/enum";
import { productRoutes } from "@/shared/routes";

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
  const [tabs, setTabs] = React.useState<any[]>([]);

  const mount = React.useMemo(() => {
    switch (routes) {
      case BrandType.APPLE:
        setTabs(productRoutes[0].values);
        break;
      case BrandType.SAMSUNG:
        setTabs(productRoutes[1].values);
        break;
    }
  }, [routes]);
  return (
    <div className="my-10 hidden md:block">
      {tabs.length > 0 && (
        <Tabs key={tabs[0].key} defaultValue={tabs[0].key} className="w-full">
          <TabsList className="w-full">
            {tabs.map((item: any) => (
              <TabsTrigger key={item.key} value={item.key}>
                {item.value}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((item: any) => (
            <TabsContent key={item.key} value={item.key}>
              <ProductSlider productType={item.key} />
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  );
}

export { ItemContainer, ContainerHeader, ContainerContent, ProductContainer };
