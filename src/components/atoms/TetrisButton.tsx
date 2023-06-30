import { ReactNode } from "react";

interface ITetrisButton {
  text: string;
  icon: ReactNode;
  onClick?: () => void;
}

const ActionButton = (props: ITetrisButton) => {
  const { text, icon, onClick } = props;

  return (
    <button
      className={`flex select-none items-center justify-center uppercase lg:px-9 md:px-7 px-6 lg:h-[68px] md:h-[54px] h-[48px] rounded-[200px] bg-retro-black text-its-called-yellow font-kabel font-black text-button-sm md:text-button-md lg:text-button-xl`}
      onClick={onClick}
    >
      {text} <span>{icon}</span>
    </button>
  );
};

export default ActionButton;
