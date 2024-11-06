import { defineConfig } from 'drizzle-kit';

const url: string = process.env.DATABASE_URL!;

export default defineConfig({
    schema: './src/db/schema.ts',
    out: './src/utils/supabase/migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: url,
    },
    verbose: true,
    strict: true,
});
