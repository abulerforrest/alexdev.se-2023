import { MutableRefObject } from "react";

export const scrollToSection = (ref: MutableRefObject<null>) => {
  const currentRef = ref && (ref.current as any);

  currentRef?.scrollIntoView({
    behavior: "smooth",
  });
};
