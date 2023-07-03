"use client";
import Head from "../components/atoms/Head";
import Home from "../components/templates/Home";

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
