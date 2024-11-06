"use client";

import React from "react";
import ProductMediaUpload from "./product-media-uploader";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function ProductInfoFormSection() {
  return (
    <div className="flex px-6 py-4 flex-col gap-y-3 mb-1 border-b">
      <div className="form-item-space">
        <section className="flex flex-col space-y-2 w-full">
          <Label htmlFor="title" className="text-sm text-slate-500 font-medium">
            Title
          </Label>
          <Input type="text" id="title" name="title" placeholder="Product Title" />
        </section>
        <section className="flex flex-col space-y-2">
          <Label htmlFor="SKU" className="text-sm text-slate-500 font-medium">
            SKU
          </Label>
          <Input type="text" id="title" name="SKU" placeholder="Product SKU" />
        </section>
      </div>
      <div className="w-full h-full flex flex-col space-y-2 mb-4">
        <Label htmlFor="title" className="text-sm text-slate-500 font-medium">
          Product Images
        </Label>
        <ProductMediaUpload />
      </div>
      <div className="form-item-space">
        <section className="flex flex-col space-y-2 w-full">
          <Label
            htmlFor="description"
            className="text-sm text-slate-500 font-medium"
          >
            Product Description
          </Label>
          <Textarea id="description" className="form-control" rows={7} />
        </section>
      </div>
    </div>
  );
}

export default ProductInfoFormSection;
