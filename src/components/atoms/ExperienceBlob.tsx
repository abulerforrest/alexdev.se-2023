interface IExperienceBlob {
  label: string;
  text: React.ReactNode;
}

const ExperienceBlob = (props: IExperienceBlob) => {
  return (
    <div>
      <div className='text-experience-blob-heading-sm xl:text-experience-blob-heading-xl font-black font-kabel mb-7'>
        {props.label}
      </div>
      <div className='text-experience-blob-text-sm xl:text-experience-blob-text-xl font-normal font-eurostile'>
        {props.text}
      </div>
    </div>
  );
};

export default ExperienceBlob;
