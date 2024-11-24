import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { createClient } from "@/utils/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";

const client = postgres(process.env.DATABASE_URL!);

// supabase rpc client
export const getSupabaseClient = (): SupabaseClient => {
    return createClient();
};

export const db = drizzle({ client });