"use client";
import Head from "../src/components/atoms/Head";
import Home from "../src/components/templates/Home";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head />
      <body>
        <Home />
        {children}
      </body>
    </html>
  );
}
