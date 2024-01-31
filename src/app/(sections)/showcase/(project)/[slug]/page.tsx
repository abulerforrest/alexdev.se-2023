import Project from "../../../../../components/templates/Project";

// statically generate dynamic pages at runtime
export async function generateStaticParams() {
  return [{ slug: "alexdev" }, { slug: "futur" }, { slug: "adverty" }];
}

export default function Page({ params }: { params: { slug: string } }) {
  return <Project />;
}
