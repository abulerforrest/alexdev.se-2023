import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { IPassRefs } from "../interfaces/refs/refs";
import { SECTION_TYPES, alexDevStore } from "../store/store";
import { useStore } from "zustand";
import { scrollToSection } from "../func";

const useScrollToSection = () => {
  const store = useStore(alexDevStore);
  const { setCurrentSection, refs } = store;

  let pathname = usePathname().replace("/", "");

  if (pathname === "") {
    pathname = "home";
  }

  useEffect(() => {
    const activeRef = refs && refs[pathname as keyof IPassRefs];
    switch (pathname) {
      case "home":
        setCurrentSection(SECTION_TYPES.HOME);
        break;
      case "projects":
        setCurrentSection(SECTION_TYPES.PROJECTS);
        break;
      case "code":
        setCurrentSection(SECTION_TYPES.CODE);
        break;
      case "about":
        setCurrentSection(SECTION_TYPES.ABOUT);
        break;
      case "connect":
        setCurrentSection(SECTION_TYPES.CONNECT);
        break;
    }
    scrollToSection(activeRef);
  }, [refs, pathname, setCurrentSection]);
};

export default useScrollToSection;
