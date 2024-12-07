/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { publicRoutes } from "@/features/public/routes";

interface SidebarMobileProps {
  color: string;
  className?: string;
}

function SidebarMobile({ color, className }: SidebarMobileProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </SheetTrigger>
        <SheetContent side={"top"} className={cn(color, "h-screen w-full")}>
          <div className="w-full h-full px-4 pt-8">
            <ul className="flex flex-col gap-y-4 justify-start items-start">
              {publicRoutes.map((route) => (
                <li key={route.path}>
                  <Link href={route.path} onClick={() => setIsOpen(false)}>
                    <p className="text-slate-800 text-2xl font-medium">
                      {route.label}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default SidebarMobile;
