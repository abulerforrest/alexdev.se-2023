import { MutableRefObject, useEffect } from "react";

const useScrollTo = (selectedLocationRef: MutableRefObject<any>) => {
  useEffect(() => {
    if (selectedLocationRef && selectedLocationRef.current) {
      selectedLocationRef.current!.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedLocationRef]);

  return [selectedLocationRef];
};

export default useScrollTo;
