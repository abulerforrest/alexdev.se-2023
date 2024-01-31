import Link from "next/link";
import { useStore } from "zustand";

import { IoLogoTwitter } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import SectionHeading from "../molecules/SectionHeading";

import { alexDevStore } from "../../store/store";
import { scrollToSection } from "../../func";

const Connect = () => {
  let scrollFullfillment: boolean = false;
  const { scrollY, refs } = useStore(alexDevStore);
  if ((refs?.connect as any)?.current?.offsetTop) {
    scrollFullfillment =
      scrollY > 200 &&
      scrollY < (refs?.connect as any)?.current.offsetTop - 380 &&
      scrollY <= (refs?.connect as any)?.current.offsetTop;
  }
  return (
    <>
      <SectionHeading title='Connect' />
      <div className='flex-col justify-center w-full'>
        <div className='lg:pt-20 pt-10 mx-8 lg:mx-20 sm:mx-14 lg:px-32 font-kabel text-retro-black font-black dark:text-bone-white text-connect-text-sm sm:text-connect-text-sm md:text-connect-text-md xl:text-connect-text-xl'>
          <p className='mb-7 text-center'>
            Ready to bring your project to life with an engaging and responsive
            user experience? Look no further! Let&apos;s collaborate to create
            something amazing. As a skilled frontend developer with expertise in
            Next.js, Angular, HTML, CSS, and JavaScript, I specialize in
            captivating and delightful user experiences. Don&apos;t wait -
            let&apos;s connect and turn your ideas into reality!
          </p>
        </div>
        <div className='flex p-10 justify-center'>
          <div className='flex p-5 gap-12'>
            <Link href='https://twitter.com/zalzachipmusic' target='_blank'>
              <IoLogoTwitter className='text-[58px] fill-retro-black dark:fill-bone-white' />
            </Link>
            <Link
              href='https://www.linkedin.com/in/abulerforrest'
              target='_blank'
            >
              <IoLogoLinkedin className='text-[58px] fill-retro-black dark:fill-bone-white' />
            </Link>
            <Link href='https://www.facebook.com/abuler' target='_blank'>
              <IoLogoFacebook className='text-[58px] fill-retro-black dark:fill-bone-white' />
            </Link>
          </div>
        </div>
        <div className='flex justify-center p-5'>
          <button
            style={{
              boxShadow: scrollFullfillment
                ? "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                : "",
            }}
            onClick={() => scrollToSection(refs?.home)}
            className={`z-50 outline-none border-2 border-b-0 border-transparent bg-bone-white dark:bg-retro-black px-4 rounded-t-[20px] ${
              scrollFullfillment &&
              "fixed active:border-opacity-50 active:border-retro-black"
            } bottom-0 flex items-center gap-2 text-retro-black dark:text-bone-white uppercase font-eurostile text-go2top-text-sm sm:text-go2top-text-sm md:text-go2top-text-md xl:text-go2top-text-xl`}
          >
            Scroll To Top <IoIosArrowUp />
          </button>
        </div>
      </div>
    </>
  );
};

export default Connect;
