"use client";

import { useStore } from "zustand";
import Image from "next/image";
import Top from "./Top";
import { SECTION_TYPES, alexDevStore } from "../../store/store";
import { useRef, useEffect, useState } from "react";
import WebIllustration from "../../../public/static/web-illustration-test.png";
import ArrowNextSection from "../atoms/ArrowNextSection";
import ActionButton from "../atoms/ActionButton";
import { IoIosRocket } from "react-icons/io";
import { ImGithub } from "react-icons/im";
import HeadingSmashingProject from "../atoms/HeadingSmashingProject";
import { scrollToSection } from "../../func";

interface IProject {
  params: { slug: string };
}

const Project = (props: IProject) => {
  const { params } = props;
  const store = useStore(alexDevStore);
  const { darkMode, setCurrentSection, setCurrentRef, refs } = store;

  const [fade, setFade] = useState(false);
  const backgroundRef = useRef(null);
  const screensRef = useRef(null);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <>
      <main className={`${darkMode ? "dark" : ""}`}>
        <section className='transition-all duration-300 bg-bone-white dark:bg-retro-black'>
          <section
            className={`transition-all duration-200 ${
              fade && "bg-commodore-64-grey"
            } ease-in dark:bg-commodore-64-grey w-full min-h-fit`}
          >
            <Top invertColors={fade} />
            <div className='flex justify-center items-center p-8 sm:py-12 md:py-16 lg:p-20'>
              <div className='grid grid-cols-1 xl:grid-cols-2 md:grid-cols-1 gap-8'>
                <div className='order-1 md:order-1 lg:order-none xl:order-none grid grid-flow-column h-min w-full gap-8'>
                  <div className='uppercase font-kabel font-black text-bone-white text-project-page-heading-sm sm:text-project-page-heading-sm md:text-project-page-heading-md xl:text-project-page-heading-xl'></div>
                  <div className='order-2 font-eurostile text-project-page-text-sm md:text-project-page-text-md xl:text-project-page-text-xl text-bone-white max-w-2xl'>
                    I&apos;m a full-stack software developer with a passion for
                    creating smart and responsive web solutions. My portfolio
                    showcases my expertise in coding and creativity, from sleek
                    websites to innovative applications. Let&apos;s connect and
                    explore how I can help bring your ideas to life!
                  </div>
                  <div className='order-last'>
                    <div className='flex gap-8'>
                      <span>
                        <ActionButton
                          className='flex select-none items-center justify-center uppercase lg:px-9 md:px-7 px-6 lg:h-[68px] md:h-[54px] h-[48px] rounded-[200px] bg-bone-white dark:bg-bone-white text-commodore-64-grey dark:text-exotic-fanta font-kabel font-black text-button-sm md:text-button-md lg:text-button-xl'
                          text='Launch'
                          icon={
                            <IoIosRocket
                              className={`lg:text-[30px] md:text-[22px] text-[20px] ml-1.5 text-commodore-64-grey dark:text-exotic-fanta`}
                            />
                          }
                          //{process.env.NEXT_ALEX_RESUME_URL}
                          href=''
                        />
                      </span>
                      <span
                        style={{
                          filter:
                            "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.20))",
                        }}
                      >
                        <ActionButton
                          text='Github'
                          className='flex select-none items-center justify-center uppercase lg:px-9 md:px-7 px-6 lg:h-[68px] md:h-[54px] h-[48px] rounded-[200px] bg-retro-black dark:bg-exotic-fanta text-bone-white dark:text-bone-white font-kabel font-black text-button-sm md:text-button-md lg:text-button-xl'
                          icon={
                            <ImGithub
                              className={`lg:text-[30px] md:text-[30px] text-[24px] ml-1.5 text-bone-white dark:text-bone-white`}
                            />
                          }
                          href='mailto:alex@alexdev.se'
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className='flex items-center'>
                  <Image
                    className={`transition-all duration-1000 delay-300 ${
                      fade
                        ? "opacity-1 translate-y-0"
                        : "opacity-0 translate-y-12"
                    } rounded-xl h-min w-full aspect-video object-contain`}
                    src={WebIllustration}
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center w-full py-10 md:py-20'>
              <ArrowNextSection
                onClick={(event) => {
                  event.preventDefault();
                  setCurrentRef(refs?.projects);
                  setCurrentSection(SECTION_TYPES.PROJECTS);
                  scrollToSection(backgroundRef);
                }}
                inverted={darkMode}
              />
            </div>
          </section>
          <div className='flex justify-center items-center w-full py-10 md:py-20'>
            <div className='m-10 md:m-20' ref={backgroundRef}>
              <div className='select-none mb-10 justify-center flex font-kabel font-black text-retro-black dark:text-bone-white text-project-background-heading-sm md:text-project-background-heading-md xl:text-project-background-heading-xl'>
                A Brief Background
              </div>
              <div className='mx-2 sm:mx-28 md:mx-32 font-eurostile text-project-page-text-sm md:text-project-page-text-md xl:text-project-page-text-xl text-retro-black dark:text-bone-white max-w-4xl'>
                I&apos;m a full-stack software developer with a passion for
                creating smart and responsive web solutions. My portfolio
                showcases my expertise in coding and creativity, from sleek
                websites to innovative applications. Let&apos;s connect and
                explore how I can help bring your ideas to life!
              </div>
              <div className='text-center mt-8'>
                <HeadingSmashingProject
                  headline={`“A multi-level game that is cool.”`}
                />
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center w-full pb-10 md:pb-20'>
            <ArrowNextSection
              inverted
              onClick={(event) => {
                event.preventDefault();
                setCurrentRef(refs?.projects);
                setCurrentSection(SECTION_TYPES.PROJECTS);
                scrollToSection(screensRef);
              }}
            />
          </div>
          <div
            className='px-6 sm:px-10 pb-20 grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-8'
            ref={screensRef}
          >
            <div className='pb-6'>
              <Image
                className={`transition-all delay-75 duration-300 mb-3 ${
                  fade ? "opacity-1 translate-y-0" : "opacity-0 translate-y-12"
                } rounded-xl h-min w-full aspect-video object-contain`}
                src={WebIllustration}
                alt=''
              />
              <div className='duration-600 z-20 mb-6 flex flex-wrap font-eurostile rounded-lg dark:text-bone-white text-retro-black items-center'>
                It&apos;s a step-by-step process, with each piece coming
                together to create a cohesive whole.
              </div>
            </div>
            <div>
              <Image
                className={`transition-all delay-300 duration-500 mb-3 ${
                  fade ? "opacity-1 translate-y-0" : "opacity-0 translate-y-12"
                } rounded-xl h-min w-full aspect-video object-contain`}
                src={WebIllustration}
                alt=''
              />
              <div className='duration-600 z-20 mb-6 flex flex-wrap font-eurostile rounded-lg dark:text-bone-white text-retro-black items-center'>
                It&apos;s a step-by-step process, with each piece coming
                together to create a cohesive whole.
              </div>
            </div>
            <div>
              <Image
                className={`transition-all delay-1000 duration-1000 mb-3 ${
                  fade ? "opacity-1 translate-y-0" : "opacity-0 translate-y-12"
                } rounded-xl h-min w-full aspect-video object-contain`}
                src={WebIllustration}
                alt=''
              />
              <div className='duration-600 z-20 mb-6 flex flex-wrap font-eurostile rounded-lg dark:text-bone-white text-retro-black items-center'>
                It&apos;s a step-by-step process, with each piece coming
                together to create a cohesive whole.
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Project;
