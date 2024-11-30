"use client";
import React from "react";

interface ItemsStorageProps {
  title: string;
}

function ItemsStorage({ title }: ItemsStorageProps) {
  return (
    <span className="flex flex-col w-full items-start justify-center gap-2 border px-4 py-3 rounded-lg">
      <h2 className="font-semibold text-2xl">{title}</h2>
      <p className="text-slate-400 text-xs">
        You can choose the amount of storage
      </p>
    </span>
  );
}

export default ItemsStorage;
