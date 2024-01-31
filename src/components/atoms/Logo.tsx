import Link from "next/link";

const spriteCommonStyle = "h-1 height w-full mb-0.5 rounded-md";

export const LOGOVARIATIONS = {
  DARK: "DARK",
  LIGHT: "LIGHT",
} as const;

export type LogoStyleType =
  (typeof LOGOVARIATIONS)[keyof typeof LOGOVARIATIONS];

interface ILogo {
  logoStyle?: LogoStyleType;
  href: string;
  invert?: boolean;
  onClick?: (event: any) => void;
}

const Logo = ({ logoStyle, href, invert, onClick }: ILogo) => {
  invert && (logoStyle = LOGOVARIATIONS.LIGHT);
  return (
    <Link onClick={onClick} href={href} className='items-center xl:flex'>
      <div className='select-none w-min'>
        <div
          className={`dark:text-bone-white lowercase ${
            logoStyle === LOGOVARIATIONS.LIGHT
              ? "text-bone-white"
              : "text-retro-black"
          } text-logo-md transition-all duration-200 lg:text-logo-xl font-kabel font-bold -mb-2`}
        >
          alexdev
        </div>
        <div
          className={`animate-grow-from-left bg-exotic-fanta ${spriteCommonStyle}`}
        />
        <div
          className={`animate-grow-from-left bg-orange-dream ${spriteCommonStyle}`}
        />
        <div
          className={`animate-grow-from-left bg-its-called-yellow ${spriteCommonStyle}`}
        />
        <div
          className={`animate-grow-from-left bg-mighty-greens ${spriteCommonStyle}`}
        />
        <div
          className={`animate-grow-from-left bg-startling-blues ${spriteCommonStyle}`}
        />
      </div>
    </Link>
  );
};

export default Logo;
