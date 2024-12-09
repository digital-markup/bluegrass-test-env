/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";

interface ColorPickerProps {
  colors: string[];
}

function ColorPicker() {
  return (
    <div className="flex gap-2 flex-wrap justify-center">
      <Badge className="w-2 h-2 p-0 bg-black hover:bg-current" variant={"secondary"}></Badge>
      <Badge className="w-2 h-2 p-0 bg-black" variant={"secondary"}></Badge>
      <Badge className="w-2 h-2 p-0 bg-black" variant={"secondary"}></Badge>
      <Badge className="w-2 h-2 p-0 bg-black" variant={"secondary"}></Badge>
    </div>
  );
}

export default ColorPicker;
