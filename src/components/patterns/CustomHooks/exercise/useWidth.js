import { useState, useEffect, useCallback } from "react";

export const SMALL = 1;
export const MEDIUM = 2;
export const LARGE = 3;

const largeWidth = 992,
  mediumWidth = 768;

const windowWidth = () => {
  let innerWidth = 0;
  let width;
  if (window) innerWidth = window.innerWidth;

  if (innerWidth >= largeWidth) {
    width = LARGE;
  } else if (innerWidth >= mediumWidth) {
    width = MEDIUM;
  } else {
    width = SMALL;
  }

  return width;
};

const useWidth = () => {
  const [width, setWidth] = useState(null);

  const handleResize = () => {
    let currentWidth = windowWidth();
    if (currentWidth !== width) {
      setWidth(currentWidth);
    }
  };

  const handleResizeCallback = useCallback(handleResize, []);

  useEffect(() => {
    if (window) {
      window.addEventListener("resize", handleResizeCallback);
      handleResizeCallback();
    }
    return () => {
      if (window) window.removeEventListener("resize", handleResizeCallback);
    };
  }, [handleResizeCallback]);

  return width;
};

export default useWidth;
