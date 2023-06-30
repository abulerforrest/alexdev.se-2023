import { useStore } from "zustand";
import { IPassRefs, alexDevStore, scrollTo } from "../../../pages";
import Logo, { LOGOVARIATIONS } from "../atoms/Logo";
import MenuItem from "../atoms/MenuItem";
import NavigationButton from "../atoms/NavigationButton";
import { MutableRefObject, useEffect, useRef } from "react";

const Navigation = (props: IPassRefs) => {
  const store = useStore(alexDevStore);
  const { navOpen, setNavOpen } = store;

  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && !(ref.current as any).contains(event.target)) {
        if (navOpen) {
          setNavOpen({ navOpen: false });
        }
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref, navOpen]);

  const handleNavClick = (ref: MutableRefObject<null>) => {
    scrollTo(ref);
    setNavOpen({ navOpen: !navOpen });
  };

  return (
    <>
      <div
        className='justify-between items-center w-full hidden md:flex '
        id='navbar-sticky'
      >
        <span>
          <Logo href='/' logoStyle={LOGOVARIATIONS.DARK} />
        </span>
        <span className='items-center p-5'>
          <ul className='flex justify-center items-center gap-4'>
            <MenuItem
              onClick={() => handleNavClick(props.passRefs.homeRef)}
              label='Home'
              itemColor='#eb7a4d'
            />
            <MenuItem
              onClick={() => handleNavClick(props.passRefs.codeRef)}
              label='Code'
              itemColor='#487AA0'
            />
            <MenuItem
              onClick={() => handleNavClick(props.passRefs.projectsRef)}
              label='Projects'
              itemColor='#D7AE3D'
            />
            <MenuItem
              onClick={() => handleNavClick(props.passRefs.aboutRef)}
              label='About'
              itemColor='#e1614b'
            />
            <MenuItem
              onClick={() => handleNavClick(props.passRefs.connectRef)}
              label='Connect'
              itemColor='#e1614b'
            />
          </ul>
        </span>
      </div>
      <div
        className='flex w-full justify-end md:hidden md:order-first'
        ref={ref}
      >
        <NavigationButton />
        <nav
          style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
          className={`transform duration-300 transition-all dark:bg-retro-black ${
            navOpen && "w-full sm:w-1/2"
          } bg-bone-white flex fixed z-20 h-full ${
            !navOpen && "w-0 opacity-0"
          }`}
        >
          <ul className=' py-5 pl-10 flex-col w-[100%]'>
            <li
              className={`w-min cursor-pointer opacity-0 ${
                navOpen && "mb-3 animate-slide-from-right animation-delay-100"
              } uppercase font-kabel font-black text-[28px] text-retro-black dark:text-bone-white`}
              onClick={() => handleNavClick(props.passRefs.homeRef)}
            >
              Home
            </li>
            <li
              className={`w-min cursor-pointer opacity-0 ${
                navOpen && "mb-3 animate-slide-from-right animation-delay-300"
              } uppercase font-kabel font-black text-[28px] text-retro-black dark:text-bone-white`}
              onClick={() => handleNavClick(props.passRefs.codeRef)}
            >
              Code
            </li>
            <li
              className={`w-min cursor-pointer opacity-0 ${
                navOpen && "mb-3 animate-slide-from-right animation-delay-500"
              } uppercase font-kabel font-black text-[28px] text-retro-black dark:text-bone-white`}
              onClick={() => handleNavClick(props.passRefs.projectsRef)}
            >
              Projects
            </li>
            <li
              className={`w-min cursor-pointer opacity-0 ${
                navOpen && "mb-3 animate-slide-from-right animation-delay-700"
              } uppercase font-kabel font-black text-[28px] text-retro-black dark:text-bone-white`}
              onClick={() => handleNavClick(props.passRefs.aboutRef)}
            >
              About
            </li>
            <li
              className={`w-min cursor-pointer opacity-0 ${
                navOpen && "animate-slide-from-right animation-delay-900"
              } uppercase font-kabel font-black text-[28px] text-retro-black dark:text-bone-white`}
              onClick={() => handleNavClick(props.passRefs.connectRef)}
            >
              Connect
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
