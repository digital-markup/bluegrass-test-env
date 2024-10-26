"use client";

import React from "react";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface SelectContentWrapperProps {
  placeholder: string;
}

function SelectContentWrapper({ placeholder }: SelectContentWrapperProps) {
  return (
    <>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </>
  );
}

export default SelectContentWrapper;
