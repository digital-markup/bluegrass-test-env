/* eslint-disable @typescript-eslint/no-explicit-any */
import Logo from "@/features/admin/components/logo";
import CatalogSideView from "@/features/products/components/catalog-side-view";
import CatalogHorizontalView from "@/features/products/components/items-horizontal-view";
import SidebarMobile from "@/features/products/components/sidebar-mobile";
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
    <div className="w-full min-h-screen lg:hidden">
      {/* Mobile first design */}
      <nav className="w-full h-12 px-4 flex justify-between items-center shadow-md fixed z-50">
        <Logo />
        <ul className="flex gap-x-3">
          <li>
            <Link href="/search">
              <Search className="w-5 h-5" />
            </Link>
          </li>
          <li>
            <Link href="/user">
              <User2 className="w-5 h-5" />
            </Link>
          </li>
          <li>
            <SidebarMobile color="bg-white" />
          </li>
        </ul>
      </nav>
      <header className="pt-20 px-4 w-full flex flex-col gap-y-1">
        <h2 className="text-xl font-semibold text-slate-700">Products</h2>
        <div className="flex flex-row gap-x-2 py-3 items-center">
          <CatalogSideView />
          <CatalogHorizontalView />
        </div>
      </header>
      {/* Create the complete mobile nav bar */}
      {/* Create a left side sidebar for categories navigation */}
      {/* Create a clickable badges to display the products */}
      {/* Display none on tablet & large screens */}
    </div>
  );
}

export default ProductsPage;
