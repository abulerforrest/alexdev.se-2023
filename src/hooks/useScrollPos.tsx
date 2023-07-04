import { useEffect } from "react";
import { alexDevStore } from "../store/store";
import { useStore } from "zustand";

const useScrollPos = () => {
  const store = useStore(alexDevStore);
  const { setScrollY } = store;

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [setScrollY]);
};

export default useScrollPos;
