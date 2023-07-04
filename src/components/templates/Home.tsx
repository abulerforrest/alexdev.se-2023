"use client";

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

import React from "react";

interface IHome {}

const Home = (props: IHome) => {
  const { darkMode, refs } = useStore(alexDevStore);

  return (
    <main className={`${darkMode ? "dark" : ""}`}>
      <section className='transition-all duration-300 bg-bone-white dark:bg-retro-black'>
        <section ref={refs?.home}>
          <Top logoStyle='DARK' />
        </section>
        <section className='relative overflow-hidden z-[10]'>
          <Presentation />
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
          <Footer />
        </section>
      </section>
    </main>
  );
};
export default Home;
