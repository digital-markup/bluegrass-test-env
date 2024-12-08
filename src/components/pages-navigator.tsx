/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { useRouter } from "next/navigation";

interface PagesNavigatorProps {
  title?: string;
  previousLink: string;
  children?: React.ReactNode;
}

function PagesNavigator({
  children,
  title,
}: PagesNavigatorProps) {
  const router = useRouter();

  const onNavigateBack = () => {
    router.back();
  };

  return (
    <header className="flex md:justify-between items-center justify-end">
      <div className="w-fit px-2 hidden md:block">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Button variant="link" asChild onClick={onNavigateBack}>
                Previous
              </Button>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="px-6">
        {/* <Button variant="secondary" type="button">
          <p className="text-sm capitalize">filter</p>
          <SlidersHorizontal size={20} className="mr-2" />
        </Button> */}
        {children}
      </div>
    </header>
  );
}

export default PagesNavigator;
