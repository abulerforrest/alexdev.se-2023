import { MutableRefObject } from "react";

export const scrollToSection = (ref: MutableRefObject<null>) =>
  (ref && (ref.current as any))?.scrollIntoView({
    behavior: "smooth",
  });
