import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin, FaSpotify } from "react-icons/fa";
import { ImSoundcloud2 } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { TfiYoutube } from "react-icons/tfi";

const SocialIcons = () => {
  return (
    <div className='z-25 mt-10 min-w-full w-full justify-end flex'>
      <div className='-mr-5 mb-5 flex xl:gap-5 lg:gap-5 md:gap-4 gap-2 items-center opacity-80'>
        <span className='relative block rounded h-[26px] sm:h-[28px] md:h-[30px] lg:h-[34px] xl:h-[34px] w-[5px] bg-pale-white rotate-12'></span>
        <AiFillGithub className='text-pale-white h-[23px] sm:h-[27px] md:h-[30px] lg:h-[33px] w-[auto]' />{" "}
        <FaLinkedin className='text-pale-white h-[23px] sm:h-[27px] md:h-[30px] lg:h-[33px] w-[auto]' />
        <TfiYoutube className='text-pale-white h-[21px] sm:h-[25px] md:h-[26px] lg:h-[28px] w-[auto]' />
        <SiInstagram className='text-pale-white h-[21px] sm:h-[25px] md:h-[26px] lg:h-[28px] w-[auto]' />
        <FaSpotify className='text-pale-white h-[23px] sm:h-[27px] md:h-[29px] lg:h-[30px] w-[auto]' />
        <ImSoundcloud2 className='text-pale-white h-[21px] sm:h-[25px] md:h-[26px] lg:h-[28px] w-[auto]' />
        <span className='relative block rounded ml-1 h-[26px] sm:h-[28px] md:h-[30px] lg:h-[34px] xl:h-[34px] w-[5px] bg-pale-white rotate-12'></span>
      </div>
    </div>
  );
};

export default SocialIcons;
