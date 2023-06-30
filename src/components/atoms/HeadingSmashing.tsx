interface IHeadingSmashing {
  headline: string;
}

const HeadingSmashing = ({ headline }: IHeadingSmashing) => (
  <div className='dark:text-bone-white font-kabel font-bold text-retro-black xl:text-heading-smashing-xl md:text-heading-smashing-md text-heading-smashing-sm'>
    {headline}
  </div>
);

export default HeadingSmashing;
