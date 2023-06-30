import { useEffect } from "react";

const useScroll = (ref: any) => {
  useEffect(() => {
    const handleClick = () => {
      (ref.current as any)?.scrollIntoView({ behavior: "smooth" });
    };

    window.addEventListener("scroll", handleClick);

    return () => {
      document.removeEventListener("scroll", handleClick);
    };
  }, [ref]);
};

export default useScroll;
