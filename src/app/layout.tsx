import { Metadata } from "next";
import "../../styles/globals.css";

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
  themeColor: "#FBFBF7",
  colorScheme: "light",
  creator: "Alexander Forrest",
  publisher: "Alexander Forrest",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  twitter: {
    card: "summary_large_image",
    site: "@alexdev",
    creator: "@zalzachipmusic",
    images: "https://alexdev.se/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
