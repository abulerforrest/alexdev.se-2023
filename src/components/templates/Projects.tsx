import SectionHeading from "../molecules/SectionHeading";
import CardProject from "../molecules/CardProject";
import { alexDevStore } from "../../store/store";
import { useStore } from "zustand";
import { IProject } from "../../app/data/data";
import { Suspense } from "react";

const Projects = () => {
  const { projects } = useStore(alexDevStore);
  console.log(projects);
  return (
    <>
      <SectionHeading title='Projects' />
      <div className='flex justify-center w-full select-none'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10 lg:gap-0 xl:gap-0'>
          {projects.map((project: IProject) => {
            return (
              <CardProject
                title={project.name}
                slug={project.name.trim().toLocaleLowerCase().replace(" ", "-")}
                key={project.id}
                id={project.id}
                desc={project.desc}
                tags={[
                  { title: "xls" },
                  { title: "vanilla" },
                  { title: "webdev" },
                  { title: "wordpress" },
                  { title: "extensive" },
                ]}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
