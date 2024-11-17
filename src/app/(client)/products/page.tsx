/* eslint-disable @typescript-eslint/no-explicit-any */
import Logo from "@/features/admin/components/logo";
import { Search, User2 } from "lucide-react";
import Link from "next/link";
import React from "react";

function ProductsPage({
  params,
  searchParams,
}: {
  params: string;
  searchParams: any;
}) {
  console.log({ searchParams, params });
  return (
    <div className="w-full min-h-screen">
      {/* Mobile first design */}
      <nav className="w-full h-12 px-4 flex justify-between items-center">
        <Logo />
        <ul className="flex gap-x-3">
          <li>
            <Link href="/search">
              <Search className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link href="/user">
              <User2 className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <SidebarMobile />
          </li>
        </ul>
      </nav>
      {/* Create the complete mobile nav bar */}
      {/* Create a left side sidebar for categories navigation */}
      {/* Create a clickable badges to display the products */}
      {/* Display none on tablet & large screens */}
    </div>
  );
}

export default ProductsPage;
