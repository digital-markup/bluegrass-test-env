import React from "react";
import { LayoutGrid } from "lucide-react";
import Header from "@/features/public/components/header";

function BestsellerSection() {
  return (
    <div className="container mx-auto p-4 md:p-8 flex flex-col gap-y-8">
      <Header classNames="mb-6 2xl:pr-5 pt-10">
        <h2 className="lg:text-4xl font-semibold">Bestseller.</h2>
        <LayoutGrid className="h-6 w-6" />
      </Header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 pt-12">
        {/* {Array.from({ length: 8 }).map((_, index) => (
          <ItemCard key={index} />
        ))} */}
      </section>
    </div>
  );
}

export default BestsellerSection;
