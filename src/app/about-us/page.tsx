import React from "react";
import { Button, Image } from "@nextui-org/react";
import hero from "@/assets/images/hero-about.webp";
import image from "@/assets/images/about-img.webp";
import town from "@/assets/images/asset-bg-town.webp";
import { FaLongArrowAltRight, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
export default function About() {
  return (
    <div>
      <header>
        <div className="relative">
          <Image
            src={hero.src}
            alt="hero about"
            radius="none"
            removeWrapper
            className="w-full object-cover"
          />

          <div className="container p-4 md:p-8 absolute inset-0 flex flex-col items-center justify-center z-20">
            <h1 className="text-2xl font-semibold uppercase leading-snug sm:text-5xl sm:leading-snug lg:text-7xl lg:leading-tight text-white">
              About Us
            </h1>
          </div>
        </div>
      </header>

      <section className="py-8 md:py-16 lg:py-24">
        <div className="container p-4 md:p-8">
          <h2 className="text-center mb-4 md:mb-8 lg:mb-16">
            Welcome to <span className="text-orange-400">MedanRent</span>
          </h2>

          <p className="tracking-wide md:text-lg lg:text-2xl text-black/80 text-justify">
            <strong>MedanRent</strong> is Medan trusted destination for
            premium new vehicles. We&apos;re dedicated to providing a seamless
            car-buying experience, offering a diverse selection of quality cars
            to match any budget and lifestyle. Our expert team is here to help
            you find the perfect car, with personalized service, flexible
            financing options, and transparent pricing. At MedanRent, we’re not
            just about selling cars—we’re about building lasting relationships.
            Your dream car is waiting, and we’re ready to make it yours!
          </p>
        </div>
      </section>

      <section className="py-8 md:py-16 lg:py-24">
        <div className="bg-[#f5f5f5] py-8 md:py-16 lg:py-24">
          <div className="container p-4 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
              <Image
                src={image.src}
                alt="image"
                radius="none"
                removeWrapper
                className="w-full object-cover"
              />

              <div className="flex flex-col items-center md:items-start gap-4 md:gap-8">
                <h3 className="md:text-3xl lg:text-4xl font-bold">
                  Contact MedanRent Today!
                </h3>

                <p className="md:text-lg max-w-md tracking-wide text-black/80">
                  Looking for your next car or have questions? Our team is here
                  to assist with expert advice and personalized support. Reach
                  out via phone, email, or visit our showroom in Medan, and
                  we’ll help you find the perfect vehicle!
                </p>

                <Button
                  as={Link}
                  href="/contact-us"
                  radius="full"
                  color="secondary"
                  endContent={<FaLongArrowAltRight className="text-white" />}
                  className="w-max"
                >
                  CONTACT US
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[url('/asset-bg-town.webp')] bg-bottom bg-no-repeat lg:hidden py-8">
        <div className="container p-4 md:p-8  flex flex-col items-center gap-4 md:gap-8 z-20">
          <h2 className="text-2xl font-semibold uppercase leading-snug md:text-3xl sm:leading-snug lg:text-4xl lg:leading-tight text-black/80">
            VISIT US
          </h2>

          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-1 flex-col md:flex-row items-center text-black/80 md:text-lg">
              <span className="font-semibold">Showroom Address:</span>
              <span>Jln Stasiun Gg Bunter, Medan, North Sumatra</span>
            </div>

            <div className="flex gap-1 flex-col md:flex-row items-center text-black/80 md:text-lg">
              <span className="font-semibold">Opening Hours:</span>
              <span>10 AM to 6:30 PM daily</span>
            </div>
          </div>

          <Button
            as={Link}
            href="https://maps.app.goo.gl/1W8ugWg87gHaXNq46"
            target="_blank"
            radius="full"
            color="secondary"
            startContent={<FaMapMarkerAlt className="text-white" />}
            className="w-max"
          >
            GET DIRECTIONS
          </Button>
        </div>
      </section>

      <section className="hidden lg:block">
        <div className="relative">
          <Image
            src={town.src}
            alt="Town"
            removeWrapper
            className="w-full object-contain"
          />

          <div className="container p-4 md:p-8 absolute inset-0 flex flex-col items-center gap-4 md:gap-8 z-20">
            <h2 className="text-2xl font-semibold uppercase leading-snug md:text-3xl sm:leading-snug lg:text-4xl lg:leading-tight text-black/80">
              VISIT US
            </h2>

            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-1 text-black/80 md:text-lg">
                <span className="font-semibold">Showroom Address:</span>
                <span>Jln Stasiun Gg Bunter, Medan, North Sumatra</span>
              </div>

              <div className="flex gap-1 text-black/80 md:text-lg">
                <span className="font-semibold">Opening Hours:</span>
                <span>10 AM to 6:30 PM daily</span>
              </div>
            </div>

            <Button
              as={Link}
              href="https://maps.app.goo.gl/1W8ugWg87gHaXNq46"
              target="_blank"
              radius="full"
              color="secondary"
              size="lg"
              startContent={<FaMapMarkerAlt className="text-white" />}
              className="w-max"
            >
              GET DIRECTIONS
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
