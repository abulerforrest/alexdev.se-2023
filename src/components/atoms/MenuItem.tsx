interface IMenuItem {
  label: string;
  itemColor: string;
  isCurrent: boolean;
  invertColors?: boolean;
  onClick: (event: React.MouseEvent<HTMLLIElement>) => void;
}

const MenuItem = (props: IMenuItem) => {
  const { isCurrent, invertColors } = props;
  return (
    <li
      onClick={props.onClick}
      className={`dark:text-bone-white hover:border-opacity-80 hover:border-b-orange-dream dark:hover:border-b-exotic-fanta flex border-opacity-0 duration-300 transition-all h-1/2 items-center pb-[1rem] border-b-4 border-transparent ${
        isCurrent && "border-b-orange-dream border-opacity-100"
      } text-navigation-labels-xl ${
        invertColors && "text-bone-white"
      }  group font-kabel font-black uppercase`}
    >
      <div className='cursor-pointer'>{props.label}</div>
    </li>
  );
};

export default MenuItem;
