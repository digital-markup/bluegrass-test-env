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
    imgUrl: string;
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
    productDescription: string;
    category: string;
    tags: string[];
    brand: string;
    displayInfo: string;
    storage: string;
    camera: string;
    battery: string;
    colors: string[];
    ramInformation: string;
    availability: string;
    stock: number;
    compareAtPrice: boolean;
    images: ProductImage[];
    services: ProductService[];
    variants: ProductVariant[];
}