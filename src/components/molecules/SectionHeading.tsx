import FlowingColorsSection from "../atoms/FlowingColorsSection";

const SectionHeading = ({ title }: { title: string }) => (
  <div className='mx-[30px] lg:mx-[120px] md:mx-[30px] sm:mx-[30px] flex uppercase font-kabel font-black dark:text-bone-white text-retro-black xl:text-section-heading-xl md:text-section-heading-md text-section-heading-sm mb-8 lg:mt-32 md-32 sm:mt-20 mt-10'>
    {title}
    <FlowingColorsSection />
  </div>
);

export default SectionHeading;
