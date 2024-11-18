"use client";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import React from "react";
import { routes } from "../routes";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function CatalogHorizontalView() {
  const route = useRouter();

  // get the route and pass the data
  const navigate = (path: string) => {
    route.push(path);
  };
  return (
    <ScrollArea className="w-max h-12 px-2">
      <div className="w-max flex flex-row gap-x-4 overflow-hidden items-center">
        {routes.map((route, index) => (
          <Button
            key={index}
            variant="outline"
            className="border border-blue-500 text-xs 
            text-blue-600 px-4 focus-within:bg-blue-500
             focus-within:text-white hover:bg-blue-500
              hover:text-white rounded-lg py-1 h-10"
            onClick={() => navigate(route.path)}
          >
            {route.label}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

export default CatalogHorizontalView;
