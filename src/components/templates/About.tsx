import SectionHeading from "../molecules/SectionHeading";

const About = () => (
  <>
    <SectionHeading title='About' />
    <div className='flex justify-center w-full'>
      <div className='lg:pt-20 pt-10 mx-8 lg:mx-20 md:mx-20 sm:mx-14 lg:px-32 font-eurostile text-retro-black dark:text-bone-white text-about-text-sm sm:text-about-text-sm md:text-about-text-md xl:text-about-text-xl'>
        <p className='mb-7'>
          As a driven and ambitious individual with a passion for computers and
          music, I&apos;ve had an exciting journey to becoming a full-time
          developer. Starting at just 14 years old, I dove into website
          projects, programming, and design, and ran several music projects over
          the years.
        </p>
        <p className='mb-7'>
          Through my career, I&apos;ve worked in roles that involved technical
          troubleshooting, sales, customer service, and programming websites.
          Working alongside amazing teams, I&apos;ve tackled the most exciting
          challenges and honed my skills.
        </p>
        <p className='mb-7'>
          One of my most memorable experiences was as a Technical Support
          Engineer in the Ad Tech/Digital advert business at Ooyala Inc. This
          role allowed me to work with large clients globally on time-critical
          and technically advanced projects.
        </p>
        <p className='mb-7'>
          Today, I&apos;m a full-time frontend developer at Cartina, having
          previously worked in the fast-paced Investor Relations industry at
          Modular Finance. My journey - has been an incredible learning
          experience, providing me with the knowledge and experience to excel in
          my role.
        </p>
      </div>
    </div>
  </>
);

export default About;
