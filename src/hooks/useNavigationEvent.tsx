"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export const useNavigationEvent = (onPathNameChange: () => void) => {
  const pathname = usePathname(); // Get current route

  const pathNameRef = useRef(pathname);

  useEffect(() => {
    if (pathNameRef.current !== pathname) {
      onPathNameChange();
      pathNameRef.current = pathname;
    }
  }, [pathname, onPathNameChange]);
};
