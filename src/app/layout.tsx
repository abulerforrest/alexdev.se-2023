import { Metadata, Viewport } from "next";
import "../../styles/globals.css";
import StoreClient from "../store/storeClient";
import { getProjects } from "../data/getProjects";
import { DocumentData } from "firebase/firestore";

export const viewport: Viewport = {
  themeColor: "#FBFBF7",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://alexdev.se"),
  title: "alexdev.se",
  description: "A portfolio site in multicolor - by Alexander Forrest.",
  applicationName: "alexdev.se",
  authors: [{ name: "Alexander Forrest", url: "https://alexdev.se" }],
  keywords:
    "development, challenge, opportunity, frameworks, code, Alexander Forrest, cartina, projects, javascript, typescript, webdev, tetris, resumé, connect, experience, agile, fullstack, alexdev, about, creative, frontend, front-end, build, user-friendly, seamless, UX, UI, design, webdesign, technical, skills, functional, programming, impression, vision, c++, php, ssh, bash, linux, terminal, responsive, innovative, explore, smart, portfolio, showcase, sleek, websites, applications, apps, ideas, passion, full-stack, figma, transforming, node js, next js, git, angular, redux, golang, deno, ts, material ui, ui, php, docker, vanilla, photoshop, wordpress",
  generator: "Next.js",
  referrer: "origin",
  icons: ["https://alexdev.se/icon.png", "https://alexdev.se/favicon.ico"],
  manifest: "https://alexdev.se/manifest.json",
  openGraph: {
    type: "website",
    locale: "en",
    countryName: "Sweden",
    emails: "alex@alexdev.se",
    url: "https://alexdev.se",
    title: "alexdev.se",
    description: "A portfolio site in multicolor - by Alexander Forrest.",
    siteName: "alexdev.se",
    images: [
      {
        url: "https://alexdev.se/icon.png",
      },
    ],
  },
  creator: "Alexander Forrest",
  publisher: "Alexander Forrest",
  robots: "index, follow",
  twitter: {
    card: "summary_large_image",
    site: "@alexdev",
    creator: "@zalzachipmusic",
    images: "https://alexdev.se/icon.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const projects: DocumentData[] = await Promise.resolve(getProjects());

  return (
    <html lang='en'>
      <body>
        <StoreClient projects={projects} />
        {children}
      </body>
    </html>
  );
}
