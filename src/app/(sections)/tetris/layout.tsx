export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='flex w-screen h-screen bg-slate-950'>{children}</div>;
}
