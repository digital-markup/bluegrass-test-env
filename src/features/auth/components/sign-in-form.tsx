"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import formSchema from "../auth-validation";

function SignInForm() {
  // Form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (formData: z.infer<typeof formSchema>) => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-input">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          {...register("emailAddress")}
          placeholder="jhon@example.com"
          className={
            errors.emailAddress ? "form-control form-error" : "form-control"
          }
        />
        {errors.emailAddress && (
          <p className="text-red-500">{errors.emailAddress.message}</p>
        )}
      </div>
      <div className="form-input">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register("password")}
          className={
            errors.password ? "form-control form-error" : "form-control"
          }
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>
      <div className="pt-2">
        <button type="submit" className="btn-primary">
          Login
        </button>
      </div>
    </form>
  );
}

export default SignInForm;
