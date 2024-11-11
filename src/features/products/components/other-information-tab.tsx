"use client";

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import React from "react";

interface OtherInformationTabProps {
  title: string;
  description: string;
  id: string;
  onDelete: (id: string) => void;
}

function OtherInformationTab({
  id,
  title,
  description,
  onDelete,
}: OtherInformationTabProps) {
  return (
    <div className="w-full flex justify-between bg-blue-100/50 px-4 py-6 rounded-lg border border-blue-300 mb-4 transition-all">
      <div className="flex flex-col gap-y-0.5">
        <h2 className="font-semibold">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
      <Button
        type="button"
        variant={"ghost"}
        size={"icon"}
        className="text-red-400 hover:text-red-600"
        onClick={() => onDelete(id)}
      >
        <Trash size={20} />
      </Button>
    </div>
  );
}

export default OtherInformationTab;
