import { usePathname } from "next/navigation";
import { useEffect } from "react";
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

  // if (refs.showcase.current) {
  //   (refs.showcase!.current as any).scrollTop = 0;
  //   scrollToSection(refs.showcase);
  // }

  useEffect(() => {
    const activeRef = refs && refs[pathname as keyof typeof refs];
    switch (pathname) {
      case "home":
        setCurrentSection(SECTION_TYPES.HOME);
        break;
      case "showcase":
        setCurrentSection(SECTION_TYPES.SHOWCASE);
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
