import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import {
  headsets,
  laptops,
  mobileRoutes,
  questVR,
  tabletRoutes,
} from "../routes";

export interface ProductRoute {
  key: string;
  path: string;
  label: string;
  isActive: boolean;
  multiple: boolean;
  children?: Array<{ path: string; label: string }>;
}

type ProductStore = {
  routes: ProductRoute[];
  setActiveRoute: (path: string) => void;
  updateRoutes: (updatedRoutes: ProductRoute[]) => void;
};

export const useRouterStore = create<ProductStore>()(
  persist(
    (set) => ({
      routes: [
        {
          key: "products-all",
          path: "/all",
          label: "All",
          isActive: false,
          multiple: false,
        },
        {
          key: "products-mobile",
          path: "/mobile",
          label: "Mobile",
          isActive: false,
          multiple: true,
          children: mobileRoutes,
        },
        {
          key: "products-tablets",
          path: "/tablets",
          label: "Tablets",
          isActive: false,
          multiple: true,
          children: tabletRoutes,
        },
        {
          key: "products-headsets",
          path: "/headsets",
          label: "Headsets",
          isActive: false,
          multiple: true,
          children: headsets,
        },
        {
          key: "products-laptops",
          path: "/laptops",
          label: "Laptops",
          isActive: false,
          multiple: true,
          children: laptops,
        },
        {
          key: "products-vr",
          path: "/vr",
          label: "Quest & VR",
          isActive: false,
          multiple: true,
          children: questVR,
        },
      ],
      setActiveRoute: (path) =>
        set((state) => ({
          routes: state.routes.map((route) => ({
            ...route,
            isActive: route.path === path,
          })),
        })),
      updateRoutes: (updatedRoutes) => set(() => ({ routes: updatedRoutes })),
    }),
    {
      name: "product-routes-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
