interface IHeadingSmashingProject {
  headline: string;
}

const HeadingSmashingProject = ({ headline }: IHeadingSmashingProject) => (
  <div className='dark:text-bone-white upper font-kabel font-black text-retro-black text-opacity-90 xl:text-heading-smashing-project-xl md:text-heading-smashing-project-md text-heading-smashing-project-sm'>
    {headline}
  </div>
);

export default HeadingSmashingProject;
