import Navigation from "../molecules/Navigation";
import { IPassRefs } from "../../../pages";

const Top = (props: IPassRefs) => {
  return (
    <div className='flex h-22 justify-between items-start relative ml-[46px]'>
      <Navigation passRefs={props.passRefs} />
    </div>
  );
};

export default Top;
