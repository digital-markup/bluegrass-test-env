import { IconNode } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, TrendingUp } from "lucide-react";

interface FlipCardProps {
  title: string;
  icon: IconNode;
  content: string;
  subContent: string;
}

function FlipCard() {
  return (
    <>
      <Card className="lg:w-[260px] xl:min-w-[280px] h-auto">
        <CardHeader className="w-full flex flex-row justify-between items-end">
          <CardTitle className="text-sm font-normal text-slate-500">
            Resent Products
          </CardTitle>
          <Package className="w-6 h-6 text-slate-500" strokeWidth={1} />
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-y-2 w-full h-full pt-1">
            <h2 className="text-5xl font-medium">10</h2>
            <span className="flex gap-x-2 items-center">
              <TrendingUp className="w-5 h-5 text-red-500" />
              <p className="text-sm text-slate-500">+5 items added last week</p>
            </span>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default FlipCard;
