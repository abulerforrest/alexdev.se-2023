export default function Page() {
  return (
    <div className='flex w-full justify-center items-center'>
      <div className='flex-col'>
        <img
          src='https://firebasestorage.googleapis.com/v0/b/alexdev-se.appspot.com/o/TetrisMainLogo.png?alt=media&token=dcf00c44-3f8e-4eea-862c-2fc98932521a'
          className='object-contain w-fit h-fit animate-pop-up'
        />
        <div className='flex w-full justify-center mt-3'>
          <div className='select-none bg-inherit text-sm md:text-xl text-[#E13E2A] font-bold w-min py-2 px-4 rounded-full border-2 whitespace-nowrap font-eurostile uppercase'>
            Under Construction / Coming soon
          </div>
        </div>
      </div>
    </div>
  );
}
