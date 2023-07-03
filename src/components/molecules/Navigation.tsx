import { useStore } from "zustand";
import Logo, { LOGOVARIATIONS } from "../atoms/Logo";
import MenuItem from "../atoms/MenuItem";
import NavigationButton from "../atoms/NavigationButton";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { IPassRefs } from "../../interfaces/refs/refs";
import { ISections, SECTION_TYPES, alexDevStore } from "../../store/store";
import { useRouter } from "next/navigation";
import useScrollTo from "../../hooks/useScrollTo";
import SlideNav from "./SlideNav";

const Navigation = (props: { passRefs: IPassRefs }) => {
  const store = useStore(alexDevStore);
  const {
    navOpen,
    setNavOpen,
    setCurrentSection,
    currentRef,
    setCurrentRef,
    currentSection,
  } = store;

  const ref = useRef(null);
  const router = useRouter();

  useScrollTo(currentRef);

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
  }, [ref, navOpen]);

  const handleNavClick = (
    clickRef: MutableRefObject<null>,
    route: string,
    event: React.MouseEvent<HTMLLIElement>,
    section: ISections
  ) => {
    event.preventDefault();
    setCurrentRef(clickRef);
    router.push(`/${route}`);
    setCurrentSection(section);
  };

  return (
    <>
      <div
        className='select-none justify-between items-center w-full hidden md:flex mb-5'
        id='navbar-sticky'
      >
        <span>
          <Logo href='/' logoStyle={LOGOVARIATIONS.DARK} />
        </span>
        <span className='items-center p-5 xl:pr-[48px]'>
          <ul className={`flex justify-center items-center gap-4 h-10 mt-5`}>
            <MenuItem
              onClick={(event) =>
                handleNavClick(
                  props.passRefs.home,
                  "",
                  event,
                  SECTION_TYPES.HOME
                )
              }
              isCurrent={currentSection === SECTION_TYPES.HOME}
              label='Home'
              itemColor='#eb7a4d'
            />
            <MenuItem
              onClick={(event) =>
                handleNavClick(
                  props.passRefs.projects,
                  "projects",
                  event,
                  SECTION_TYPES.PROJECTS
                )
              }
              isCurrent={currentSection === SECTION_TYPES.PROJECTS}
              label='Projects'
              itemColor='#D7AE3D'
            />
            <MenuItem
              onClick={(event) =>
                handleNavClick(
                  props.passRefs.code,
                  "code",
                  event,
                  SECTION_TYPES.CODE
                )
              }
              isCurrent={currentSection === SECTION_TYPES.CODE}
              label='Code'
              itemColor='#487AA0'
            />
            <MenuItem
              onClick={(event) =>
                handleNavClick(
                  props.passRefs.about,
                  "about",
                  event,
                  SECTION_TYPES.ABOUT
                )
              }
              isCurrent={currentSection === SECTION_TYPES.ABOUT}
              label='About'
              itemColor='#e1614b'
            />
            <MenuItem
              onClick={(event) =>
                handleNavClick(
                  props.passRefs.connect,
                  "connect",
                  event,
                  SECTION_TYPES.CONNECT
                )
              }
              isCurrent={currentSection === SECTION_TYPES.CONNECT}
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
        <SlideNav passRefs={props.passRefs} />
      </div>
    </>
  );
};

export default Navigation;
