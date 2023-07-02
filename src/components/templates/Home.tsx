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
import dynamic from "next/dynamic";
import { IPassRefs } from "../../interfaces/refs/refs";
import { usePathname } from "next/navigation";
import LoadingSpinner from "../atoms/LoadingSpinner";

export default function Home() {
  const initRefs = {
    home: useRef(null),
    code: useRef(null),
    projects: useRef(null),
    about: useRef(null),
    connect: useRef(null),
  };

  const pathname = usePathname().replace("/", "");
  const currentRef: MutableRefObject<any> =
    initRefs[pathname as keyof IPassRefs];

  const { darkMode, setCurrentSection, setScrollY } = useStore(alexDevStore);

  useEffect(() => {
    let section: ISections = SECTION_TYPES.HOME;
    if (pathname === "home") {
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
  }, [pathname]);

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
      <main className='transition-all duration-300 bg-bone-white dark:bg-retro-black'>
        <div ref={initRefs.home}>
          <Top passRefs={initRefs} />
        </div>
        <div className='relative overflow-hidden z-[10]'>
          <Presentation />
          <Experiences />
          <Techniques />
          <Process />
          <Play />
          <div ref={initRefs.projects}>
            <Projects />
          </div>
          <div ref={initRefs.code}>
            <Code />
          </div>
          <div ref={initRefs.about}>
            <About />
          </div>
          <div ref={initRefs.connect}>
            <Connect passRefs={initRefs} />
          </div>
          <Footer passRefs={initRefs} />
        </div>
      </main>
    </div>
  );
}
