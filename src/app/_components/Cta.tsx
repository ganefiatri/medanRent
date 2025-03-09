"use client";
import React from "react";
import { Image, Button } from "@nextui-org/react";
// import car from "@/assets/images/half-car-bottom-2.webp";
import car from "@/assets/images/alphard-half.webp";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Cta() {
  return (
    <div className="py-16 md:pt-24 md:mb-40 lg:mb-60 relative overflow-x-hidden">
      <div className="container p-4 md:p-8">
        <div className="absolute left-0 top-20 w-1/2 lg:w-full items-center hidden md:flex">
          <Image src={car.src} alt="Car" className=" " />
        </div>

        <div className="flex items-center gap-8">
          <div className="md:w-1/2 hidden md:block"></div>

          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:w-1/2"
          >
            <h2 className="font-bold mb-8 uppercase md:text-3xl lg:text-5xl leading-snug md:leading-snug lg:leading-snug tracking-wider text-center md:text-start">
              Drive Home Your <br />{" "}
              <span className="text-orange-400">Dream Car</span> Today!
            </h2>
            <p className="max-w-lg text-gray-400 text-justify md:text-lg">
              At MedanRent, we’ve got an incredible range of new cars in various
              makes, models, and colors – ready for you to view and test drive!
              Whether you&apos;re after sleek sedans or powerful SUVs, we’ve got
              something to suit every lifestyle. Plus, we offer flexible and
              customised financing schemes to make owning your dream car easier
              than ever.{" "}
            </p>
          </motion.div>
        </div>

        <div className="flex items-center justify-center mt-8 md:mt-20 lg:mt-40">
          <Button
            as={Link}
            href="/contact-us"
            radius="full"
            color="secondary"
            size="lg"
            endContent={<FaLongArrowAltRight className="text-white" />}
          >
            CONTACT US
          </Button>
        </div>
      </div>
    </div>
  );
}
