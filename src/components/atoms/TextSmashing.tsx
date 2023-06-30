interface ITextSmashing {
  text: string;
}

const TextSmashing = ({ text }: ITextSmashing) => (
  <div className='font-eurostile center dark:text-bone-white text-retro-black xl:text-smashing-xl md:text-smashing-md text-smashing-sm'>
    {text}
  </div>
);

export default TextSmashing;
