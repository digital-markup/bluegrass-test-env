"use client";

import React from "react";

interface ItemsHeaderProps {
  title: string;
  subTitle?: string;
}

function ItemsHeader({ title, subTitle }: ItemsHeaderProps) {
  return (
    <div className="space-y-3 text-center">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="font-light text-slate-500">{subTitle}</p>
    </div>
  );
}

export default ItemsHeader;
