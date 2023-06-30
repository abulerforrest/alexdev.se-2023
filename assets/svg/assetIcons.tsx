import IconReactSvg from "./IconReact";
import IconNextSvg from "./IconNext";
import IconJSSvg from "./IconJs";
import IconLinuxSvg from "./IconLinux";
import IconGitSvg from "./IconGit";
import IconAngularSvg from "./IconAngular";
import IconDenoSvg from "./IconDeno";
import IconTSSvg from "./IconTs";
import IconReduxSvg from "./IconRedux";
import IconPHPSvg from "./IconPhp";
import IconMUISvg from "./IconMui";
import IconDockerSvg from "./IconDocker";
import IconNodeJSSvg from "./IconNodeJs";
import IconFigmaSvg from "./IconFigma";
import IconPSSvg from "./IconPs";
import IconWPSvg from "./IconWp";
import IconGoSvg from "./IconGo";
import { ISvgIconProps } from "../../src/components/atoms/TechniquesIcon";

interface IAssetIcons {
  [key: string]: (props: ISvgIconProps) => JSX.Element;
}

export const assetIcons: IAssetIcons = {
  IconReactSvg,
  IconNextSvg,
  IconJSSvg,
  IconLinuxSvg,
  IconGitSvg,
  IconAngularSvg,
  IconDenoSvg,
  IconTSSvg,
  IconReduxSvg,
  IconPHPSvg,
  IconMUISvg,
  IconDockerSvg,
  IconNodeJSSvg,
  IconFigmaSvg,
  IconPSSvg,
  IconWPSvg,
  IconGoSvg,
};
