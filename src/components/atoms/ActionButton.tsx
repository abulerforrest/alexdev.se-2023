import Link from "next/link";
import { ReactNode } from "react";

interface IActionButton {
  text: string;
  icon: ReactNode;
  className: string;
  href: string | undefined;
}

const ActionButton = (props: IActionButton) => {
  const { className, text, icon, href } = props;

  return (
    <Link href={href || "#"} target='_blank'>
      <button className={className}>
        {text} <span>{icon}</span>
      </button>
    </Link>
  );
};

export default ActionButton;
