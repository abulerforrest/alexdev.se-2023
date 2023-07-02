import { create } from "zustand";

export const SECTION_TYPES = {
  HOME: "home",
  CODE: "code",
  PROJECTS: "projects",
  ABOUT: "about",
  CONNECT: "connect",
} as const;

export type ISections = (typeof SECTION_TYPES)[keyof typeof SECTION_TYPES];

export interface IStore {
  currentSection: ISections;
  scrollY: number;
  darkMode: boolean;
  navOpen: boolean;

  setCurrentSection: (currentSection: ISections) => void;
  setScrollY: (newScrollY: number) => void;
  setDarkMode: (state: { darkMode: boolean }) => void;
  setNavOpen: (state: { navOpen: boolean }) => void;
}

export const alexDevStore = create<IStore>((set) => ({
  currentSection: null!,
  scrollY: 0,
  darkMode: false,
  navOpen: false,

  setCurrentSection: (currentSection: ISections) =>
    set({ currentSection: currentSection }),
  setScrollY: (newScrollY: number) => set({ scrollY: newScrollY }),
  setDarkMode: () =>
    set((state: { darkMode: boolean }) => ({ darkMode: !state.darkMode })),
  setNavOpen: () => set((state) => ({ navOpen: !state.navOpen })),
}));
