import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

import { useStore } from "zustand";
import { alexDevStore } from "../../store/store";

const LightSwitch = () => {
  const store = useStore(alexDevStore);
  const { darkMode, setDarkMode } = store;

  return (
    <div
      className={`select-none text-center uppercase font-berkeleymono antialiased font-thin text-sm dark:text-retro-black text-bone-white`}
    >
      <div className='mb-2'>
        <button
          onClick={() => {
            setDarkMode({ darkMode: darkMode });
          }}
        >
          <div
            className={`dark:bg-bone-white bg-retro-black flex-col items-center py-1 w-[40px] h-[92px] lg:w-[48px] lg:h-[100px] flex rounded-[100px] shadow-2xl`}
          >
            <div
              className={`flex justify-center rounded-full h-[32px] w-[32px] lg:h-[40px] lg:w-[40px] items-center dark:bg-bone-white bg-retro-black`}
            >
              <span
                className={`${
                  !darkMode
                    ? "translate-y-[52px] text-bone-white"
                    : "text-retro-black"
                } text-[19px] lg:text-[24px]`}
              >
                {darkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
              </span>
            </div>
            <div className='mt-auto'>
              <span
                className={`dark:text-retro-black text-bone-white text-[19px] lg:text-[24px]`}
              >
                <div
                  className={`opacity-1 transition-all ${
                    !darkMode
                      ? "-translate-y-[52px] opacity-90"
                      : "translate-y-0"
                  } flex justify-center duration-200 rounded-full dark:bg-retro-black bg-bone-white h-[32px] w-[32px] lg:h-[40px] lg:w-[40px] transparent items-center`}
                >
                  {!darkMode && <MdDarkMode />}
                </div>
              </span>
            </div>
          </div>
        </button>
      </div>
      <span
        className={`text-[10px] sm:text-[10px] md:text-[10px] lg:text-[11px] ${
          darkMode ? "animate-slide-from-left" : "animate-slide-from-right"
        }`}
      >
        {!darkMode ? "light" : "dark"}
      </span>
    </div>
  );
};
export default LightSwitch;
