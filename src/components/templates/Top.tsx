"use client";

import { LOGOVARIATIONS } from "../atoms/Logo";
import Navigation from "../molecules/Navigation";
interface ITop {
  invertColors?: boolean;
}

const Top = (props: ITop) => {
  const { invertColors } = props;
  return (
    <div className='flex h-22 justify-between items-start relative ml-[46px]'>
      <Navigation
        logoStyle={LOGOVARIATIONS.DARK}
        invertColors={invertColors || false}
      />
    </div>
  );
};

export default Top;
