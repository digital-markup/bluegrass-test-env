"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Slash, SlidersHorizontal } from "lucide-react";
import { Button } from "./ui/button";

function PagesNavigator() {
  return (
    <header className="flex md:justify-between items-center justify-end">
      <div className="w-fit px-2 hidden md:block">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="px-6">
        <Button variant="secondary" type="button">
          <p className="text-sm capitalize">filter</p>
          <SlidersHorizontal size={20} className="mr-2" />
        </Button>
      </div>
    </header>
  );
}

export default PagesNavigator;
