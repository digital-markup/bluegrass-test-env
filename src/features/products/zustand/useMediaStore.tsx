import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface ImageStoreProps {
  imgUrl: string;
  setImgUrl: (url: string) => void;
  deleteImgUrl: () => void;
  clearStore: () => void;
}

export const useImageStore = create<ImageStoreProps>()(
  persist(
    (set) => ({
      imgUrl: "",
      setImgUrl: (url: string) => set({ imgUrl: url }),
      deleteImgUrl: () => set({ imgUrl: "" }),
      clearStore: () => set({ imgUrl: "" }),
    }),
    {
      name: "main-image-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
