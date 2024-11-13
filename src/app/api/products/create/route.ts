import { createProduct } from "@/db/queries/products.query";
import { NextRequest, NextResponse } from "next/server";

const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();
        if (!body) {
            return new NextResponse("No body", { status: 400 });
        }
        const result = await createProduct(body);

        if(!result) {
            return new NextResponse(result, { status: 400 });
        }

        return NextResponse.json(result, { status: 200 });

    } catch (error) {
        console.log("[PRODUCT-POST]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

export { POST }