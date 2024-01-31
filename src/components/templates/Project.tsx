"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ImGithub } from "react-icons/im";
import { IoIosRocket } from "react-icons/io";
import { useStore } from "zustand";
import { IProject } from "../../app/data/data";
import { slugify } from "../../app/helpers/helpers";
import { scrollToSection } from "../../func";
import { SECTION_TYPES, alexDevStore } from "../../store/store";
import ActionButton from "../atoms/ActionButton";
import ArrowNextSection from "../atoms/ArrowNextSection";
import HeadingSmashingProject from "../atoms/HeadingSmashingProject";
import LoadingSpinner from "../atoms/LoadingSpinner";
import Top from "./Top";

const Project = (props: IProject) => {
  const store = useStore(alexDevStore);
  const {
    refs,
    darkMode,
    setCurrentSection,
    setCurrentRef,
    projects,
    currentProject,
    setCurrentProject,
  } = store;

  const [fade, setFade] = useState(false);
  const backgroundRef = useRef(null);
  const screensRef = useRef(null);

  const slug = useParams().slug;

  useEffect(() => {
    setCurrentSection(SECTION_TYPES.SHOWCASE);
    const current = projects.find(
      (p) => p.name && slugify(`${p.name}`) === slug
    );
    !!current && setCurrentProject(current);
    setFade(true);
  }, [
    currentProject,
    projects,
    setCurrentProject,
    setFade,
    setCurrentSection,
    slug,
  ]);
  return (
    <>
      {!currentProject ? (
        <LoadingSpinner />
      ) : (
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
                    <div className='uppercase font-kabel font-black text-bone-white text-project-page-heading-sm sm:text-project-page-heading-sm md:text-project-page-heading-md xl:text-project-page-heading-xl'>
                      {currentProject?.name}
                    </div>
                    <div className='order-2 font-eurostile text-project-page-text-sm md:text-project-page-text-md xl:text-project-page-text-xl text-bone-white max-w-2xl'>
                      {currentProject?.desc}
                    </div>
                    <div className='order-last'>
                      <div className='flex gap-8'>
                        {currentProject?.launchUrl && (
                          <span>
                            <ActionButton
                              className='flex select-none items-center justify-center uppercase lg:px-9 md:px-7 px-6 lg:h-[68px] md:h-[54px] h-[48px] rounded-[200px] bg-bone-white dark:bg-bone-white text-commodore-64-grey dark:text-exotic-fanta font-kabel font-black text-button-sm md:text-button-md lg:text-button-xl'
                              text='Launch'
                              icon={
                                <IoIosRocket
                                  className={`lg:text-[30px] md:text-[22px] text-[20px] ml-1.5 text-commodore-64-grey dark:text-exotic-fanta`}
                                />
                              }
                              href={currentProject.launchUrl}
                            />
                          </span>
                        )}
                        {currentProject?.githubUrl && (
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
                              href={currentProject.githubUrl}
                            />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center w-500 h-500'>
                    {currentProject?.splashImg && (
                      <Image
                        className={`transition-all duration-1000 delay-300 ${
                          fade
                            ? "opacity-1 translate-y-0"
                            : "opacity-0 translate-y-12"
                        } rounded-xl object-contain`}
                        src={currentProject?.splashImg}
                        alt=''
                        width={800}
                        height={600}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center w-full py-10 md:py-20'>
                <ArrowNextSection
                  onClick={(event) => {
                    event.preventDefault();
                    setCurrentRef(refs?.showcase);
                    setCurrentSection(SECTION_TYPES.SHOWCASE);
                    scrollToSection(backgroundRef);
                  }}
                  inverted={darkMode}
                />
              </div>
            </section>
            <div ref={backgroundRef} className='w-full py-10 md:py-20'>
              <div className='flex-col m-10 md:m-20'>
                {currentProject?.backgroundText && (
                  <>
                    <div className='select-none mb-10 justify-center flex font-kabel font-black text-retro-black dark:text-bone-white text-project-background-heading-sm md:text-project-background-heading-md xl:text-project-background-heading-xl'>
                      A Brief Background
                    </div>
                    <div className='flex w-full justify-center'>
                      <div className='max-w-xl mx-2 sm:mx-28 md:mx-32 font-eurostile text-project-page-text-sm md:text-project-page-text-md xl:text-project-page-text-xl text-retro-black dark:text-bone-white'>
                        {currentProject.backgroundText}
                      </div>
                    </div>
                  </>
                )}
                {currentProject?.projectQuote && (
                  <div className='flex w-full justify-center'>
                    <div className='text-center mt-8 max-w-7xl'>
                      <HeadingSmashingProject
                        headline={currentProject.projectQuote}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className='flex justify-center items-center w-full pb-10 md:pb-20'>
              <ArrowNextSection
                inverted
                onClick={(event) => {
                  event.preventDefault();
                  setCurrentRef(refs?.showcase);
                  setCurrentSection(SECTION_TYPES.SHOWCASE);
                  scrollToSection(screensRef);
                }}
              />
            </div>
            <div
              className='px-6 sm:px-10 pb-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 6xl:grid-cols-6 gap-8'
              ref={screensRef}
            >
              {currentProject?.images?.map(
                (promoImage: { text: string; url: string }, index: number) => (
                  <div className='pb-6' key={index}>
                    <Image
                      className={`transition-all delay-75 duration-300 mb-3 ${
                        fade
                          ? "opacity-1 translate-y-0"
                          : "opacity-0 translate-y-12"
                      } rounded-xl h-min w-full object-contain`}
                      src={`${promoImage.url}&width=300`}
                      alt=''
                      width={692}
                      height={390}
                    />
                    <div className='duration-600 z-20 mb-6 flex flex-wrap font-eurostile rounded-lg dark:text-bone-white text-retro-black items-center'>
                      {promoImage.text}
                    </div>
                  </div>
                )
              )}
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default Project;
