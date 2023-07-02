import { IoIosMenu } from "react-icons/io";
import { useStore } from "zustand";
import { TfiClose } from "react-icons/tfi";
import { alexDevStore } from "../../store/store";

const NavigationButton = () => {
  const store = useStore(alexDevStore);
  const { navOpen, setNavOpen } = store;
  return (
    <button
      onClick={() => setNavOpen({ navOpen: !navOpen })}
      data-collapse-toggle='navbar-sticky'
      type='button'
      className={`transition-all m-5 z-30 flex duration-75 hover:border-2 border-bone-white dark:border-retro-black hover:cursor-pointer fixed items-center justify-center h-[54px] w-[54px] dark:text-retro-black text-bone-white rounded-full md:hidden dark:bg-bone-white bg-retro-black`}
      aria-controls='navbar-sticky'
      aria-expanded='false'
    >
      <span className='sr-only'>Open main menu</span>
      <span>
        {!navOpen ? <IoIosMenu size={"27px"} /> : <TfiClose size={"19px"} />}
      </span>
    </button>
  );
};

export default NavigationButton;
