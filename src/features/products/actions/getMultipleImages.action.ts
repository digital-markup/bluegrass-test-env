import { getS3ObjectService } from "@/services/s3BucketService";
import { Product, ProductImage, ProductVariant } from "../utils/interfaces/Iproduct";

// get images per single product
const getProductImages = async (product: Product) => {
    // const productJson = JSON.parse(JSON.stringify(product));

    try {
        // get main product images
        if (product.images.length > 0) {
            await Promise.allSettled(product.images.map(async (image: ProductImage) => {
                const img = await getS3ObjectService(image.id);
                image.id = img.url;
            }));
        }
        // get variant images from the store
        if (product.variants) {
            await Promise.allSettled(
                product.variants.map(async (variant: ProductVariant) => {
                    const img = await getS3ObjectService(variant.imgUrl);
                    variant.imgUrl = img.url;
                })
            );
        }

        return product;

    } catch (error) {
        console.log("[GET-PRODUCT-IMAGES]", error);
        throw new Error("Error fetching images" + error);
    }
}

export { getProductImages };