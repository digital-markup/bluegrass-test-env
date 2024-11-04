"use client";
import React from "react";
import Logo from "./logo";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="h-full border-r-[1.25px] overflow-y-auto bg-white shadow-sm flex flex-col">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full gap-3 px-4">
        <div className="flex flex-col gap-y-2 py-4 border-b-[1.25px] w-full">
          <p className="text-xs font-semibold capitalize pl-4 pb-3 text-slate-500">
            overview
          </p>
          <span className="py-2 px-4 hover:bg-slate-100">
            <Link href="/admin/dashboard">Dashboard</Link>
          </span>
          <span className="py-2 px-4 hover:bg-slate-100">
            <Link href="/admin/analytics">Analytics</Link>
          </span>
        </div>
        <div className="flex flex-col gap-y-2 py-4 border-b-[1.25px] w-full">
          <p className="text-xs font-semibold capitalize pl-4 pb-3 text-slate-500">
            Content management
          </p>
          <span className="py-2 px-4 hover:bg-slate-100">
            <Link href="/admin/posts">Posts</Link>
          </span>
          <span className="py-2 px-4 hover:bg-slate-100">
            <Link href="/admin/products">Products</Link>
          </span>
          <span className="py-2 px-4 hover:bg-slate-100">
            <Link href="/admin/categories">Categories</Link>
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full flex-1 justify-end px-4">
        <section>
          <div className="flex flex-col gap-y-2 py-4 border-b-[1.25px] w-full">
            <p className="text-xs font-semibold capitalize pl-4 pb-3 text-slate-500">
              Account
            </p>
            <span className="py-2 px-4 hover:bg-slate-100">
              <Link href="/admin/account">Account</Link>
            </span>
            <span className="py-2 px-4 hover:bg-slate-100">
              <Link href="/admin/settings">Settings</Link>
            </span>
            <span className="py-2 px-4 hover:bg-red-100">
              <div className="cursor-pointer capitalize text-red-500">logout</div>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Sidebar;
