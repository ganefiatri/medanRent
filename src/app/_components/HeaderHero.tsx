import React from "react";
import { Button, Image } from "@nextui-org/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import hero from "@/assets/images/homepage.webp";

export default function HeaderHero() {
  return (
    <div className="relative py-8 md:py-16 lg:py-24 overflow-hidden">
      <div className="container p-4 md:p-8">
        <div className="border-b-5 lg:border-b-8 border-orange-400 max-w-24 lg:max-w-56"></div>

        <div className="space-y-4">
          <h1 className="leading-snug  md:max-w-2xl font-extrabold text-black/85">
            RENT HERE <br /> YOUR DREAM CAR
          </h1>

          <p className="max-w-lg lg:text-xl md:text-lg text-gray-400 leading-snug tracking-wide">
            MedanRent is trusted for its professional and reliable sales staff,
            dedicated to making your car-buying journey smooth and hassle-free.
            With expert guidance and exceptional service, MedanRent ensures you
            drive away with confidence!
          </p>

          <div className="pt-6">
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

        {/* <div className="space-y-2 mt-8 lg:mt-12">
          <div className="flex items-center gap-2">
            <FaInstagram className="text-primary w-8 h-8 " />
            <FaFacebook className="text-primary w-8 h-8 " />
          </div>

          <p className="uppercase md:text-lg lg:text-lg font-bold">
            “with flexible financing schemes”
          </p>
        </div> */}
      </div>

      <div className="absolute top-0 lg:-top-40 md:-right-32 lg:right-0 overflow-hidden -z-10 hidden md:block">
        <Image
          src={hero.src}
          alt="Car street"
          className="md:w-1/2 md:ml-auto"
        />
      </div>
    </div>
  );
}
