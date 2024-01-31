import { useState } from "react";
import CardCodeHeading from "../atoms/CardCodeHeading";
import React from "react";
import { Highlight, themes } from "prism-react-renderer";
import { ICode } from "../../code";
import { SiGithub } from "react-icons/si";
import { FaRocket } from "react-icons/fa";
import Link from "next/link";

export const ILANG = {
  JS: "JS",
  JSX: "JSX",
  PHP: "PHP",
  TSX: "TSX",
  GO: "GO",
  JAVA: "JAVA",
  ".NET": ".NET",
  DENO: "DENO",
} as const;

export interface ILanguage {
  language?: ILangType | undefined;
  langIcon?: React.ReactNode | undefined;
}

export type ILangType = (typeof ILANG)[keyof typeof ILANG];

export const CARD_COLORSCHEME = {
  PURPLE: "PURPLE",
  GREEN: "GREEN",
  BLUE: "BLUE",
  BROWN: "BROWN",
  ORANGE: "ORANGE",
  YELLOW: "YELLOW",
  FANTA: "FANTA",
} as const;

type CARD_COLORSCHEME =
  (typeof CARD_COLORSCHEME)[keyof typeof CARD_COLORSCHEME];

interface ICardCode {
  colorScheme: CARD_COLORSCHEME;
  code?: ICode<string, string>;
  language?: ILanguage;
  flowBg: string;
  title: string;
  version?: string;
  filename?: string;
  subline?: string;
  launchLink?: string;
  githubLink?: string;
}

const gradients = {
  PURPLE: "bg-gradient-to-t from-[#9365CF] to-[#7339BD]",
  GREEN: "bg-gradient-to-t from-mighty-greens to-[#2F800E]",
  BLUE: "bg-gradient-to-t from-startling-blues to-[#3A8ECE]",
  BROWN: "bg-gradient-to-t from-[#6C6249] to-[#5D594F]",
  FANTA: "bg-gradient-to-t from-exotic-fanta to-[#eb6c56]",
  ORANGE: "bg-gradient-to-t from-orange-dream to-orange-dream",
  YELLOW: "bg-gradient-to-t from-its-called-yellow to-[#f9c33c]",
};

const CardCode = (props: ICardCode) => {
  const color = gradients[props.colorScheme];
  const [expand, setExpanded] = useState(false);
  let c: Array<string> = [];
  let codeString = "";
  if (props.code) {
    let { code } = props.code;
    codeString = code;
  }

  const parseCode = (code: string) => {
    c = code.split(/\r?\n/);
    const minLength = 2;
    const maxLength = 16;
    const limit = expand
      ? c.length < maxLength
        ? c.length
        : maxLength
      : minLength;
    return (
      <>
        <Highlight theme={themes.jettwaveDark} code={code} language='tsx'>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              style={style}
              className={`${className} md:mx-6 mx-6 xl:mx-6 font-berkeleymono mb-4 antialiased`}
            >
              {tokens.map((line, i) => {
                if (c.length === 1) {
                  return (
                    <span
                      key={i}
                      className='select none text-white font-berkeleymono uppercase'
                    >
                      === No Code Preview ===
                    </span>
                  );
                } else {
                  if (i < limit) {
                    return (
                      <div
                        key={i}
                        {...getLineProps({ line })}
                        className='whitespace-pre-wrap'
                      >
                        <span className='animate-slide-from-left select-none mr-4'>
                          {i + 1}
                        </span>
                        {line.map((token, key) => (
                          <span key={key} className='overflow-x-scroll'>
                            <span key={key} {...getTokenProps({ token })} />
                          </span>
                        ))}
                      </div>
                    );
                  }
                }
              })}
            </pre>
          )}
        </Highlight>
        <div className='mb-10 md:mx-6 mx-6 xl:mx-6 text-[#E5B336] font-berkeleymono uppercase text-[15px] '>
          <span className='select-none'>
            {c.length > 1 &&
              `${props.filename ? props.filename : `----`} [${limit}/${
                c.length
              }] `}
          </span>
          <button
            className=''
            onClick={(e) => {
              e.preventDefault();
              setExpanded(!expand);
            }}
          >
            <span className='whitespace-nowrap'>
              {expand ? "<-- TRUNCATE" : c.length > 1 ? "EXPAND -->" : ""}
            </span>
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      <div className='flex w-full justify-center p-6'>
        <div className='dark:bg-commodore-64-grey bg-bone-white group flex flex-wrap flex-grow-0 rounded-[20px] w-[500px] min-w-fit max-w-md h-min shadow-3xl'>
          <div className='flex-col w-full'>
            <div
              className={`bg-gradient-to-t ${color} flex rounded-[20px] min-w-full w-full h-[auto]`}
            >
              <div className={`${props.flowBg}`}>
                <div className='md:mx-10 mx-8 xl:mx-12 text-[14px] sm:text-[16px] md:text-[15px] lg:md:text-[13px] antialiased tracking-wide'>
                  <CardCodeHeading
                    language={props.language}
                    title={props.title}
                    version={props.version}
                  />
                  <div className='-ml-5'>{parseCode(codeString)}</div>
                </div>
              </div>
            </div>
            <div className='relative flex gap-4 -top-[1.50rem] justify-end pr-2'>
              {props.githubLink && props.githubLink !== "" && (
                <Link href={props.githubLink} target='_blank'>
                  <button
                    style={{
                      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    }}
                    className='select-none antialised flex items-center justify-center gap-1 max-h-[48px] text-[17px] text-retro-black dark:text-its-called-yellow font-kabel uppercase font-black bg-its-called-yellow dark:bg-retro-black hover:opacity-95 py-2 pl-4 pr-3 rounded-full'
                  >
                    GITHUB <SiGithub size={24} />
                  </button>
                </Link>
              )}
              {props.launchLink && props.launchLink !== "" && (
                <Link href={props.launchLink} target='_blank'>
                  <button
                    style={{
                      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    }}
                    className='select-none antialised flex items-center justify-center gap-1 max-h-[48px] text-[17px] text-retro-black dark:text-bone-white font-kabel uppercase font-black bg-bone-white dark:bg-retro-black hover:opacity-95 py-2 pl-4 pr-3 rounded-full'
                  >
                    LAUNCH <FaRocket color='#EEB100' size={18} />
                  </button>
                </Link>
              )}
            </div>

            <div className='pb-4 duration-600 h-max text-center z-20 mb-1 mx-12 flex flex-wrap font-eurostile rounded-lg dark:text-bone-white text-retro-black justify-center items-center'>
              {props.subline}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardCode;
