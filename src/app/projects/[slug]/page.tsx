import Project from "../../../components/templates/Project";

export default function Page({ params }: { params: { slug: string } }) {
  return <Project params={params} />;
}
