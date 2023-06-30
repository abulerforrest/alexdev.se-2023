import { MdOutlineLightMode, MdLightMode } from "react-icons/md";

const ModeSwitcher = () => {
  return (
    <>
      <div className='flex mt-1'>
        <span className='select-none'>DARK/LIGHT</span>
        <div className='ml-1 text-midnight opacity-60'>
          <MdOutlineLightMode size={17} />
        </div>
      </div>
      <div className='mt-1 h-[3px] w-[0%] bg-midnight group-hover:w-[100%] transition-all bg-opacity-20 rounded-lg'></div>
    </>
  );
};

export default ModeSwitcher;
