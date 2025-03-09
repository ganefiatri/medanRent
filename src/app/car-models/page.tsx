import React from "react";
import HeaderSwiper from "./_components/HeaderSwiper";
import OurCars from "./_components/OurCars";

export default function page() {
  return (
    <div>
      <header>
        <HeaderSwiper />
      </header>

      <section>
        <OurCars />
      </section>
    </div>
  );
}
