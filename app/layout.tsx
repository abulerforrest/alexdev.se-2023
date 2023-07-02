import Home from "../src/components/templates/Home";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <section>
          <Home />
          {children}
        </section>
      </body>
    </html>
  );
}
