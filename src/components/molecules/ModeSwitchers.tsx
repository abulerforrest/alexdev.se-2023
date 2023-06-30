import ColorSwitcher from "../atoms/ColorSwitcher";
import ModeSwitcher from "../atoms/ModeSwitcher";

const ModeSwitchers = () => {
  return (
    <div className='flex flex-wrap text-[0.6rem] md:text-xs'>
      <span className='flex bg-gray-200 p-5 rounded-full items-center h-6 font-eurostile'>
        <ColorSwitcher />
        <ModeSwitcher />
      </span>
      <span className='mr-2 mt-[6px]'></span>
    </div>
  );
};

export default ModeSwitchers;
