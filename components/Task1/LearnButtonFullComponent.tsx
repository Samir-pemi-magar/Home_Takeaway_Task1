"use client";

import { useState } from "react";
import LearnHoverComponentOne from "./LearnHoverComponentOne";
import LearnHoverComponent2 from "./LearnHoverComponent2";

export default function LearnButtonFullComponent() {
  const [active, setActive] = useState(0);

  return (
    <div>
      {active === 0 && <LearnHoverComponentOne onNext={() => setActive(1)} />}

      {active === 1 && <LearnHoverComponent2 onPrev={() => setActive(0)} />}
    </div>
  );
}
