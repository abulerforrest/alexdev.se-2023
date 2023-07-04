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
          //{process.env.NEXT_ALEX_RESUME_URL}
          href=''
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
          href='mailto:alex@alexdev.se'
        />
      </span>
    </div>
  );
};

export default ActionButtons;
