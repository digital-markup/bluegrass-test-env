import Logo from "@/features/admin/components/logo";
import CatalogSideView from "@/features/products/components/catalog-side-view";
import CatalogHorizontalView from "@/features/products/components/items-horizontal-view";
import ProductsSidebar from "@/features/products/components/products-sidebar";
import SidebarMobile from "@/features/products/components/sidebar-mobile";
import Navbar from "@/features/public/components/navbar";
import { Search, User2 } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";

function ProductsPage() {
  return (
    <div className="w-full min-h-screen">
      {/* Mobile first design */}
      <div className="lg:hidden">
        <nav className="w-full h-12 py-8 px-4 flex justify-between items-center shadow-md fixed z-50 bg-white">
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
        <header className="pt-24 px-4 w-full flex flex-col gap-y-1">
          <h2 className="text-xl font-semibold text-slate-700">Products</h2>
          <div className="flex flex-row gap-x-2 py-3 items-center">
            <CatalogSideView />
            <CatalogHorizontalView />
          </div>
        </header>
      </div>
      <div className="w-full h-full lg:grid lg:grid-cols-[320px_1fr] gap-x-6">
        <div className="hidden lg:flex">
          <Navbar className="text-slate-700" />
          <Suspense>
            <ProductsSidebar />
          </Suspense>
        </div>
        <div className="flex flex-col gap-y-4 py-12 w-full">
          <div className="container mx-auto">
            {/* Product container goes here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
