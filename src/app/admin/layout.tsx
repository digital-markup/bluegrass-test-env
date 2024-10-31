import Sidebar from "@/features/admin/components/sidebar";
import authentication from "@/shared/permission/user-permission";
import { redirect } from "next/navigation";
import React from "react";

async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await authentication();

  if (!user) {
    redirect("/sign-in");
  }
  
  return (
    <div className="bg-slate-50 w-full min-h-screen">
      <div className="hidden md:flex w-72 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <div className="md:pl-72">
        <div className="container mx-auto p-4">
          <div className="xl:px-10 px-0">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
