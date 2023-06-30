import { ReactNode } from "react";

interface IActionButton {
  text: string;
  icon: ReactNode;
  className: string;
  onClick?: () => void;
}

const ActionButton = (props: IActionButton) => {
  const { className, text, icon, onClick } = props;

  return (
    <button className={className} onClick={onClick}>
      {text} <span>{icon}</span>
    </button>
  );
};

export default ActionButton;
