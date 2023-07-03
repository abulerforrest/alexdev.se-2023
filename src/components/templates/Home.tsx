"use client";

import "../../../styles/globals.css";
import { MutableRefObject, useEffect, useRef } from "react";
import { useStore } from "zustand";

import Top from "../../../src/components/templates/Top";

import Presentation from "./Presentation";
import Experiences from "./Experiences";

// const Techniques = dynamic(() => import("./Techniques"), {
//   ssr: false,
//   loading: () => <LoadingSpinner />,
// });

// const Play = dynamic(() => import("./Play"), {
//   ssr: false,
// });

import Techniques from "./Techniques";
import Play from "./Play";
import Process from "./Process";
import Projects from "./Projects";
import Code from "./Code";
import About from "./About";
import Connect from "./Connect";
import Footer from "./Footer";

import {
  ISections,
  SECTION_TYPES,
  alexDevStore,
} from "../../../src/store/store";

import React from "react";
import { IPassRefs } from "../../interfaces/refs/refs";
import { usePathname } from "next/navigation";

export default function Home() {
  const initRefs = {
    home: useRef(null),
    experiences: useRef(null),
    techniques: useRef(null),
    process: useRef(null),
    play: useRef(null),
    projects: useRef(null),
    code: useRef(null),
    about: useRef(null),
    connect: useRef(null),
  };

  const pathname = usePathname()!.replace("/", "");
  const currentRef: MutableRefObject<any> =
    initRefs[pathname as keyof IPassRefs];

  const { darkMode, setCurrentSection, setScrollY } = useStore(alexDevStore);

  useEffect(() => {
    let section: ISections = SECTION_TYPES.HOME;
    if (pathname === "") {
      section = SECTION_TYPES.HOME;
    } else if (pathname === "code") {
      section = SECTION_TYPES.CODE;
    } else if (pathname === "projects") {
      section = SECTION_TYPES.PROJECTS;
    } else if (pathname === "about") {
      section = SECTION_TYPES.ABOUT;
    } else if (pathname === "connect") {
      section = SECTION_TYPES.CONNECT;
    }

    setCurrentSection(section);
    if (currentRef && currentRef.current) {
      currentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname, currentRef, setCurrentSection]);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [setScrollY]);

  return (
    <main className={`${darkMode ? "dark" : ""}`}>
      <section className='transition-all duration-300 bg-bone-white dark:bg-retro-black'>
        <section ref={initRefs.home}>
          <Top passRefs={initRefs} />
        </section>
        <section className='relative overflow-hidden z-[10]'>
          <Presentation passRefs={initRefs} />
          <section ref={initRefs.experiences}>
            <Experiences passRefs={initRefs} />
          </section>
          <section ref={initRefs.techniques}>
            <Techniques />
          </section>
          <section ref={initRefs.process}>
            <Process nextRef={initRefs.play} />
          </section>
          <section ref={initRefs.play}>
            <Play />
          </section>
          <section ref={initRefs.projects}>
            <Projects />
          </section>
          <section ref={initRefs.code}>
            <Code />
          </section>
          <section ref={initRefs.about}>
            <About />
          </section>
          <section ref={initRefs.connect}>
            <Connect passRefs={initRefs} />
          </section>
          <Footer passRefs={initRefs} />
        </section>
      </section>
    </main>
  );
}
