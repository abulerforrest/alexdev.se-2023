import { usePathname } from "next/navigation";
import { MutableRefObject, useEffect } from "react";
import { IPassRefs } from "../interfaces/refs/refs";
import { ISections, SECTION_TYPES, alexDevStore } from "../store/store";
import { useStore } from "zustand";

const useScrollToSection = () => {
  const store = useStore(alexDevStore);
  const { refs, setCurrentSection, setCurrentRef } = store;

  const pathname = usePathname()!.replace("/", "");
  const currentRef: MutableRefObject<null> =
    refs && refs[pathname as keyof IPassRefs];

  useEffect(() => {
    let section: ISections = SECTION_TYPES.HOME;
    if (pathname === "") {
      section = SECTION_TYPES.HOME;
    } else if (pathname === "code") {
      section = SECTION_TYPES.CODE;
    } else if (pathname.includes("projects")) {
      section = SECTION_TYPES.PROJECTS;
    } else if (pathname === "about") {
      section = SECTION_TYPES.ABOUT;
    } else if (pathname === "connect") {
      section = SECTION_TYPES.CONNECT;
    }

    setCurrentSection(section);
    setCurrentRef(currentRef);

    if (currentRef && currentRef.current) {
      (currentRef.current as any).scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname, currentRef, setCurrentSection]);

  return [currentRef];
};

export default useScrollToSection;
