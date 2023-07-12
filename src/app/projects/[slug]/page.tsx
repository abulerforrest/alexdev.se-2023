import { notFound, redirect } from "next/navigation";
import Project from "../../../components/templates/Project";
import { getAllProjects } from "../../data/data";

const slug = (projectName: string) =>
  projectName.trim().toLocaleLowerCase().replace(" ", "-");

// statically generate dynamic pages at runtime
export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => {
    return {
      slug: slug(project.name),
    };
  });
}

export default async function Page({ params }: { params: { slug: string } }) {
  const isValidSlug = (await getAllProjects()).every(
    (project) => slug(project.name) === params.slug
  );
  return isValidSlug ? <Project params={null!} /> : notFound();
}
