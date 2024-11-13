import { create } from "zustand";
import { ColorStore, TagsStore } from "../utils/interfaces/Iproduct";

export const useColorStore = create<ColorStore>((set) => ({
  selectedColors: [],
  setSelectedColors: (colors) => set({ selectedColors: colors }),
}));

export const useTagsStore = create<TagsStore>((set) => ({
  selectedTags: [],
  setSelectedTags: (tags) => set({ selectedTags: tags }),
}));
