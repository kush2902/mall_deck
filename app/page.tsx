import Deck from "@/components/Deck";

import Hero from "@/sections/Hero";
import Why from "@/sections/Why";
import Retail from "@/sections/Retail";
import Entertainment from "@/sections/Entertainment";
import Opportunities from "@/sections/Opportunities";

export default function Home() {
  return (
    <Deck>
      <Hero />
      <Why />
      <Retail />
      <Entertainment />
      <Opportunities />
    </Deck>
  );
}
