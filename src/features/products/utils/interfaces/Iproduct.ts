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