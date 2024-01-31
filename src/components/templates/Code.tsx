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
          <TextSmashing text='From bits, ideas and pieces to full blown website projects, here are some of the goodies.' />
        </div>
      </div>
    </div>
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <CardCode
          title='Alexdev™'
          flowBg={flowBgBlue}
          colorScheme={CARD_COLORSCHEME.BLUE}
          code={code[1]}
          language={{
            language: ILANG.TSX,
            langIcon: <SiTypescript className='rounded-full' />,
          }}
          launchLink=''
          githubLink='https://github.com/abulerforrest/alexdev.se-2023'
          version='0.02'
          filename='Code.tsx'
          subline='alexdev™ is this site - a project that was very fun to dive into!'
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
          launchLink=''
          githubLink='https://github.com/cartina-tech/mr-carte-slack-bot'
          version='0.01'
          subline='Exploring Deno, making a fun and simple Slack bot for Cartina, to help with reminders and serving information.'
        />
        <CardCode
          title='emilia.buler-forrest.se'
          flowBg={flowBgPurple}
          code={code[3]}
          colorScheme={CARD_COLORSCHEME.ORANGE}
          language={{
            language: ILANG.TSX,
            langIcon: <SiTypescript className='rounded-full' />,
          }}
          launchLink='https://emilia.buler-forrest.se'
          githubLink='https://github.com/abulerforrest/emilia.buler-forrest.se'
          version='1'
          subline={`A swiftly put together portfolio site with Next JS, Typescript, showcasing UX and Service Design projects.`}
        />
        <CardCode
          title='zalzamusic^V2'
          flowBg={flowBgBrown}
          colorScheme={CARD_COLORSCHEME.BROWN}
          code={code[4]}
          language={{
            language: ILANG["JSX"],
            langIcon: <SiDotnet className='rounded-full' />,
          }}
          launchLink='https://zalzamusic-v2.com'
          githubLink='https://github.com/abulerforrest/zalzamusic-v2'
          version='0.03'
          subline={`zalzamusic^V2 is my music site, where I present my latest music releases as the artist Zalza. I experimented a lot making this website, using HTML5, Three JS and to enable music previews.`}
        />
        {/* <CardCode
          title='Chocolate Fury'
          flowBg={flowBgPurple}
          colorScheme={CARD_COLORSCHEME.FANTA}
          code={code[0]}
          version='0.11'
        /> */}
      </div>
    </div>
  </>
);

export default Code;
