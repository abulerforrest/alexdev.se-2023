import { SVGAttributes } from "react";

interface ISvgFlow {
  opacity: number;
  color: string;
  viewBox: string;
  className: string;
}

const SvgFlow = ({ viewBox, opacity, color, className }: ISvgFlow) => (
  <svg
    viewBox={viewBox}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <path
      d='M242.041 145.873C109.518 63.1933 14.5024 -148.426 462.078 -1.27693C909.653 145.873 462.078 357 462.078 357H0C0 357 374.563 228.552 242.041 145.873Z'
      fill={color}
      fillOpacity={opacity}
    />
  </svg>
);

export default SvgFlow;
