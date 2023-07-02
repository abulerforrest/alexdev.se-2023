import { IPassRefs } from "../../interfaces/refs/refs";
import Navigation from "../molecules/Navigation";

const Top = (props: { passRefs: IPassRefs }) => {
  return (
    <div className='flex h-22 justify-between items-start relative ml-[46px]'>
      <Navigation passRefs={props.passRefs} />
    </div>
  );
};

export default Top;
