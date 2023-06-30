import SectionHeading from "../molecules/SectionHeading";
import CardProject from "../molecules/CardProject";

const Projects = () => (
  <>
    <SectionHeading title='Projects' />
    <div className='flex justify-center w-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10 lg:gap-0 xl:gap-0'>
        <CardProject
          title='Web project 1'
          desc="It's a step-by-step process, with each piece coming together to create a cohesive whole."
          tags={[
            { title: "xls" },
            { title: "vanilla" },
            { title: "webdev" },
            { title: "wordpress" },
            { title: "extensive" },
          ]}
        />
        <CardProject
          title='Web project 2'
          desc="It's a step-by-step process, with each piece coming together to create a cohesive whole."
          tags={[
            { title: "xls" },
            { title: "vanilla" },
            { title: "webdev" },
            { title: "wordpress" },
            { title: "extensive" },
          ]}
        />
        <CardProject
          title='Web project 3'
          desc="It's a step-by-step process, with each piece coming together to create a cohesive whole."
          tags={[
            { title: "xls" },
            { title: "vanilla" },
            { title: "webdev" },
            { title: "wordpress" },
            { title: "extensive" },
          ]}
        />
      </div>
    </div>
  </>
);

export default Projects;
