"use client";

import React from "react";
import { Image } from "@nextui-org/react";
import { ourCars } from "@/constant/home";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Discover() {
  return (
    <div className="bg-[#f5f5f5] py-16 md:py-24">
      <div className="container p-4 md:p-8">
        <h2 className="font-bold mb-8 md:mb-16 text-center uppercase">
          <span className="text-orange-400">Discover</span> Our Cars
        </h2>

        <motion.div
          // initial={{ scale: 0, opacity: 0 }}
          // whileInView={{ scale: 1, opacity: 1 }}
          // viewport={{ once: true }}
          // transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-3 gap-8 lg:gap-16"
        >
          {ourCars.map((car, index: number) => (
            <div key={index} className="flex flex-col gap-4 items-center">
              <Image
                src={car.img}
                alt={car.title}
                className="w-full object-cover"
              />
              <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-center">
                {car.title}
              </h4>
            </div>
          ))}
        </motion.div>

        <div className="mt-8 lg:mt-16 w-max mx-auto">
          <Button
            as={Link}
            href="/car-models"
            color="secondary"
            radius="full"
            variant="bordered"
            className="mx-auto"
            size="lg"
          >
            See More
          </Button>
        </div>
      </div>
    </div>
  );
}
