import ExperienceBlob from "../atoms/ExperienceBlob";
import ExperienceFlowBox from "../molecules/ExperienceFlowBox";

const Experiences = () => (
  <>
    <div className='xl:mt-[100px] mt-[60px] flex justify-center dark:text-bone-white text-retro-black'>
      <div className='flex justify-center max-w-[1300px] lg:max-w-[1600px] lg:px-[180px] md:px-[80px] px-[40px] items-center text-quote-sm md:text-quote-md lg:text-quote-lg font-kabel font-black'>
        <div className='flex-col justify-center items-centerw-fit'>
          <div className='opacity-90 flex items-center justify-center text-center'>
            "I’ve experienced startups, global teams in Hosting, Ad-Tech, and
            Investor Relations."
          </div>
          <div className='flex items-center justify-center mt-10'>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 gap-0 items-center justify-center w-full'>
              <ExperienceFlowBox label='Years of Javascript' years={16} />
              <ExperienceFlowBox label='Years of Typescript' years={8} />
              <ExperienceFlowBox label='Years of Agile' years={10} />
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-2 gap-16 xl:mt-[100px] mt-[60px]'>
              <div>
                <ExperienceBlob
                  label='The passion in crafting engaging frontend experiences'
                  text={
                    <>
                      <div>
                        As a self-taught full-stack developer with a strong
                        grounding in JavaScript, PHP, and C++, I've encountered
                        a wide range of coding challenges.
                      </div>
                      <div className='mt-4'>
                        That's why the transition to Node.js and popular
                        frameworks like React, Next.js, and Angular was a
                        natural next step for me.
                      </div>
                    </>
                  }
                />
              </div>
              <div>
                <ExperienceBlob
                  label='The thrill of transforming problems into possibilities'
                  text={
                    <>
                      <div>
                        Whenever I encounter tedious issues or problems in
                        systems, I see an opportunity for new development,
                        improvements, and automation.
                      </div>
                      <div className='mt-4'>
                        To me, it's exciting to simplify the user flow, minimize
                        the number of clicks, and make the overall user
                        experience simple and intuitive, rather than cluttered
                        and difficult to navigate.
                      </div>
                    </>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Experiences;
