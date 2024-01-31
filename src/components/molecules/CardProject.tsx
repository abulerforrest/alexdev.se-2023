import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";

import SplashPlaceholder from "../../../public/static/splash-placeholder.png";
import Tag from "../atoms/Tag";
import Link from "next/link";
import { alexDevStore } from "../../store/store";
import { useStore } from "zustand";

interface ITag {
  title: string;
}

interface ICardProject {
  title: string;
  desc: string;
  id: string;
  slug: string;
  splashImg: string;
  launchUrl?: string;
  tags?: ITag[];
}

const CardProject = (props: ICardProject) => {
  const store = useStore(alexDevStore);
  const { setCurrentSection, setCurrentRef, setCurrentProject } = store;

  const handleProjectClick = (
    _event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    setCurrentSection(null!);
    setCurrentRef(null!);
  };

  return (
    <div>
      <div className='p-5 max-w-lg sm:max-w-3xl md:max-w-md lg:max-w-1xl rounded-lg'>
        <div className='py-5 font-kabel font-black dark:text-bone-white text-project-heading-sm sm:text-project-heading-sm md:xl:text-project-heading-md xl:text-project-heading-xl text-retro-black'>
          <Link href={`/showcase/${props.slug}`} prefetch>
            {props.title}
          </Link>
        </div>
        <div
          onClick={(event: React.MouseEvent<HTMLImageElement, MouseEvent>) =>
            handleProjectClick(event)
          }
        >
          <Link href={`/showcase/${props.slug}`}>
            <Image
              className='h-min object-contain rounded-xl animation-delay-200 animate-fade-in hover:opacity-90 hover:transition-all transition ease-in-out delay-150 duration-200'
              src={props.splashImg ?? SplashPlaceholder}
              loading='lazy'
              width={800}
              height={600}
              alt={`splash-image for ${props.id}`}
            />
          </Link>
        </div>
        <div className='py-5'>
          <div className='duration-600 z-20 mb-6 flex flex-wrap font-eurostile rounded-lg dark:text-bone-white text-retro-black items-center'>
            {props.desc}
          </div>
          <Link href={`/showcase/${props.slug}`}>
            <button
              style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
              className='select-none antialised flex items-center justify-center gap-1 max-h-[48px] text-[17px] text-retro-black dark:text-its-called-yellow font-kabel uppercase font-black bg-its-called-yellow dark:bg-dark-mode-feel hover:opacity-90 py-2 pl-4 pr-3 rounded-full'
            >
              VIEW PROJECT <BsArrowUpRight size={24} />
            </button>
          </Link>
        </div>
        <div className='flex flex-wrap gap-1 max-w-sm select-none'>
          {props.tags &&
            props.tags.map(({ title }) => {
              return <Tag key={title} title={title} />;
            })}
        </div>
      </div>
    </div>
  );
};
export default CardProject;
