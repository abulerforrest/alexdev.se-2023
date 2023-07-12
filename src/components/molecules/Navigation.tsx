import { useStore } from "zustand";
import Logo, { LogoStyleType } from "../atoms/Logo";
import MenuItem from "../atoms/MenuItem";
import NavigationButton from "../atoms/NavigationButton";
import { MutableRefObject, useEffect, useRef } from "react";
import { ISections, SECTION_TYPES, alexDevStore } from "../../store/store";
import SlideNav from "./SlideNav";

interface INavigation {
  invertColors: boolean;
  logoStyle: LogoStyleType;
}
const Navigation = (props: INavigation) => {
  const store = useStore(alexDevStore);
  const { invertColors, logoStyle } = props;
  const {
    navOpen,
    setNavOpen,
    currentSection,
    refs,
    setCurrentRef,
    setCurrentSection,
  } = store;

  const currentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        currentRef.current &&
        !(currentRef.current as any).contains(event.target)
      ) {
        if (navOpen) {
          setNavOpen({ navOpen: false });
        }
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [currentRef, navOpen, setNavOpen]);

  return (
    <>
      <div
        className='select-none justify-between items-center w-full hidden md:flex mb-5'
        id='navbar-sticky'
      >
        <span>
          <Logo invert={invertColors} logoStyle={logoStyle} href='/' />
        </span>
        <span className='items-center p-5 xl:pr-[48px]'>
          <ul className={`flex justify-center items-center gap-4 h-10 mt-5`}>
            <MenuItem
              isCurrent={currentSection === SECTION_TYPES.HOME}
              label='Home'
              itemColor='#eb7a4d'
              href='/'
              invertColors={invertColors}
            />
            <MenuItem
              isCurrent={currentSection === SECTION_TYPES.PROJECTS}
              label='Projects'
              itemColor='#D7AE3D'
              href='/projects'
              invertColors={invertColors}
            />
            <MenuItem
              isCurrent={currentSection === SECTION_TYPES.CODE}
              label='Code'
              itemColor='#487AA0'
              href='/code'
              invertColors={invertColors}
            />
            <MenuItem
              isCurrent={currentSection === SECTION_TYPES.ABOUT}
              label='About'
              itemColor='#e1614b'
              href='/about'
              invertColors={invertColors}
            />
            <MenuItem
              isCurrent={currentSection === SECTION_TYPES.CONNECT}
              label='Connect'
              itemColor='#e1614b'
              href='/connect'
              invertColors={invertColors}
            />
          </ul>
        </span>
      </div>
      <div
        className='flex w-full justify-end md:hidden md:order-first'
        ref={currentRef}
      >
        <NavigationButton />
        <SlideNav />
      </div>
    </>
  );
};

export default Navigation;
