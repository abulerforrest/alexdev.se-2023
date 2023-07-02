import { IoLogoGameControllerB } from "react-icons/io";
import TetrisButton from "../atoms/TetrisButton";
import { IPassRefs } from "../../interfaces/refs/refs";

interface IPlayProps {}

const Play = (props: IPlayProps) => {
  return (
    <>
      <div className='w-full bg-its-called-yellow mt-20 py-32 xl:h-[340px'>
        <div className='flex justify-center font-kabel font-black text-retro-black xl:text-play-heading-xl md:text-play-heading-md text-play-heading-sm mb-8'>
          <div className='flex justify-center mx-20 w-1/2 text-center'>
            This my Tetris game and it’s quite awesome.
          </div>
        </div>
        <div className='w-full flex justify-center'>
          <TetrisButton
            text='Play Tetris'
            icon={
              <IoLogoGameControllerB
                className={`lg:text-[30px] md:text-[22px] text-[20px] ml-1.5 text-its-called-yellow`}
              />
            }
            onClick={() => {
              console.log("clicked!");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Play;
