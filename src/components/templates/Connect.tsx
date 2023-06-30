import { IoLogoTwitter } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import SectionHeading from "../molecules/SectionHeading";
import { IPassRefs, scrollTo } from "../../../pages";
import Link from "next/link";

const Connect = (props: IPassRefs) => (
  <>
    <SectionHeading title='Connect' />
    <div className='flex-col justify-center w-full'>
      <div className='lg:pt-20 pt-10 mx-8 lg:mx-20 sm:mx-14 lg:px-32 font-kabel text-retro-black font-black dark:text-bone-white text-connect-text-sm sm:text-connect-text-sm md:text-connect-text-md xl:text-connect-text-xl'>
        <p className='mb-7 text-center'>
          Ready to bring your project to life with an engaging and responsive
          user experience? Look no further! Let's collaborate to create
          something amazing. As a skilled frontend developer with expertise in
          Next.js, Angular, HTML, CSS, and JavaScript, I specialize in
          captivating and delightful user experiences. Don't wait - let's
          connect and turn your ideas into reality!
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
          onClick={() => scrollTo(props.passRefs.homeRef)}
          className='flex items-center gap-2 text-retro-black uppercase font-eurostile text-go2top-text-sm sm:text-go2top-text-sm md:text-go2top-text-md xl:text-go2top-text-xl'
        >
          Go To Top <IoIosArrowUp />
        </button>
      </div>
    </div>
  </>
);

export default Connect;
