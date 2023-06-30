import LaptopImage from "../atoms/LaptopImage";

const Process = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div className='w-full flex pt-20 xl:ml-[80px]'>
        <div className='xl:px-[120px] md:px-[100px] lg:px[120px] px-[40px]'>
          <div className='text-process-blob-heading-sm xl:text-process-blob-heading-xl font-black text-retro-black dark:text-bone-white font-kabel mb-7'>
            An iterative and creative process
          </div>
          <div className='dark:text-bone-white text-process-blob-text-sm xl:text-process-blob-text-xl font-normal font-eurostile'>
            <div>
              With a background in music composition, I'm accustomed to watching
              a composition take shape, much like the process of building a
              website's frontend code. It's a step-by-step process, with each
              piece coming together to create a cohesive whole.
            </div>
            <div className='mt-4'>
              That's why I'm so passionate about frontend development - I love
              the way it feels to create a seamless, user-friendly experience
              for visitors to a website. By combining my technical skills with
              my creative vision, I strive to build stunning and functional
              websites that leave a lasting impression on users.
            </div>
          </div>
        </div>
      </div>
      <div className='flex order-first md:order-last justify-center items-center pt-4'>
        <LaptopImage />
      </div>
    </div>
  );
};

export default Process;
