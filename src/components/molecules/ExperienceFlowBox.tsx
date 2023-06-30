import FlowingColors from "../atoms/FlowingColors";

interface IExperienceFlowBox {
  label: string;
  years: number;
  flowEndWidth?: string;
}

const ExperienceFlowBox = (props: IExperienceFlowBox) => {
  const { label, years } = props;
  return (
    <span className='w-full flex-col'>
      <div className='flex items-center'>
        <div className='pt-[25px] w-[45px] sm:w-[105px] md:w-[150px] xl:w-[220px]'>
          <FlowingColors />
        </div>
        <div className='w-full'>
          <div className='w-fit h-[25px] ml-2 uppercase dark:text-bone-white text-retro-black font-eurostile font-normal text-experience-label-sm md:text-experience-label-md xl:text-experience-label-xl whitespace-nowrap'>
            <div className='pt-[17px]'>{label}</div>
          </div>
          <div className='flex'>
            <span className='dark:text-bone-white text-retro-black font-kabel font-black text-experience-years-sm md:text-experience-years-md xl:text-experience-years-xl mx-3'>
              {years}
            </span>
            <span className='w-full flex min-w-[10px]'>
              <FlowingColors />
            </span>
          </div>
        </div>
      </div>
    </span>
  );
};

export default ExperienceFlowBox;
