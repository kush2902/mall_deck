"use client";

import { useState } from "react";

import Loader from "../components/Loader";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Hero from "../sections/Hero";
import Why from "../sections/Why";
import Retail from "../sections/Retail";
import Entertainment from "../sections/Entertainment";
import Events from "../sections/Events";

export default function Page() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Cursor />
      <Header />

      {!loaded && <Loader onFinish={() => setLoaded(true)} />}

      {loaded && (
        <>
          <Hero />
          <Why />
          <Retail />
          <Entertainment />
          <Events />
          <Footer />
        </>
      )}
    </>
  );
}
