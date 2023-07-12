import { MutableRefObject } from "react";
import { create } from "zustand";
import { IProject } from "../app/data/data";

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
interface IRefs {
  home: MutableRefObject<null>;
  experiences: MutableRefObject<null>;
  techniques: MutableRefObject<null>;
  process: MutableRefObject<null>;
  play: MutableRefObject<null>;
  projects: MutableRefObject<null>;
  code: MutableRefObject<null>;
  about: MutableRefObject<null>;
  connect: MutableRefObject<null>;
}

export interface IStore {
  loading: boolean;
  loc: string;
  refs: IRefs;
  currentRef: MutableRefObject<null>;
  currentSection: ISections;
  scrollY: number;
  darkMode: boolean;
  navOpen: boolean;
  projects: IProject[];
  setLoc: (loc: string) => void;
  setLoading: (loading: boolean) => void;
  setRefs: (refs: IRefs) => void;
  setCurrentRef: (currentRef: MutableRefObject<null>) => void;
  setCurrentSection: (currentSection: ISections) => void;
  setScrollY: (newScrollY: number) => void;
  setDarkMode: (state: { darkMode: boolean }) => void;
  setNavOpen: (state: { navOpen: boolean }) => void;
  setProjects: (projects: IProject[]) => void;
}

export const alexDevStore = create<IStore>((set) => ({
  loading: true,
  loc: "",
  refs: null!,
  currentRef: null!,
  currentSection: null!,
  scrollY: 0,
  darkMode: false,
  navOpen: false,
  projects: [],

  setRefs: (refs: IRefs) => set({ refs: refs }),
  setLoc: (loc: string) => set({ loc: loc }),
  setCurrentRef: (currentRef: MutableRefObject<null>) =>
    set({ currentRef: currentRef }),
  setCurrentSection: (currentSection: ISections) =>
    set({ currentSection: currentSection }),
  setScrollY: (newScrollY: number) => set({ scrollY: newScrollY }),
  setDarkMode: () =>
    set((state: { darkMode: boolean }) => ({ darkMode: !state.darkMode })),
  setNavOpen: () => set((state) => ({ navOpen: !state.navOpen })),
  setLoading: (loading: boolean) => set({ loading: loading }),
  setProjects: (projects: IProject[]) => set({ projects: projects }),
}));
