"use client";

import SelectContentWrapper from "@/components/select-content-wrapper";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import React from "react";

function OrganizationSection() {
  return (
    <div className="form-body">
      <div className="form-item-space flex-col">
        <section className="flex flex-row justify-between w-full">
          <div className="flex flex-col gap-y-1">
            <Label htmlFor="brand" className="text-sm text-slate-500">
              Brand
            </Label>
            <Select>
              <SelectContentWrapper placeholder="Select Brand" />
            </Select>
          </div>
          <div className="flex flex-col gap-y-1">
            <Label htmlFor="category" className="text-sm text-slate-500">
              Category
            </Label>
            <Select>
              <SelectContentWrapper placeholder="Select Category" />
            </Select>
          </div>
        </section>
        <section className="flex flex-col space-y-5 w-full">
          <div className="flex flex-col gap-y-1 mb-4">
            <Label htmlFor="category" className="text-sm text-slate-500">
              Category
            </Label>
            <Select>
              <SelectContentWrapper placeholder="Select Category" />
            </Select>
          </div>
        </section>
      </div>
    </div>
  );
}

export default OrganizationSection;
