"use client";

import { useStore } from "zustand";
import useScrollToSection from "../../hooks/useScrollToSection";
import Top from "./Top";
import { alexDevStore } from "../../store/store";

interface IProject {
  params: { slug: string };
}

const Project = (props: IProject) => {
  const { params } = props;
  const store = useStore(alexDevStore);
  const { darkMode } = store;

  console.log(darkMode);

  useScrollToSection();
  return (
    <>
      <main className={`${darkMode ? "dark" : ""}`}>
        <section className='transition-all duration-300 bg-bone-white dark:bg-retro-black'>
          <section className='bg-commodore-64-grey dark:bg-dark-mode-feel w-full h-screen'>
            <Top logoStyle='LIGHT' invertColors />
          </section>
        </section>
      </main>
    </>
  );
};

export default Project;
