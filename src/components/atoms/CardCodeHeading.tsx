import { ILanguage } from "../molecules/CardCode";

interface ICardCodeHeading {
  title: string;
  language?: ILanguage;
  version?: string;
}

const sharedClasses = `inline-flex dark:bg-dark-mode-feel mx-0.5 whitespace-nowrap bg-bone-white text-retro-black uppercase font-bold font-berkeleymono opacity-50 font-xs px-2 py-1.5 rounded-[20px] dark:text-bone-white relative bottom-1 text-[11px] sm:text-[11px] md:text-[12px] lg:text-[13px]`;

const parseBadgeLang = (lang?: ILanguage) => (
  <span className={sharedClasses}>
    {lang?.language ? lang.language : "unk"}
    {lang?.langIcon ? <span className='ml-0.5'>{lang.langIcon}</span> : ""}
  </span>
);

const parseBadgeVer = (version?: string) =>
  version ? <span className={sharedClasses}>v{version}</span> : "";

const CardCodeHeading = (props: ICardCodeHeading) => (
  <div
    style={{ lineHeight: 1 }}
    className='font-kabel text-codecard-heading-sm xl:text-codecard-heading-xl md:text-codecard-heading-md sm:text-codecard-heading-sm text-bone-white my-10 font-black antialiased select-none'
  >
    {props.title}
    <div>
      {parseBadgeLang(props.language)}
      {parseBadgeVer(props.version)}
    </div>
  </div>
);

export default CardCodeHeading;
