"use client";

import React from "react";
import { useStore } from "zustand";

import Top from "../../../src/components/templates/Top";
import Presentation from "./Presentation";
import Experiences from "./Experiences";
import Techniques from "./Techniques";
import Play from "./Play";
import Process from "./Process";
import Projects from "./Projects";
import Code from "./Code";
import About from "./About";
import Connect from "./Connect";
import Footer from "./Footer";
import { alexDevStore } from "../../../src/store/store";

interface IHome {}

const Home = (_props: IHome) => {
  const { darkMode, refs } = useStore(alexDevStore);

  return (
    <main ref={refs?.home} className={`${darkMode ? "dark" : ""}`}>
      <section className='transition-all duration-300 bg-bone-white dark:bg-retro-black'>
        <section>
          <Top />
        </section>
        <section className='relative z-10'>
          <Presentation />
        </section>
        <section ref={refs?.experiences}>
          <Experiences />
        </section>
        <section ref={refs?.techniques}>
          <Techniques />
        </section>
        <section ref={refs?.process}>
          <Process nextRef={refs?.play} />
        </section>
        <section ref={refs?.play}>
          <Play />
        </section>
        <section ref={refs?.projects}>
          <Projects />
        </section>
        <section ref={refs?.code}>
          <Code />
        </section>
        <section ref={refs?.about}>
          <About />
        </section>
        <section ref={refs?.connect}>
          <Connect />
        </section>
        <section>
          <Footer />
        </section>
      </section>
    </main>
  );
};

export default Home;
