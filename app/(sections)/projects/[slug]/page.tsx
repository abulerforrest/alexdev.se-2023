export default function Page({ params }: { params: { slug: string } }) {
  return <>A project here {params.slug}</>;
}
