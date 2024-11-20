"use server";

import { createClient } from "@/utils/supabase/server";

const signOutAsync = async (): Promise<{ success: boolean, message: string, status?: number }> => {
    const db = createClient();

    try {
        const { error } = await db.auth.signOut();

        if (error) {
            return {
                success: false,
                message: error.message,
                status: error.status,
            };
        }

        return {
            success: true,
            message: 'Successfully signed out',
        };
    } catch (err) {
        const error = err as Error;
        return {
            success: false,
            message: error.message || 'An unexpected error occurred',
            status: 500,
        };
    }

}

export default signOutAsync