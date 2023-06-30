import ExperienceBlob from "../atoms/ExperienceBlob";

const ExperiencesList = () => {
  return (
    <div className='absolute xs:p-0 sm:p-0 xl:p-0 xs:relative -top-[55px] -order-1 w-full flex-wrap min-w-fit pl-10 opacity-80 justify-end sm:order-0 md:order-0 lg:order-1 md:flex lg:flex-col sm:flex sm:pt-0 pt-20 pr-20 h-[min-content] text-4xl text-pale-white font-md tracking-wider'>
      <ExperienceBlob label='Years of Experience' years='20+' />
      <ExperienceBlob label='Years of Javascript' years={12} />
      <ExperienceBlob label='Years of Typescript' years={5} />
    </div>
  );
};

export default ExperiencesList;
