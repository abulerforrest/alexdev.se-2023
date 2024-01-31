import { MutableRefObject } from "react";
import { create } from "zustand";
import { IProject, IProjects } from "../app/data/data";

export const SECTION_TYPES = {
  HOME: "home",
  CODE: "code",
  SHOWCASE: "showcase",
  EXPERIENCES: "experiences",
  TECHNIQUES: "techniques",
  ABOUT: "about",
  CONNECT: "connect",
} as const;

export type ISections = (typeof SECTION_TYPES)[keyof typeof SECTION_TYPES];

export type IRefs = {
  home: MutableRefObject<null>;
  experiences: MutableRefObject<null>;
  techniques: MutableRefObject<null>;
  process: MutableRefObject<null>;
  play: MutableRefObject<null>;
  showcase: MutableRefObject<null>;
  code: MutableRefObject<null>;
  about: MutableRefObject<null>;
  connect: MutableRefObject<null>;
};

const sections = {
  home: "home",
  experiences: "experiences",
  techniques: "techniques",
  process: "process",
  play: "play",
  showcase: "showcase",
  code: "code",
  about: "about",
  connect: "connect",
} as const;

export type Sections = keyof typeof sections;

export interface IStore {
  loading: boolean;
  loc: string;
  refs: IRefs;
  hasMounted: boolean;
  currentRef: MutableRefObject<null>;
  currentSection: ISections;
  scrollY: number;
  darkMode: boolean;
  navOpen: boolean;
  currentProject: IProject;
  projects: IProjects;
  projectSlugs: string[];
  setLoc: (loc: string) => void;
  setLoading: (loading: boolean) => void;
  setRefs: (refs: IRefs) => void;
  setCurrentRef: (currentRef: MutableRefObject<null>) => void;
  setCurrentSection: (currentSection: ISections) => void;
  setCurrentProject: (currentProject: IProject) => void;
  setScrollY: (newScrollY: number) => void;
  setDarkMode: (state: { darkMode: boolean }) => void;
  setNavOpen: (state: { navOpen: boolean }) => void;
  setProjects: (projects: IProjects) => void;
  setHasMounted: (hasMounted: boolean) => void;
}

export const alexDevStore = create<IStore>((set) => ({
  loading: false,
  loc: "",
  refs: null!,
  currentRef: null!,
  currentSection: null!,
  scrollY: 0,
  darkMode: false,
  navOpen: false,
  projects: [],
  currentProject: null!,
  hasMounted: false,
  projectSlugs: [],
  setHasMounted: (hasMounted: boolean) => set({ hasMounted: hasMounted }),
  setRefs: (refs: IRefs) => set({ refs: refs }),
  setLoc: (loc: string) => set({ loc: loc }),
  setCurrentRef: (currentRef: MutableRefObject<null>) =>
    set({ currentRef: currentRef }),
  setCurrentSection: (currentSection: ISections) =>
    set({ currentSection: currentSection }),
  setCurrentProject: (currentProject: IProject) =>
    set({ currentProject: currentProject }),
  setScrollY: (newScrollY: number) => set({ scrollY: newScrollY }),
  setDarkMode: () =>
    set((state: { darkMode: boolean }) => ({ darkMode: !state.darkMode })),
  setNavOpen: () => set((state) => ({ navOpen: !state.navOpen })),
  setLoading: (loading: boolean) => set({ loading: loading }),
  setProjects: (projects: IProject[]) => set({ projects: projects }),
}));
