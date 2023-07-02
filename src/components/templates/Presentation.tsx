import { useStore } from "zustand";
import PopupImage from "../atoms/PopupImage";
import PopupImageDark from "../atoms/PopupImageDark";
import ActionButtons from "../molecules/ActionButtons";
import LightSwitch from "../molecules/LightSwitch";
import WelcomeText from "../molecules/WelcomeText";
import { SECTION_TYPES, alexDevStore } from "../../store/store";
import { IPassRefs } from "../../interfaces/refs/refs";
import { scrollToSection } from "../../func";
import ArrowNextSection from "../atoms/ArrowNextSection";
import { useEffect, useState } from "react";

interface IPresentation {
  passRefs: IPassRefs;
}

const Presentation = (props: IPresentation) => {
  const { darkMode, setCurrentRef, setCurrentSection } = useStore(alexDevStore);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <div className='lg:mx-[46px]'>
      <div
        className={`transition-all grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-2 min-h-[900px] gap-0 pt-5 px-5 md:px-10 lg:px-[46px] lg:rounded-[15px] bg-orange-dream dark:bg-exotic-fanta overflow-hidden`}
      >
        <div className='absolute lg:right-20 top-[100px] lg:top-5 md:top-5 right-5'>
          <LightSwitch />
        </div>
        <div className='flex justify-center items-center my-10 order-2 relative z-20'>
          <div className='flex-col xl:p-40 p-10 items-center'>
            <WelcomeText />
            <ActionButtons />
          </div>
        </div>
        <div className='flex md:order-2 pr-8 justify-center items-center mx-20 pt-20 md:pt-0'>
          {darkMode ? <PopupImageDark /> : <PopupImage />}
          {/* --- FX --- */}
          <div className='absolute top-30 left-[0] opacity-[0.045]'>
            <div className='rounded-full bg-[#ffe59d] w-[400px] h-[400px] blur-xl opacity-90 absolute mix-blend-multiply animation-delay-2000'></div>
            <div className='rounded-full bg-[#ffb699] w-[400px] h-[400px] blur-xl opacity-90  absolute left-[280px] mix-blend-multiply '></div>
            <div className='rounded-full bg-[#ffe59d] w-[400px] h-[400px] blur-xl opacity-90 absolute left-[560px] mix-blend-multiply animation-delay-4000'></div>
          </div>
        </div>
        <div className='flex justify-center md:col-span-2 sm:col-span-1 col-span-1 lg:col-span-2 order-5 pb-10'>
          <ArrowNextSection
            onClick={(event) => {
              event.preventDefault();
              setCurrentRef(props.passRefs.experiences);
              setCurrentSection(SECTION_TYPES.EXPERIENCES);
              scrollToSection(props.passRefs.experiences);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Presentation;
