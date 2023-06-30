const Tag = ({ title }: { title: string }) => {
  return (
    <div className='text-[12px] font-eurostile font-thin inline-flex items-center uppercase px-3 py-1 bg-retro-black dark:bg-dark-mode-feel text-bone-white rounded-full'>
      #{title}
    </div>
  );
};

export default Tag;
