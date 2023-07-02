import { useStore } from "zustand";
import { ISections, SECTION_TYPES, alexDevStore } from "../../store/store";
import { IPassRefs } from "../../interfaces/refs/refs";
import { MutableRefObject, useState } from "react";
import { useRouter } from "next/navigation";
import useScrollTo from "../../hooks/useScrollTo";

interface ISlideNav {
  passRefs: IPassRefs;
}

const SlideNav = (props: ISlideNav) => {
  const router = useRouter();
  const store = useStore(alexDevStore);

  const { navOpen, setNavOpen, currentSection, setCurrentSection } = store;

  const [currentRef, setCurrentRef] = useState<MutableRefObject<null>>(null!);

  useScrollTo(currentRef);

  const handleNavClick = (
    clickRef: MutableRefObject<null>,
    route: string,
    event: React.MouseEvent<HTMLLIElement>,
    section: ISections
  ) => {
    event.preventDefault();
    setCurrentRef(clickRef);
    router.push(`/${route}`);
    setNavOpen({ navOpen: !navOpen });
    setCurrentSection(section);
  };

  return (
    <nav
      style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      className={`sm:opacity-95 transform duration-300 transition-all dark:bg-retro-black ${
        navOpen && "w-full sm:w-1/2"
      } bg-bone-white flex fixed z-20 h-full ${!navOpen && "w-0 opacity-0"}`}
    >
      <ul className=' py-5 pl-10 flex-col w-[100%]'>
        <li
          className={`${
            currentSection === SECTION_TYPES.HOME && "border-b-4"
          } border-orange-dream dark:border-exotic-fanta w-min cursor-pointer opacity-0 ${
            navOpen && "mb-3 animate-slide-from-right animation-delay-100"
          } uppercase font-kabel font-black text-[28px] text-retro-black dark:text-bone-white`}
          onClick={(event) =>
            handleNavClick(
              props.passRefs.home,
              "home",
              event,
              SECTION_TYPES.HOME
            )
          }
        >
          Home
        </li>
        <li
          className={`${
            currentSection === SECTION_TYPES.PROJECTS && "border-b-4"
          } border-orange-dream dark:border-exotic-fanta w-min cursor-pointer opacity-0 ${
            navOpen && "mb-3 animate-slide-from-right animation-delay-500"
          } uppercase font-kabel font-black text-[28px] text-retro-black dark:text-bone-white`}
          onClick={(event) =>
            handleNavClick(
              props.passRefs.projects,
              "projects",
              event,
              SECTION_TYPES.PROJECTS
            )
          }
        >
          Projects
        </li>
        <li
          className={`${
            currentSection === SECTION_TYPES.CODE && "border-b-4"
          } border-orange-dream dark:border-exotic-fanta w-min cursor-pointer opacity-0 ${
            navOpen && "mb-3 animate-slide-from-right animation-delay-300"
          } uppercase font-kabel font-black text-[28px] text-retro-black dark:text-bone-white`}
          onClick={(event) =>
            handleNavClick(
              props.passRefs.code,
              "code",
              event,
              SECTION_TYPES.CODE
            )
          }
        >
          Code
        </li>
        <li
          className={`hover: ${
            currentSection === SECTION_TYPES.ABOUT && "border-b-4"
          } border-orange-dream dark:border-exotic-fanta w-min cursor-pointer opacity-0 ${
            navOpen && "mb-3 animate-slide-from-right animation-delay-700"
          } uppercase font-kabel font-black text-[28px] text-retro-black dark:text-bone-white`}
          onClick={(event) =>
            handleNavClick(
              props.passRefs.about,
              "about",
              event,
              SECTION_TYPES.ABOUT
            )
          }
        >
          About
        </li>
        <li
          className={`${
            currentSection === SECTION_TYPES.CONNECT && "border-b-4"
          } border-orange-dream dark:border-exotic-fanta w-min cursor-pointer opacity-0 ${
            navOpen && "animate-slide-from-right animation-delay-900"
          } uppercase font-kabel font-black text-[28px] text-retro-black dark:text-bone-white`}
          onClick={(event) =>
            handleNavClick(
              props.passRefs.connect,
              "connect",
              event,
              SECTION_TYPES.CONNECT
            )
          }
        >
          Connect
        </li>
      </ul>
    </nav>
  );
};

export default SlideNav;
