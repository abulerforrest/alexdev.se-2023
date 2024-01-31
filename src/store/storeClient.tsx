"use client";
import { usePathname } from "next/navigation";
import { createRef, useEffect, useRef } from "react";
import { scrollToSection } from "../func";
import useScrollPos from "../hooks/useScrollPos";
import useScrollToSection from "../hooks/useScrollToSection";
import { IRefs, alexDevStore } from "./store";
import { DocumentData } from "firebase/firestore";

function StoreClient({ projects }: { projects: DocumentData[] }) {
  const hasMounted = alexDevStore.getState().hasMounted;

  let pathname = usePathname().replace("/", "");

  const refs = {
    home: createRef(),
    showcase: createRef(),
    code: createRef(),
    about: createRef(),
    connect: createRef(),
    techniques: createRef(),
    process: createRef(),
    play: createRef(),
    experiences: createRef(),
  };

  useScrollPos();
  useScrollToSection();

  useEffect(() => {
    if (hasMounted) {
      if (pathname === "") {
        pathname = "home";
      }
      scrollToSection(
        alexDevStore.getState().refs[pathname as keyof typeof refs]
      );
    }
  }, [hasMounted, scrollToSection]);

  const initialized = useRef(false);
  if (!initialized.current) {
    const fetchedProjects: DocumentData[] = [];
    Promise.resolve(projects).then((pr) => {
      pr.forEach((p) => {
        fetchedProjects.push(JSON.parse(p.value));
      });

      alexDevStore.setState({
        projects: fetchedProjects,
        refs: refs as IRefs,
      });
    });
    initialized.current = true;
  }
  return null;
}

export default StoreClient;
