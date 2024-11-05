"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

function OtherInformation() {
  return (
    <div className="flex px-6 py-3 flex-col gap-y-3 mb-1">
      <section className="border rounded-lg p-4 bg-blue-50 mb-5">
        <ScrollArea className="h-[400px] px-2"></ScrollArea>
      </section>
      <div className="form-item-space flex-col mb-1">
        <section className="flex flex-col space-y-2.5 w-full">
          <Label htmlFor="displayInfo" className="text-sm text-slate-500">
            Title
          </Label>
          <Input
            type="text"
            id="title"
            placeholder="Title Information"
            className="max-w-screen-sm"
          />
        </section>
        <section className="flex flex-col space-y-2.5 w-full">
          <Label htmlFor="displayInfo" className="text-sm text-slate-500">
            Description
          </Label>
          <Textarea id="displayInfo" name="displayInfo" rows={7} />
        </section>
      </div>
    </div>
  );
}

export default OtherInformation;
