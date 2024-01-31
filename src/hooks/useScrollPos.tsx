import { useEffect } from "react";
import { useStore } from "zustand";
import { alexDevStore } from "../store/store";

const useScrollPos = () => {
  const store = useStore(alexDevStore);
  const { setScrollY } = store;

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY !== 0) {
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
