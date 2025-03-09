import React from "react";
import { Image } from "@nextui-org/react";
import { provides } from "@/constant/home";

export default function WeProvide() {
  return (
    <div className="py-16 md:py-24">
      <div className="container p-4 md:p-8">
        <h2 className="font-bold md:text-3xl lg:text-4xl mb-8 md:mb-16 uppercase text-center">
          WE PROVIDE
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {provides.map((prov, index: number) => (
            <div
              key={index}
              className="border rounded-3xl p-4 md:p-8 flex flex-col gap-4 md:gap-8 items-center justify-center"
            >
              <Image src={prov.icon} alt={prov.title} />

              <h4 className="text-lg md:text-xl lg:text-2xl font-bold">
                {prov.title}
              </h4>

              <p className="text-center">{prov.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
