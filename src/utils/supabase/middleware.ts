
import publicRoutes from "@/shared/routes";
import { createServerClient } from "@supabase/ssr";
import { NextRequest, NextResponse } from "next/server";

export const updateSession = async (request: NextRequest) => {
    let nextResponse = NextResponse.next({
        request
    });

    const serverClient = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
        cookies: {
            getAll() {
                return request.cookies.getAll();
            },
            setAll(cookies) {
                cookies.forEach((cookie) => request.cookies.set(cookie.name, cookie.value));
                nextResponse = NextResponse.next({ request });
                cookies.forEach((cookie) => nextResponse.cookies.set(cookie.name, cookie.value, cookie.options));
            }
        }
    });

    // get loggin user
    const { data: { user } } = await serverClient.auth.getUser();
    const isPublicPath = publicRoutes.some(route =>
        request.nextUrl.pathname.startsWith(route)
    );

    if (!user && !isPublicPath) {

        // redirect to sign in
        const url = request.nextUrl.clone();
        url.pathname = "/sign-in";

        return NextResponse.redirect(url);
    }

    return nextResponse;
}