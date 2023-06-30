import { SiDeno, SiDotnet, SiJavascript, SiTypescript } from "react-icons/si";
import { code } from "../../code";
import HeadingSmashing from "../atoms/HeadingSmashing";
import TextSmashing from "../atoms/TextSmashing";
import CardCode, { CARD_COLORSCHEME, ILANG } from "../molecules/CardCode";
import SectionHeading from "../molecules/SectionHeading";

const flowBgPurple =
  'bg-center w-full bg-[url("../assets/svg/svg-flow-purple.svg")] h-full bg-no-repeat bg-cover rounded-[20px]';
const flowBgBrown =
  'bg-center w-full bg-[url("../assets/svg/svg-flow-brown.svg")] h-full bg-no-repeat bg-cover rounded-[20px]';
const flowBgGreen =
  'bg-center w-full bg-[url("../assets/svg/svg-flow-green.svg")] h-full bg-no-repeat bg-cover rounded-[20px]';
const flowBgBlue =
  'bg-center w-full bg-[url("../assets/svg/svg-flow-blue.svg")] h-full bg-no-repeat bg-cover rounded-[20px]';

const Code = () => (
  <>
    <SectionHeading title='Code' />
    <div className='flex justify-center w-full text-center'>
      <div className='flex-col mx-10'>
        <HeadingSmashing headline='Here’s some of my crunchy code for you to explore.' />
        <div className='mb-8 mt-4 mx-10 max-w-2xl'>
          <TextSmashing text="It's a step-by-step process, with each piece coming together to create a cohesive whole." />
        </div>
      </div>
    </div>
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <CardCode
          title='WordRazer II'
          flowBg={flowBgBlue}
          colorScheme={CARD_COLORSCHEME.BLUE}
          code={code[1]}
          language={{
            language: ILANG.TSX,
            langIcon: <SiTypescript className='rounded-full' />,
          }}
          version='0.01'
          filename='JAJAJA.TSX'
        />
        <CardCode
          title='Mr. Carte Slack Bot'
          flowBg={flowBgGreen}
          colorScheme={CARD_COLORSCHEME.GREEN}
          code={code[2]}
          language={{
            language: ILANG.DENO,
            langIcon: <SiDeno className='rounded-full' />,
          }}
          version='1.21'
        />
        <CardCode
          title='React 2.5'
          flowBg={flowBgPurple}
          colorScheme={CARD_COLORSCHEME.ORANGE}
          language={{
            language: ILANG.JSX,
            langIcon: <SiJavascript className='rounded-full' />,
          }}
          version='1'
        />
        <CardCode
          title='Chocolate Fury VS Awesome Scooter'
          flowBg={flowBgBrown}
          colorScheme={CARD_COLORSCHEME.BROWN}
          code={code[0]}
          language={{
            language: ILANG[".NET"],
            langIcon: <SiDotnet className='rounded-full' />,
          }}
          version='0.03'
        />
        <CardCode
          title='Chocolate Fury'
          flowBg={flowBgPurple}
          colorScheme={CARD_COLORSCHEME.FANTA}
          code={code[0]}
          version='0.11'
        />
      </div>
    </div>
  </>
);

export default Code;
