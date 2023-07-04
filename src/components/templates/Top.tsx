import Navigation from "../molecules/Navigation";

interface ITop {
  invertColors?: boolean;
}

const Top = (props: ITop) => {
  const { invertColors } = props;
  return (
    <div className='flex h-22 justify-between items-start relative ml-[46px]'>
      <Navigation invertColors={invertColors || false} />
    </div>
  );
};

export default Top;
