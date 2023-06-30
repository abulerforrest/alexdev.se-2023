import { assetIcons } from "../../../assets/svg/assetIcons";
import TechniquesIcon from "../atoms/TechniquesIcon";

const Techniques = () => {
  const sharedIconClasses =
    "transition-all duration-300 dark:fill-retro-black fill-moody-blues";
  return (
    <div className='py-[72px] w-full bg-[#d9d9d9] dark:bg-exotic-fanta h-fit mt-32'>
      <div>
        <div className='flex justify-center font-kabel font-bold text-retro-black dark:text-retro-black xl:text-techniques-heading-xl text-techniques-heading-sm mb-8'>
          <div className='flex justify-center mx-20 w-1/2 text-center'>
            I’m well-versed in the following techniques
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='grid grid-cols-3 gap-2 xl:grid-cols-6 md:grid-cols-4 grid-rows-2'>
          <TechniquesIcon
            title='Icon React'
            desc='React Icon Svg'
            pathClassName={sharedIconClasses}
          >
            {assetIcons.IconReactSvg}
          </TechniquesIcon>
          <TechniquesIcon
            title='Icon Next'
            desc='Next Icon Svg'
            pathClassName={sharedIconClasses}
          >
            {assetIcons.IconNextSvg}
          </TechniquesIcon>
          <TechniquesIcon
            title='Icon JS'
            desc='JS Icon Svg'
            pathClassName={sharedIconClasses}
          >
            {assetIcons.IconJSSvg}
          </TechniquesIcon>
          <TechniquesIcon
            title='Icon Linux'
            desc='Linux Icon Svg'
            pathClassName={sharedIconClasses}
          >
            {assetIcons.IconLinuxSvg}
          </TechniquesIcon>

          <TechniquesIcon
            title='Icon Git'
            desc='Git Icon Svg'
            pathClassName={sharedIconClasses}
          >
            {assetIcons.IconGitSvg}
          </TechniquesIcon>
          <TechniquesIcon
            title='Icon Angular'
            desc='Angular Icon Svg'
            pathClassName={sharedIconClasses}
          >
            {assetIcons.IconAngularSvg}
          </TechniquesIcon>
          <TechniquesIcon
            title='Icon Deno'
            desc='Deno Icon Svg'
            pathClassName={sharedIconClasses}
          >
            {assetIcons.IconDenoSvg}
          </TechniquesIcon>
          <TechniquesIcon
            title='Icon TS'
            desc='TS Icon Svg'
            pathClassName={sharedIconClasses}
          >
            {assetIcons.IconTSSvg}
          </TechniquesIcon>
          <TechniquesIcon
            title='Icon Redux'
            desc='Redux Icon Svg'
            pathClassName={sharedIconClasses}
          >
            {assetIcons.IconReduxSvg}
          </TechniquesIcon>
          <TechniquesIcon
            title='Icon PHP'
            desc='PHP Icon Svg'
            pathClassName={sharedIconClasses}
          >
            {assetIcons.IconPHPSvg}
          </TechniquesIcon>
          <TechniquesIcon
            title='Icon MUI'
            desc='MUI Icon Svg'
            pathClassName={sharedIconClasses}
          >
            {assetIcons.IconMUISvg}
          </TechniquesIcon>
          <TechniquesIcon
            title='Icon Docker'
            desc='Docker Icon Svg'
            pathClassName={sharedIconClasses}
          >
            {assetIcons.IconDockerSvg}
          </TechniquesIcon>
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <div className='grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5'>
          <TechniquesIcon
            title='Icon Node JS'
            desc='Node JS Icon Svg'
            pathClassName={sharedIconClasses}
          >
            {assetIcons.IconNodeJSSvg}
          </TechniquesIcon>
          <TechniquesIcon
            title='Icon Figma'
            desc='Figma Icon Svg'
            pathClassName={sharedIconClasses}
          >
            {assetIcons.IconFigmaSvg}
          </TechniquesIcon>
          <TechniquesIcon
            title='Icon PS'
            desc='PS Icon Svg'
            pathClassName={sharedIconClasses}
          >
            {assetIcons.IconPSSvg}
          </TechniquesIcon>
          <TechniquesIcon
            title='Icon WP'
            desc='WP Icon Svg'
            pathClassName={sharedIconClasses}
          >
            {assetIcons.IconWPSvg}
          </TechniquesIcon>
          <TechniquesIcon
            title='Icon Golang'
            desc='Golang Icon Svg'
            pathClassName={sharedIconClasses}
          >
            {assetIcons.IconGoSvg}
          </TechniquesIcon>
        </div>
      </div>
    </div>
  );
};

export default Techniques;
