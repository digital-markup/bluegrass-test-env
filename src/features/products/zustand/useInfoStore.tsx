import { create } from "zustand";
import { InfoStoreProps } from "../utils/interfaces/IotherInfo";
import { createJSONStorage, persist } from "zustand/middleware";

const useInfoStore = create<InfoStoreProps>()(
  persist(
    (set) => ({
      info: [],
      setInfo: (title, description) => {
        set((state) => ({
          info: [
            ...state.info,
            { id: crypto.randomUUID(), title, description },
          ],
        }));
      },
      deleteInfo: (id) => {
        set((state) => ({
          info: state.info.filter((item) => item.id !== id),
        }));
      },
      clearStore: () => {
        set({ info: [] });
      },
    }),
    {
      name: "info-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useInfoStore;
