/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const stores: Record<string, any> = {};

export interface ImageStoreProps {
  imgUrl: string | string[];
  setImgUrl: (url: string) => void;
  deleteImgUrl: () => void;
  clearStore: () => void;
}

interface ImageVariantProps {
  props: Array<{ id: string; imgUrl: string; variant: string }>;
  setProperty: (url: string, variant: string) => void;
  deleteProperty: (id: string) => void;
  clearStore: () => void;
}

export const useImageUpload = (key: string) => {
  if (!stores[key]) {
    stores[key] = create<ImageStoreProps>()(
      persist(
        (set) => ({
          imgUrl: "",
          setImgUrl: (url: string) => set({ imgUrl: url }),
          deleteImgUrl: () => set({ imgUrl: "" }),
          clearStore: () => set({ imgUrl: "" }),
        }),
        {
          name: key,
          storage: createJSONStorage(() => sessionStorage),
        }
      )
    );
  }

  return stores[key];
};

export const useImageVariantsStore = create<ImageVariantProps>()(
  persist(
    (set) => ({
      props: [],
      setProperty: (url: string, variant: string) =>
        set((state) => ({
          props: [
            ...state.props,
            {
              id: crypto.randomUUID(), // Generate a unique ID for each new item
              imgUrl: url,
              variant,
            },
          ],
        })),
      deleteProperty: (id: string) =>
        set((state) => ({
          props: state.props.filter((item) => item.id !== id),
        })),
      clearStore: () => set({ props: [] }),
    }),
    {
      name: "img-variant-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
