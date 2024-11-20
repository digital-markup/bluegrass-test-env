"use server";

import { revalidatePath } from "next/cache";
import { SignInUser } from "../auth.types";
import signInAsync from "../query/sign-in-async";
import { redirect } from "next/navigation";
import signOutAsync from "../query/sign-out-async";

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

const logoutAction = async () => {
    const response = await signOutAsync();

    if (!response.success) {
        return response.message;
    }

    revalidatePath("/dashboard");
    redirect("/sign-in");
};

export { logoutAction };
export default loginAction;