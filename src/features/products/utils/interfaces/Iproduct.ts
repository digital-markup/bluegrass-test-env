/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ImageStoreProps {
    imgUrl: string | string[];
    setImgUrl: (url: string) => void;
    deleteImgUrl: () => void;
    clearStore: () => void;
}

export interface ImageVariantProps {
    props: Array<{ id: string; imgUrl: string; variant: string }>;
    setProperty: (url: string, variant: string) => void;
    deleteProperty: (id: string) => void;
    clearStore: () => void;
}

export interface ColorStore {
    selectedColors: string[];
    setSelectedColors: (colors: string[]) => void;
}

export interface TagsStore {
    selectedTags: string[];
    setSelectedTags: (tags: string[]) => void;
}

export interface ProductImage {
    id: string;
    large: string;
    small: string
}

export interface ProductVariant {
    id: string;
    imgUrl: string;
    variant: string;
}

export interface ProductService {
    id: string;
    title: string;
    description: string;
}

export interface Product {
    id: string;
    title: string;
    sku: string;
    product_description: string;
    category: string;
    tags: string[];
    brand: string;
    display_info: string;
    storage: string[];
    camera: string;
    battery: string;
    colors: string[];
    ram_information: string;
    availability: string;
    additional_information: any;
    stock: number;
    compare_at_price: boolean;
    images: ProductImage[];
    services: ProductService[];
    variants: ProductVariant[];
}