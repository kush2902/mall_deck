"use client";

import { useState } from "react";

// 🎬 Components
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";

// 🎥 Sections
import Hero from "../sections/Hero";
import Why from "../sections/Why";
import Retail from "../sections/Retail";
import Entertainment from "../sections/Entertainment";
import Events from "../sections/Events";

export default function Page() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* 🧠 Custom Cursor */}
      <Cursor />

      {/* 🎬 Loader */}
      {!loaded && <Loader onFinish={() => setLoaded(true)} />}

      {/* 🎥 Main Content */}
      {loaded && (
        <>
          <Hero />
          <Why />
          <Retail />
          <Entertainment />
          <Events />
        </>
      )}
    </>
  );
}
