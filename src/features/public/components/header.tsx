"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  classNames?: string;
}

function Header({ children, classNames }: Props) {
  return (
    <div
      className={cn("flex flex-row justify-between items-center", classNames)}
    >
      {children}
    </div>
  );
}

export default Header;
