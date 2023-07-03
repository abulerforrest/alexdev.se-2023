import ActionButton from "../atoms/ActionButton";
import { IoIosCloudDownload, IoIosPlanet } from "react-icons/io";
const ActionButtons = () => {
  return (
    <div className='max-w-fit min-w-max grid grid-cols-2 gap-8 mr-4'>
      <span
        style={{
          filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))",
        }}
      >
        <ActionButton
          className='flex select-none items-center justify-center uppercase lg:px-9 md:px-7 px-6 lg:h-[68px] md:h-[54px] h-[48px] rounded-[200px] bg-bone-white dark:bg-bone-white text-orange-dream dark:text-exotic-fanta font-kabel font-black text-button-sm md:text-button-md lg:text-button-xl'
          text='Resumé'
          icon={
            <IoIosCloudDownload
              className={`lg:text-[30px] md:text-[22px] text-[20px] ml-1.5 text-orange-dream dark:text-exotic-fanta`}
            />
          }
          onClick={() => {
            console.log("Clicked Resume button! Upcoming feature.");
          }}
        />
      </span>
      <span
        style={{
          filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.20))",
        }}
      >
        <ActionButton
          text='Connect'
          className='flex select-none items-center justify-center uppercase lg:px-9 md:px-7 px-6 lg:h-[68px] md:h-[54px] h-[48px] rounded-[200px] bg-startling-blues dark:bg-retro-black text-bone-white dark:text-bone-white font-kabel font-black text-button-sm md:text-button-md lg:text-button-xl'
          icon={
            <IoIosPlanet
              className={`lg:text-[40px] md:text-[30px] text-[24px] ml-1.5 text-bone-white dark:text-bone-white`}
            />
          }
          onClick={() => {
            console.log("clicked!");
          }}
        />
      </span>
      {/* <a
        href='#_'
        className='relative inline-flex justify-center items-center px-12 py-3 overflow-hidden text-lg md:text-md sm:text-sm lg:text-lg xs:text-xs font-medium bg-[#c5c4c1] bg-opacity-30 backdrop-blur-xl  text-pale-white border-2 border-pale-white rounded-full hover:text-[#eb7a4d] group hover:bg-gray-50'
      >
        <span className='absolute left-0 block w-full h-0 transition-all bg-pale-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease'></span>
        <span className='absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease'>
          <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M14 5l7 7m0 0l-7 7m7-7H3'
            ></path>
          </svg>
        </span>
        <span className='relative font-eurostile font-extrabold tracking-[0.05rem] uppercase flex items-center'>
          <span className='mr-[0.35rem]'>
            <RiDownloadCloud2Fill size={20} />
          </span>
          Resumé
        </span>
      </a>
      <a
        href='#_'
        className='relative min-w-[max-content] inline-flex justify-center items-center py-3 overflow-hidden text-md xs:text-xs sm:text-sm md:text-md lg:text-lg font-medium bg-[#c5c4c1] backdrop-blur-xl  text-pale-white border-2 border-[#c5c4c1] rounded-full hover:text-[#eb7a4d] group hover:bg-gray-50'
      >
        <span className='absolute left-0 block w-full h-0 transition-all bg-pale-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease'></span>
        <span className='absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease'>
          <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M14 5l7 7m0 0l-7 7m7-7H3'
            ></path>
          </svg>
        </span>
        <span className='relative font-eurostile font-extrabold tracking-[0.05rem] uppercase flex items-center'>
          <span className='mr-1'>
            <BsFillLightningChargeFill />
          </span>
          Get in touch
        </span>
      </a> */}
    </div>
  );
};

export default ActionButtons;
