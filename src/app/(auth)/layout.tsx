import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background w-full min-h-screen">
      <div className="container mx-auto">{children}</div>
    </div>
  );
}

export default AuthLayout;
