"use client";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { LucideBox } from "lucide-react";
import React from "react";

interface MainProductHeaderProps {
  title: string;
  stock: number;
  className?: string;
}

function MainProductHeader({
  stock,
  title,
  className,
}: MainProductHeaderProps) {
  return (
    <header className={cn("flex flex-col gap-y-6 pb-6 w-full", className)}>
      <h2 className="text-4xl font-semibold text-end">{title}</h2>
      <div className="border-y border-slate-400 flex w-full flex-row justify-end items-center">
        <div className="flex flex-row gap-x-3 py-6 items-center">
          <p className="text-sm text-slate-500">
            90% Positive Reviews from Customers
          </p>
          <Badge
            variant={"default"}
            className="bg-blue-200 text-blue-500 hover:bg-blue-300 hover:text-blue-700 w-fit gap-x-1"
          >
            <LucideBox className="w-4 h-4" />
            {stock} in stock
          </Badge>
        </div>
      </div>
    </header>
  );
}

export default MainProductHeader;
