import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export const createClient = () => {
    // setup cookies
    const store = cookies();

    return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
        cookies: {
            getAll() {
                return store.getAll()
            },
            setAll(cookies) {
                try {
                    cookies.forEach((cookie) => {
                        store.set(cookie.name, cookie.value, cookie.options)
                    });
                } catch {
                    console.error("Failed to set cookie")
                }
            }
        }
    })
}