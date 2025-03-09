import React, { useState } from "react";
import Link from "next/link";
import { Image, Button, Chip } from "@nextui-org/react";
import { Car } from "@/@types/Car";
import { BsCarFrontFill } from "react-icons/bs";
import ModalEnquiry from "../Modal";

type Props = {
  car: Car;
};

export default function ProductCard({ car }: Props) {
  const [enquiryCar, setEnquiryCar] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border bg-[#F6F6F6] rounded-xl p-4 h-full">
      <div className="mb-4 relative flex justify-center lg:h-60">
        <Image src={car?.image} alt={car?.model} className="object-cover" />

        <div className="absolute right-0 top-0 z-10">
          <Chip
            startContent={<BsCarFrontFill className="text-white w-5 h-5" />}
            className="bg-black/70 text-white px-2"
          >
            {car.make}
          </Chip>
        </div>
      </div>

      <h4 className="font-bold mb-4">{car?.model}</h4>

      <div className="flex items-center justify-between mb-4 bg-white py-4 px-2 flex-grow">
        <div className="flex flex-col gap-2">
          <span className="text-primary text-sm">Engine</span>
          {car.engine ? (
            <span className="font-bold">{car?.engine} cc</span>
          ) : (
            <span className="font-bold text-xl text-center">-</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-primary text-sm">Power</span>
          <span className="font-bold">{car?.horsepower} hp</span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-primary text-sm">Torque</span>
          <span className="font-bold">{car?.mileage} Nm</span>
        </div>
      </div>

      <div className="flex justify-between gap-2 md:gap-4 mt-auto">
        <Button
          variant="bordered"
          color="secondary"
          radius="full"
          as={Link}
          href={`/car-models/${car.id}`}
        >
          See Details
        </Button>

        <Button
          variant="solid"
          color="secondary"
          radius="full"
          onClick={() => {
            setIsOpen(true);
            setEnquiryCar(car.make);
          }}
        >
          Enquire Now
        </Button>
      </div>

      <ModalEnquiry
        enquiryCar={enquiryCar}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}
