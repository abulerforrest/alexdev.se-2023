import PageHead from "../src/components/atoms/Head";
import Top from "../src/components/templates/Top";
import Presentation from "../src/components/templates/Presentation";
import Experiences from "../src/components/templates/Experiences";
import Techniques from "../src/components/templates/Techniques";
import Process from "../src/components/templates/Process";
import Play from "../src/components/templates/Play";
import Code from "../src/components/templates/Code";

import { useStore } from "zustand";
import Projects from "../src/components/templates/Projects";
import About from "../src/components/templates/About";
import Connect from "../src/components/templates/Connect";
import Footer from "../src/components/templates/Footer";
import { MutableRefObject, useEffect, useRef } from "react";

export interface IPassRefs {
  passRefs: {
    homeRef: MutableRefObject<null>;
    codeRef: MutableRefObject<null>;
    projectsRef: MutableRefObject<null>;
    aboutRef: MutableRefObject<null>;
    connectRef: MutableRefObject<null>;
  };
}

export const scrollTo = (ref: MutableRefObject<null>) =>
  (ref.current as any)?.scrollIntoView({
    behavior: "smooth",
  });

export default function Home() {
  const { darkMode, scrollY, setScrollY } = useStore(alexDevStore);

  const initRefs = {
    homeRef: useRef(null),
    codeRef: useRef(null),
    projectsRef: useRef(null),
    aboutRef: useRef(null),
    connectRef: useRef(null),
  };

  const onScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <PageHead />
      <main className='transition-all duration-300 bg-bone-white dark:bg-retro-black'>
        <div ref={initRefs.homeRef}>
          <Top passRefs={initRefs} />
        </div>
        <div className='relative overflow-hidden z-[10]'>
          <Presentation />
          <Experiences />
          <Techniques />
          <Process />
          <Play />
          <div ref={initRefs.codeRef}>
            <Code />
          </div>
          <div ref={initRefs.projectsRef}>
            <Projects />
          </div>
          <div ref={initRefs.aboutRef}>
            <About />
          </div>
          <div ref={initRefs.connectRef}>
            <Connect passRefs={initRefs} />
          </div>
          <Footer passRefs={initRefs} />
        </div>
      </main>
    </div>
  );
}
