import { IoIosArrowDropdownCircle } from "react-icons/io";

interface IArrowNextSectionProps<T> {
  onClick: (event: React.MouseEvent<SVGElement>) => void;
  inverted?: boolean;
  overrideColor?: string;
}
const ArrowNextSection = (props: IArrowNextSectionProps<SVGElement>) => {
  const { inverted, overrideColor } = props;
  return (
    <span
      className={`flex rounded-full transition-all duration-500 hover:translate-y-3 hover:border-retro-black dark:hover:border-bone-white border-2 border-transparent items-center text-[48px]  lg:text-[62px] cursor-pointer -top-20 ${
        inverted
          ? "text-retro-black dark:text-bone-white hover:border-retro-black dark:hover:border-bone-white"
          : "text-bone-white dark:text-retro-black hover:border-bone-white dark:hover:border-retro-white"
      } ${
        overrideColor && `text-${overrideColor} hover:border-${overrideColor}`
      }`}
    >
      <IoIosArrowDropdownCircle onClick={props.onClick} />
    </span>
  );
};

export default ArrowNextSection;
