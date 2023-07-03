const WelcomeText = () => {
  return (
    <>
      <span className='select-none font-bold animate-pop-up font-eurostile lg:text-2xl md:text-xl text-md px-2 text-bone-white dark:text-retro-black bg-bone-white dark:bg-bone-white bg-opacity-25 py-1 rounded-tr-md'>
        {`bash >`}
        <span className='animate-pulse'>_</span>
      </span>
      <div className='uppercase mt-2 text-welcome-heading-sm md:text-welcome-heading-md lg:text-welcome-heading-xl lg:min-w-[480px] font-kabel text-bone-white dark:text-retro-black font-black'>
        Hi👋 I&apos;m Alex. A fullstack jedi by day, composer by night
      </div>
      <div className='relative my-[30px] max-w-[746px] text-welcome-text-sm md:text-welcome-text-md lg:text-welcome-text-xl text-base font-light text-bone-white dark:text-retro-black font-eurostile'>
        I&apos;m a full-stack software developer with a passion for creating
        smart and responsive web solutions. My portfolio showcases my expertise
        in coding and creativity, from sleek websites to innovative
        applications. Let&apos;s connect and explore how I can help bring your
        ideas to life!
      </div>
    </>
  );
};

export default WelcomeText;
