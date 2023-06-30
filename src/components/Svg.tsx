export interface ISvgProps {
  id: string;
  href: string;
  svgHeight: string;
  svgWidth: string;
  imgHeight: string;
  imgWidth: string;
  offsetX: string;
  offsetY: string;
  transform: string;
}

const svgDefaultProps = {
  version: "1.2",
  xmlns: "http://www.w3.org/2000/svg",
};

const Svg = ({
  id,
  href,
  svgHeight,
  svgWidth,
  imgHeight,
  imgWidth,
  offsetX,
  offsetY,
  transform,
}: ISvgProps) => {
  return (
    <div
      className=''
      style={{ position: "relative", right: offsetX, top: offsetY }}
    >
      <svg
        className='xs:-top-[150px] xs:w-[300px] xs:h-[1000px] sm:-top-[180px] w-[300px] h-full lg:w-[350px] lg:h-[1200px] relative lg:-top-[250px]'
        {...svgDefaultProps}
      >
        <defs>
          <image
            className='w-[300px] h-full xs:w-[300px] xs:h-[1000px] lg:w-[350px] lg:h-[1200px]'
            id={id}
            href={href}
          />
        </defs>
        <use
          stroke='#000000'
          href={`#${id}`}
          x='0'
          y='0'
          transform={transform}
        />
      </svg>
    </div>
  );
};

export default Svg;
