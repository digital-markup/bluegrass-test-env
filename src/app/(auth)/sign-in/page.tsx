import SignInForm from "@/features/auth/components/sign-in-form";
import React from "react";

function SignInPage() {
  return (
    <div className="grid grid-cols-[1fr_480px] w-full h-screen">
      <div></div>
      <div className="flex justify-start items-center py-3 mx-3">
        <div className="px-8 w-full flex flex-col gap-y-4 sm:gap-y-8">
          <header className="text-center">
            <h2 className="text-slate-800 font-bold text-3xl">Welcome back</h2>
            <p className="font-medium text-slate-500">
              Login to your account & continue
            </p>
          </header>
          <SignInForm />
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
