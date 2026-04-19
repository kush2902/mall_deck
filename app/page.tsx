import Deck from "../components/Deck";

import Hero from "../sections/Hero";
import Why from "../sections/Why";
import Retail from "../sections/Retail";
import Entertainment from "../sections/Entertainment";
import Dining from "../sections/Dining";

import RetailLeasing from "../sections/RetailLeasing";
import BrandPartnership from "../sections/BrandPartnership";
import EventBooking from "../sections/EventBooking";
import Venue from "../sections/Venue";

export default function Home() {
  return (
    <Deck>
      <Hero />
      <Why />
      <Retail />
      <Dining /> 
      <Entertainment />

      <RetailLeasing />
      <BrandPartnership />
      <EventBooking />
      <Venue />
    </Deck>
  );
}
