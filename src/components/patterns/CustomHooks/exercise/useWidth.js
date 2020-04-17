import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    const handleResize = () => {
      let currentWidth = windowWidth();
      setWidth(currentWidth);
    };

    if (window) {
      window.addEventListener("resize", handleResize);
      handleResize();
    }
    return () => {
      if (window) window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
};

export const withWidth = (Component) => (props) => {
  const width = useWidth();

  return <Component {...props} width={width} />;
};

export default useWidth;
