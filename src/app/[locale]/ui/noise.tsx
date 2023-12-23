"use client";
import React, { useMemo, useRef } from "react";
import { twMerge } from "tailwind-merge";

import { useWindowScroll, useWindowSize } from "@uidotdev/usehooks";

const Noise: React.FC = () => {
  const [{ y }] = useWindowScroll();
  const { height } = useWindowSize();

  const divRef = useRef<HTMLDivElement>(null);

  const visible = useMemo(() => {
    const scrollY = y ?? 0;
    const windowHeight = height ?? 0;

    const scrollTop = divRef?.current?.getBoundingClientRect().y ?? 0;
    const scrollBottom = divRef.current?.getBoundingClientRect().bottom ?? 0;

    return (
      scrollY >= scrollTop + scrollY - windowHeight &&
      scrollY <= scrollBottom + scrollY + windowHeight
    );
  }, [y, height]);

  return (
    <div ref={divRef} className="absolute w-full h-full overflow-clip">
      <div className="w-full h-full relative">
        <div
          style={{
            filter: "brightness(0%)",
          }}
          className={twMerge(
            "absolute inset-0 bg-[200px] bg-repeat opacity-50 pointer-events-none ",
            "top-[-300%] left-[-150%] h-[600%] w-[600%]",
            visible && "animate-grain",
            `bg-[url('/imgs/noise6.png')]`
          )}
        />
      </div>
    </div>
  );
};

export default Noise;
