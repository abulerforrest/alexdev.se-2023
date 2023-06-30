export interface ISvgIconProps {
  title: string;
  desc: string;
  pathClassName: string;
}

export interface IIconReact extends ISvgIconProps {
  children: (props: ISvgIconProps) => JSX.Element;
}

const IconReact = ({ children, title, desc, pathClassName }: IIconReact) => {
  return (
    <div className='h-16 md:h-28 xl:h-32 flex justify-center items-center'>
      <div className='xl:w-[140px] md:w-[80px] m-[58px] w-[50px] flex justify-center items-center'>
        {children({ title, desc, pathClassName })}
      </div>
    </div>
  );
};

export default IconReact;
