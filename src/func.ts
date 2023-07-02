import { MutableRefObject } from "react";

export const scrollTo = (ref: MutableRefObject<null>) =>
  (ref.current as any)?.scrollIntoView({
    behavior: "smooth",
  });
