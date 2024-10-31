"use server";

import { revalidatePath } from "next/cache";
import { SignInUser } from "../auth.types";
import signInAsync from "../query/sign-in-async";
import { redirect } from "next/navigation";

// sign in action

const loginAction = async (emailAddress: string, password: string) => {
    const credentials: SignInUser = { email: emailAddress, password };
    const response = await signInAsync(credentials);

    if (!response.success) {
        return response;
    }

    revalidatePath("/sign-in");
    redirect("/admin/dashboard");

};
export default loginAction;