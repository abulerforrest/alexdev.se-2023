const ColorSwitcher = () => {
  return (
    <>
      <div className='flex pt-1'>
        <span className='select-none'>COLOR</span>
        <div className='cursor-pointer ml-2 rounded-full h-4.5 w-4.5 bg-orange-500 shadow-subtle-glow-0.5 border-midnight border-4 border-opacity-80'></div>
        <div className='cursor-pointer ml-2 rounded-full h-4.5 w-4.5 bg-purple-500 shadow-subtle-glow-0.5 border-midnight border-4 border-opacity-80 mr-3'></div>
      </div>
      <div className='mt-1 h-[3px] w-[0%] bg-midnight transition-all bg-opacity-20 rounded-lg'></div>
    </>
  );
};

export default ColorSwitcher;
