interface IMenuItem {
  label: string;
  itemColor: string;
  onClick: () => void;
}

const MenuItem = (props: IMenuItem) => {
  return (
    <li
      onClick={props.onClick}
      className='text-navigation-labels-xl dark:text-bone-white text-retro-black group font-kabel font-black uppercase'
    >
      <div className='cursor-pointer'>{props.label}</div>
    </li>
  );
};

export default MenuItem;
