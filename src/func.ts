import { MutableRefObject } from "react";

export const scrollToSection = (ref: MutableRefObject<null>) =>
  (ref.current as any)?.scrollIntoView({
    behavior: "smooth",
  });

const IS_SERVER = typeof window === "undefined";
export default function getURL(path: string) {
  const baseURL = IS_SERVER
    ? process.env.NEXT_PUBLIC_SITE_URL!
    : window.location.origin;
  return new URL(path, baseURL).toString();
}
