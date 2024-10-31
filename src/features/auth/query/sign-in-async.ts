"use server";

import { createClient } from "@/utils/supabase/server";
import { SignInUser } from "../auth.types";

const signInAsync = async (values: SignInUser) => {
    const db = createClient();
    const { error } = await db.auth.signInWithPassword(values);

    if (error) {
        return {
            success: false,
            message: error.message,
            status: error.status
        }
    }

    return {
        success: true,
        message: "Successful",
        status: 200
    }


};

export default signInAsync