import { useStore } from "zustand";
import { IPassRefs } from "../../interfaces/refs/refs";
import LaptopImage from "../atoms/LaptopImage";
import { SECTION_TYPES, alexDevStore } from "../../store/store";
import ArrowNextSection from "../atoms/ArrowNextSection";
import { scrollToSection } from "../../func";
import { MutableRefObject } from "react";

interface IProcessProps {
  nextRef: MutableRefObject<null>;
}

const Process = (props: IProcessProps) => {
  const { setCurrentRef } = useStore(alexDevStore);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div className='w-full flex pt-20 xl:ml-[80px]'>
        <div className='xl:px-[120px] md:px-[100px] lg:px[120px] px-[40px]'>
          <div className='text-process-blob-heading-sm xl:text-process-blob-heading-xl font-black text-retro-black dark:text-bone-white font-kabel mb-7'>
            An iterative and creative process
          </div>
          <div className='dark:text-bone-white text-process-blob-text-sm xl:text-process-blob-text-xl font-normal font-eurostile'>
            <div>
              With a background in music composition, I&apos;m accustomed to
              watching a composition take shape, much like the process of
              building a website&apos;s frontend code. It&apos;s a step-by-step
              process, with each piece coming together to create a cohesive
              whole.
            </div>
            <div className='mt-4'>
              That&apos;s why I&apos;m so passionate about frontend development
              - I love the way it feels to create a seamless, user-friendly
              experience for visitors to a website. By combining my technical
              skills with my creative vision, I strive to build stunning and
              functional websites that leave a lasting impression on users.
            </div>
          </div>
        </div>
      </div>
      <div className='flex order-first md:order-last justify-center items-center pt-4'>
        <LaptopImage />
      </div>
      <div className='flex justify-center md:col-span-2 sm:col-span-2 col-span-2 lg:col-span-2 order-last p-5'>
        <ArrowNextSection
          onClick={(event) => {
            event.preventDefault();
            setCurrentRef(props.nextRef);
            scrollToSection(props.nextRef);
          }}
          overrideColor='text-its-called-yellow hover:border-its-called-yellow'
          inverted
        />
      </div>
    </div>
  );
};

export default Process;
