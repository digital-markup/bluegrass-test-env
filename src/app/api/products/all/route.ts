import { getProductsByParams } from "@/db/queries/products.query";
import { NextRequest, NextResponse } from "next/server";

const GET = async (req: NextRequest) => {
    try {
        const searchParams = req.nextUrl.searchParams;
        const query = Object.fromEntries(searchParams.entries());

        const response = await getProductsByParams(JSON.stringify(query));
        return NextResponse.json(response, { status: 200 });

    } catch (error) {
        console.log("[PRODUCT-POST]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

export { GET }