import { svgImages } from "../../../data/svg";
import Svg from "../Svg";

const AlexProfilePic = () => {
  return (
    <div className='animate-pop-up flex self-end justify-start h-[640px] min-w-[max-content] transition-all ease-in-out duration-300'>
      <Svg {...svgImages[0]} />
    </div>
  );
};

export default AlexProfilePic;
