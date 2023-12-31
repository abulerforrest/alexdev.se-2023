import { ISvgIconProps } from "../../src/components/atoms/TechniquesIcon";

const IconMui = (props: ISvgIconProps) => (
  <svg
    className='h-[40px] md:h-[50px] xl:h-auto w-auto'
    role='img'
    width='56'
    height='45'
    viewBox='0 0 56 45'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <title id='Icon-mui-title0'>{props.title}</title>
    <desc id='Icon-mui-desc0'>{props.desc}</desc>
    <path
      d='M17.1924 33.188V29.828L33.4508 20.4523V7.77081L19.9022 15.6019L6.35353 7.77081V23.4059L3.64381 24.9776L0.934082 23.4059V1.72813L3.83349 0.0480957L19.9022 9.34245L30.5514 3.19138L35.9708 0.0480957L38.8702 1.72813V23.5685L25.1048 31.5351L36.1605 37.8488L49.7091 29.9906V17.9865L52.4189 16.4148L55.1286 17.9865V33.1067L36.1605 44.1082L17.1924 33.2693M55.1286 14.5993L52.4189 16.171L49.7091 14.5993V11.4289L52.4189 9.8573L55.1286 11.4289V14.5993Z'
      fill='#5D594F'
      className={props.pathClassName}
    />
  </svg>
);
export default IconMui;
