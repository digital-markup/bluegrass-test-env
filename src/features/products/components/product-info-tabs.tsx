"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

function ProductInfoTabs() {
  return (
    <Tabs defaultValue="additionalInfo" className="w-full hidden md:block">
      <TabsList className="flex flex-row justify-evenly">
        <TabsTrigger value="additionalInfo">Additional Information</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
        <TabsTrigger value="compare">Compare</TabsTrigger>
        <TabsTrigger value="relatedProducts">Related Products</TabsTrigger>
      </TabsList>
      <TabsContent value="additionalInfo">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio vel
          quasi eligendi, perspiciatis, facilis quos non nobis quibusdam
          asperiores cupiditate amet explicabo. Ullam molestiae dolor,
          blanditiis temporibus labore laborum inventore.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio vel
          quasi eligendi, perspiciatis, facilis quos non nobis quibusdam
          asperiores cupiditate amet explicabo. Ullam molestiae dolor,
          blanditiis temporibus labore laborum inventore.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio vel
          quasi eligendi, perspiciatis, facilis quos non nobis quibusdam
          asperiores cupiditate amet explicabo. Ullam molestiae dolor,
          blanditiis temporibus labore laborum inventore.
        </p>
      </TabsContent>
      <TabsContent value="reviews">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          repudiandae, similique rem veniam nulla consequuntur optio nobis
          laborum id numquam, est impedit ex suscipit iure quam illo saepe aut
          officia.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          repudiandae, similique rem veniam nulla consequuntur optio nobis
          laborum id numquam, est impedit ex suscipit iure quam illo saepe aut
          officia.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          repudiandae, similique rem veniam nulla consequuntur optio nobis
          laborum id numquam, est impedit ex suscipit iure quam illo saepe aut
          officia.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          repudiandae, similique rem veniam nulla consequuntur optio nobis
          laborum id numquam, est impedit ex suscipit iure quam illo saepe aut
          officia.
        </p>
      </TabsContent>
      <TabsContent value="compare">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio vel
          quasi eligendi, perspiciatis, facilis quos non nobis quibusdam
          asperiores cupiditate amet explicabo. Ullam molestiae dolor,
          blanditiis temporibus labore laborum inventore.
        </p>
      </TabsContent>
      <TabsContent value="relatedProducts">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio vel
          quasi eligendi, perspiciatis, facilis quos non nobis quibusdam
          asperiores cupiditate amet explicabo. Ullam molestiae dolor,
          blanditiis temporibus labore laborum inventore.
        </p>
      </TabsContent>
    </Tabs>
  );
}

export default ProductInfoTabs;
