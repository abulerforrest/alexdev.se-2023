import { MutableRefObject, useEffect } from "react";
import { SECTION_TYPES, alexDevStore } from "../store/store";
import { useStore } from "zustand";
import { redirect, useRouter } from "next/navigation";

const useScrollPos = () => {
  const router = useRouter();

  const store = useStore(alexDevStore);
  const { setScrollY, refs, setCurrentSection } = store;

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY === 0) {
        // setCurrentSection(SECTION_TYPES.HOME);
        // router.push("/", { shallow: true });
      } else {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [setScrollY]);
};

export default useScrollPos;
