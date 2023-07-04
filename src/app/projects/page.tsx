"use client";

import { createRef, useEffect } from "react";
import Home from "../../components/templates/Home";
import useScrollPos from "../../hooks/useScrollPos";
import useScrollToSection from "../../hooks/useScrollToSection";
import { alexDevStore } from "../../store/store";
import { useStore } from "zustand";

export default function Page() {
  const store = useStore(alexDevStore);
  const { setRefs } = store;

  useEffect(() => {
    setRefs({
      home: createRef(),
      experiences: createRef(),
      techniques: createRef(),
      process: createRef(),
      play: createRef(),
      projects: createRef(),
      code: createRef(),
      about: createRef(),
      connect: createRef(),
    });
  }, [setRefs]);

  useScrollToSection();
  useScrollPos();

  return <Home />;
}
