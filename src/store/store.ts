import { MutableRefObject } from "react";
import { create } from "zustand";

export const SECTION_TYPES = {
  HOME: "home",
  CODE: "code",
  PROJECTS: "projects",
  EXPERIENCES: "experiences",
  TECHNIQUES: "techniques",
  ABOUT: "about",
  CONNECT: "connect",
} as const;

export type ISections = (typeof SECTION_TYPES)[keyof typeof SECTION_TYPES];

export interface IStore {
  currentRef: MutableRefObject<null>;
  currentSection: ISections;
  scrollY: number;
  darkMode: boolean;
  navOpen: boolean;
  setCurrentRef: (currentRef: MutableRefObject<null>) => void;
  setCurrentSection: (currentSection: ISections) => void;
  setScrollY: (newScrollY: number) => void;
  setDarkMode: (state: { darkMode: boolean }) => void;
  setNavOpen: (state: { navOpen: boolean }) => void;
}

export const alexDevStore = create<IStore>((set) => ({
  currentRef: null!,
  currentSection: null!,
  scrollY: 0,
  darkMode: false,
  navOpen: false,

  setCurrentRef: (currentRef: MutableRefObject<null>) =>
    set({ currentRef: currentRef }),
  setCurrentSection: (currentSection: ISections) =>
    set({ currentSection: currentSection }),
  setScrollY: (newScrollY: number) => set({ scrollY: newScrollY }),
  setDarkMode: () =>
    set((state: { darkMode: boolean }) => ({ darkMode: !state.darkMode })),
  setNavOpen: () => set((state) => ({ navOpen: !state.navOpen })),
}));
