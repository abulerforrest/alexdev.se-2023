import { useStore } from "zustand";
import { SECTION_TYPES, alexDevStore } from "../../store/store";
import Link from "next/link";

interface ISlideNav {}

const SlideNav = (props: ISlideNav) => {
  const store = useStore(alexDevStore);

  const { navOpen, setNavOpen, currentSection, setCurrentSection, refs } =
    store;

  return (
    <nav
      style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      className={`sm:opacity-95 transform duration-300 transition-all dark:bg-retro-black ${
        navOpen && "w-full sm:w-1/2"
      } bg-bone-white flex fixed z-20 h-full ${!navOpen && "w-0 opacity-0"}`}
    >
      <ul className=' py-5 pl-10 flex-col w-[100%]'>
        <li
          className={`w-min cursor-pointer ${
            navOpen && "mb-3 animate-slide-from-right animation-delay-100"
          } uppercase font-kabel font-black text-[28px] text-retro-black dark:text-bone-white`}
        >
          <Link href='/' onClick={() => setNavOpen({ navOpen: !navOpen })}>
            <div>Home</div>
            <div
              className={`transition-all duration-300 bg-orange-dream dark:bg-exotic-fanta group-hover:w-full h-1 rounded-full ${
                currentSection === SECTION_TYPES.HOME
                  ? "w-full animation-delay-300 animate-slide-from-right"
                  : "w-0"
              }`}
            ></div>
          </Link>
        </li>
        <li
          className={`w-min cursor-pointer opacity-0 ${
            navOpen && "mb-3 animate-slide-from-right animation-delay-300"
          } uppercase font-kabel font-black text-[28px] text-retro-black dark:text-bone-white`}
        >
          <Link
            href='/projects'
            onClick={() => setNavOpen({ navOpen: !navOpen })}
          >
            <div>Projects</div>
            <div
              className={`transition-all duration-300 bg-orange-dream dark:bg-exotic-fanta group-hover:w-full h-1 rounded-full ${
                currentSection === SECTION_TYPES.PROJECTS
                  ? "w-full animation-delay-300 animate-slide-from-right"
                  : "w-0"
              }`}
            ></div>
          </Link>
        </li>
        <li
          className={`w-min cursor-pointer opacity-0 ${
            navOpen && "mb-3 animate-slide-from-right animation-delay-500"
          } uppercase font-kabel font-black text-[28px] text-retro-black dark:text-bone-white`}
        >
          <Link href='/code' onClick={() => setNavOpen({ navOpen: !navOpen })}>
            <div>Code</div>
            <div
              className={`transition-all duration-300 bg-orange-dream dark:bg-exotic-fanta group-hover:w-full h-1 rounded-full ${
                currentSection === SECTION_TYPES.CODE
                  ? "w-full animation-delay-300 animate-slide-from-right"
                  : "w-0"
              }`}
            ></div>
          </Link>
        </li>
        <li
          className={`w-min cursor-pointer opacity-0 ${
            navOpen && "mb-3 animate-slide-from-right animation-delay-700"
          } uppercase font-kabel font-black text-[28px] text-retro-black dark:text-bone-white`}
        >
          <Link href='/about' onClick={() => setNavOpen({ navOpen: !navOpen })}>
            <div>About</div>
            <div
              className={`transition-all duration-300 bg-orange-dream dark:bg-exotic-fanta group-hover:w-full h-1 rounded-full ${
                currentSection === SECTION_TYPES.ABOUT
                  ? "w-full animation-delay-300 animate-slide-from-right"
                  : "w-0"
              }`}
            ></div>
          </Link>
        </li>
        <li
          className={`w-min cursor-pointer opacity-0 ${
            navOpen && "mb-3 animate-slide-from-right animation-delay-900"
          } uppercase font-kabel font-black text-[28px] text-retro-black dark:text-bone-white`}
        >
          <Link
            href='/connect'
            onClick={() => setNavOpen({ navOpen: !navOpen })}
          >
            <div>Connect</div>
            <div
              className={`transition-all duration-300 bg-orange-dream dark:bg-exotic-fanta group-hover:w-full h-1 rounded-full ${
                currentSection === SECTION_TYPES.CONNECT
                  ? "w-full animation-delay-300 animate-slide-from-right"
                  : "w-0"
              }`}
            ></div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SlideNav;
