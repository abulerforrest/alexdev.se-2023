"use client";

import { createRef, useEffect } from "react";
import useScrollToSection from "../hooks/useScrollToSection";
import { useStore } from "zustand";
import { alexDevStore } from "../store/store";
import { IProject, getAllProjects } from "./data/data";
import useScrollPos from "../hooks/useScrollPos";

async function getProjects(): Promise<IProject[]> {
  const res = await getAllProjects();
  return res;
}

const MainFrame = () => {
  const { setRefs, setProjects, projects } = useStore(alexDevStore);

  useEffect(() => {
    if (projects.length === 0) {
      const getAllProjects = async () => {
        setProjects(await getProjects());
      };
      getAllProjects().catch(console.error);
    }
  }, [setProjects, projects]);

  useEffect(() => {
    setRefs({
      home: createRef(),
      projects: createRef(),
      code: createRef(),
      about: createRef(),
      connect: createRef(),
      techniques: createRef(),
      process: createRef(),
      play: createRef(),
      experiences: createRef(),
    });
  }, [setRefs]);

  useScrollToSection();
  useScrollPos();
  return <></>;
};

export default MainFrame;
