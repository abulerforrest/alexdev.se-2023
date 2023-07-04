"use client";

import { createRef, useEffect } from "react";
import { alexDevStore } from "../../store/store";
import { useStore } from "zustand";

import useScrollToSection from "../../hooks/useScrollToSection";
import useScrollPos from "../../hooks/useScrollPos";

import Home from "../../components/templates/Home";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

  return (
    <>
      <Home />
      {children}
    </>
  );
}
