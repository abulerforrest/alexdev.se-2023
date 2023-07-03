import Link from "next/link";
import Logo, { LOGOVARIATIONS } from "../atoms/Logo";
import { IoIosPerson, IoMdCall, IoMdMail } from "react-icons/io";
import { IPassRefs } from "../../interfaces/refs/refs";
import { MutableRefObject } from "react";
import { ISections, SECTION_TYPES, alexDevStore } from "../../store/store";
import { useStore } from "zustand";
import { useRouter } from "next/navigation";
const spriteCommonStyle = "h-1 height w-full mb-0.5 rounded-md";

const Footer = (props: { passRefs: IPassRefs }) => {
  const store = useStore(alexDevStore);
  const { setCurrentSection, setCurrentRef } = store;

  const router = useRouter();

  const handleFooterNavClick = (
    clickRef: MutableRefObject<null>,
    route: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    section: ISections
  ) => {
    event.preventDefault();
    setCurrentRef(clickRef);
    router.push(`/${route}`);
    setCurrentSection(section);
  };

  return (
    <footer className='min-h-[454px] bg-retro-black dark:bg-dark-mode-feel m-auto flex justify-center pb-10'>
      <div className='flex-col pl-20 pr-20'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 gap-10 font-eurostile mt-20 w-full'>
          <div className='min-w-[160px] flex-col'>
            <div className='whitespace-nowrap uppercase text-[#CACAC4] text-footer-heading-sm sm:text-footer-heading-sm md:text-footer-heading-md xl:text-footer-heading-xl'>
              #React out
            </div>
            <div className='h-10 whitespace-nowrap flex items-center gap-2 text-footer-contact-text sm:text-footer-contact-text-sm md:text-footer-contact-text-md xl:text-footer-contact-text-xl text-bone-white'>
              <span className='w-24px h-24px'>
                <IoIosPerson className='text-[24px] fill-bone-white' />
              </span>
              Alexander Forrest
            </div>
            <div className='h-10 whitespace-nowrap flex items-center gap-2 text-footer-contact-text sm:text-footer-contact-text-sm md:text-footer-contact-text-md xl:text-footer-contact-text-xl text-bone-white'>
              <span className='w-24px h-24px'>
                <IoMdMail className='text-[24px] fill-bone-white' />
              </span>
              <Link href='mailto:alex@alexdev.se'>alex@alexdev.se</Link>
            </div>
            <div className=' h-10 whitespace-nowrap flex items-center gap-2 text-footer-contact-text sm:text-footer-contact-text-sm md:text-footer-contact-text-md xl:text-footer-contact-text-xl text-bone-white'>
              <span className='w-24px h-24px'>
                <IoMdCall className='text-[24px] fill-bone-white' />
              </span>
              <Link href='tel:+46739859190'>+46(0)739859190</Link>
            </div>
            <div className='select-none pt-4 text-bone-white text-footer-reachout-text sm:text-footer-reachout-text-sm md:text-footer-reachout-text-md xl:text-footer-reachout-text-xl'>
              Feel free to reach out, and I&apos;ll do my best to respond
              promptly and effectively.
            </div>
          </div>
          <div className='flex px-10'>
            <div>
              <div className='whitespace-nowrap uppercase text-[#CACAC4] text-footer-heading-sm sm:text-footer-heading-sm md:text-footer-heading-md xl:text-footer-heading-xl'>
                #Sections
              </div>
              <div className='flex-col text-bone-white font-kabel font-black uppercase text-footer-navitem-sm'>
                <div>
                  <Link
                    href={""}
                    onClick={(event) => {
                      handleFooterNavClick(
                        props.passRefs.home,
                        "",
                        event,
                        SECTION_TYPES.HOME
                      );
                    }}
                  >
                    Home
                  </Link>
                </div>
                <div>
                  <Link
                    href={""}
                    onClick={(event) => {
                      handleFooterNavClick(
                        props.passRefs.projects,
                        "projects",
                        event,
                        SECTION_TYPES.PROJECTS
                      );
                    }}
                  >
                    Projects
                  </Link>
                </div>
                <div>
                  <Link
                    href={""}
                    onClick={(event) => {
                      handleFooterNavClick(
                        props.passRefs.code,
                        "code",
                        event,
                        SECTION_TYPES.CODE
                      );
                    }}
                  >
                    Code
                  </Link>
                </div>
                <div>
                  <Link
                    href={""}
                    onClick={(event) => {
                      handleFooterNavClick(
                        props.passRefs.about,
                        "about",
                        event,
                        SECTION_TYPES.ABOUT
                      );
                    }}
                  >
                    About
                  </Link>
                </div>
                <div>
                  <Link
                    href={""}
                    onClick={(event) => {
                      handleFooterNavClick(
                        props.passRefs.connect,
                        "connect",
                        event,
                        SECTION_TYPES.CONNECT
                      );
                    }}
                  >
                    Connect
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='flex col-span-2 justify-center xs:justify-center xs:col-span-2 sm:col-span-1 sm:justify-end'>
            <div className='uppercase text-[#CACAC4] text-footer-heading-sm sm:text-footer-heading-sm md:text-footer-heading-md xl:text-footer-heading-xl'>
              <Logo
                href='/'
                onClick={(event) => {
                  handleFooterNavClick(
                    props.passRefs.home,
                    "",
                    event,
                    SECTION_TYPES.HOME
                  );
                }}
                logoStyle={LOGOVARIATIONS.LIGHT}
              />
            </div>
          </div>
        </div>
        <div className=' w-full h-[0.08rem] bg-[#5D594F] my-5'>
          <div className='flex gap-4 py-2 items-center'>
            <div className='w-[30px]'>
              <div
                className={`my-[0.15rem] animate-grow-from-left bg-exotic-fanta ${spriteCommonStyle}`}
              />
              <div
                className={`my-[0.15rem] animate-grow-from-left bg-orange-dream ${spriteCommonStyle}`}
              />
              <div
                className={`my-[0.15rem] animate-grow-from-left bg-its-called-yellow ${spriteCommonStyle}`}
              />
              <div
                className={`my-[0.15rem] animate-grow-from-left bg-mighty-greens ${spriteCommonStyle}`}
              />
              <div
                className={`my-[0.15rem] animate-grow-from-left bg-startling-blues ${spriteCommonStyle}`}
              />
            </div>
            <div className='cursor-default select-none whitespace-nowrap text-bone-white font-eurostile text-footer-copyright-text-sm sm:text-footer-copyright-text-sm md:text-footer-copyright-text-md xl:text-footer-text-copyright-xl'>
              Design and code by Alexander Forrest © 2023 • alexdev™
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
