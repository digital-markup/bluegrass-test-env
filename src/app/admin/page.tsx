import { redirect } from "next/navigation";
import React from "react";

function AdminPage() {
  redirect("/admin/dashboard");
  return (
    <div className="grid grid-cols-[1fr_480px] w-full h-screen">
      <p>redirecting...</p>
    </div>
  );
}

export default AdminPage;
