import { useStore } from "zustand";
import Logo, { LOGOVARIATIONS, LogoStyleType } from "../atoms/Logo";
import MenuItem from "../atoms/MenuItem";
import NavigationButton from "../atoms/NavigationButton";
import { MutableRefObject, useEffect, useRef } from "react";
import { ISections, SECTION_TYPES, alexDevStore } from "../../store/store";
import { useRouter } from "next/navigation";
import SlideNav from "./SlideNav";

interface INavigation {
  invertColors: boolean;
  logoStyle: LogoStyleType;
}
const Navigation = (props: INavigation) => {
  const store = useStore(alexDevStore);
  const { invertColors, logoStyle } = props;
  const { navOpen, setNavOpen, setCurrentRef, currentSection, refs } = store;

  const ref = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !(ref.current as any).contains(event.target)) {
        if (navOpen) {
          setNavOpen({ navOpen: false });
        }
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref, navOpen, setNavOpen]);

  const handleNavClick = (
    clickRef: MutableRefObject<null>,
    route: string,
    event: React.MouseEvent<HTMLLIElement>
  ) => {
    event.preventDefault();
    setCurrentRef(clickRef);
    router.push(`/${route}`);
  };

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
              onClick={(event) => handleNavClick(refs?.home, "", event)}
              isCurrent={currentSection === SECTION_TYPES.HOME}
              label='Home'
              itemColor='#eb7a4d'
              invertColors={invertColors}
            />
            <MenuItem
              onClick={(event) =>
                handleNavClick(refs?.projects, "projects", event)
              }
              isCurrent={currentSection === SECTION_TYPES.PROJECTS}
              label='Projects'
              itemColor='#D7AE3D'
              invertColors={invertColors}
            />
            <MenuItem
              onClick={(event) => handleNavClick(refs?.code, "code", event)}
              isCurrent={currentSection === SECTION_TYPES.CODE}
              label='Code'
              itemColor='#487AA0'
              invertColors={invertColors}
            />
            <MenuItem
              onClick={(event) => handleNavClick(refs?.about, "about", event)}
              isCurrent={currentSection === SECTION_TYPES.ABOUT}
              label='About'
              itemColor='#e1614b'
              invertColors={invertColors}
            />
            <MenuItem
              onClick={(event) =>
                handleNavClick(refs?.connect, "connect", event)
              }
              isCurrent={currentSection === SECTION_TYPES.CONNECT}
              label='Connect'
              itemColor='#e1614b'
              invertColors={invertColors}
            />
          </ul>
        </span>
      </div>
      <div
        className='flex w-full justify-end md:hidden md:order-first'
        ref={ref}
      >
        <NavigationButton />
        <SlideNav />
      </div>
    </>
  );
};

export default Navigation;
