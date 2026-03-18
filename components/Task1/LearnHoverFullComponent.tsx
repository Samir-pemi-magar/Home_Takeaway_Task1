"use client";

import { useState } from "react";
import SlideTask1 from "../animations/SlideTask1";
import ClarityComponent from "./ClarityComponent";
import ClarityHoverComponent from "./ClarityHoverComponent";
import LearnButtonFullComponent from "./LearnButtonFullComponent";
import LearnComponent from "./LearnComponent";

export default function LearnHoverFullComponent() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-visible cursor-pointer grid grid-cols-1 grid-rows-1 w-fit"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`col-start-1 row-start-1 transition-opacity duration-1000 ${hovered ? "opacity-100" : "opacity-0"}`}
      >
        <LearnButtonFullComponent />
      </div>

      <div className="col-start-1 row-start-1 z-10 pointer-events-none">
        <SlideTask1 isHovered={hovered} slide="-100%">
          <div className="bg-white w-full h-full">
            <LearnComponent />
          </div>
        </SlideTask1>
      </div>
    </div>
  );
}
