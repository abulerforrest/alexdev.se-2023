import Link from "next/link";

interface IMenuItem {
  label: string;
  itemColor: string;
  isCurrent: boolean;
  invertColors?: boolean;
  href: string;
  onClick?: () => void;
}

const MenuItem = (props: IMenuItem) => {
  const { isCurrent, invertColors, href, label } = props;
  return (
    <li
      onClick={props.onClick}
      className={`group dark:text-bone-white flex h-1/2 items-center text-navigation-labels-xl ${
        invertColors && "text-bone-white"
      }  group font-kabel font-black uppercase`}
    >
      <Link href={href} prefetch>
        <div className='cursor-pointer'>{label}</div>
        <div
          className={`transition-all duration-300 bg-orange-dream dark:bg-exotic-fanta group-hover:w-full h-1 rounded-full ${
            isCurrent
              ? "w-full animation-delay-300 animate-slide-from-right"
              : "w-0"
          }`}
        ></div>
      </Link>
    </li>
  );
};

export default MenuItem;
