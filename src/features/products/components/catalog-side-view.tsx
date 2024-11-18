"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PanelRightClose } from "lucide-react";
import React from "react";
// both mobile and desktop side view will be here

function CatalogSideView() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"secondary"} className="">
          Catalog
          <PanelRightClose size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default CatalogSideView;
