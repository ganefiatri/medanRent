import React from "react";
import { Image } from "@nextui-org/react";
import image1 from "@/assets/images/why-choose-1.webp";
import image2 from "@/assets/images/why-choose-2.webp";
import image3 from "@/assets/images/why-choose-3.webp";

export default function WhyChoose() {
  return (
    <div className="bg-[#f5f5f5] py-16 md:py-24">
      <div className="container p-4 md:p-8">
        <h2 className="font-bold mb-8 md:mb-16 text-center uppercase">
          <span className="text-orange-400">Why</span> Choose Us
        </h2>

        <div className="space-y-8 md:space-y-16">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="md:w-1/2 space-y-3">
              <h3 className="font-bold">Personalized Service</h3>
              <p className="text-gray-400 max-w-md text-justify lg:text-lg">
                At MedanRent, we believe in offering a personalised car-buying
                experience. Our professional team listens to your needs and
                helps you find the perfect vehicle that fits your lifestyle and
                preferences.
              </p>
            </div>

            <div className="md:w-1/2">
              <Image
                src={image1.src}
                alt="Personalized Service"
                radius="none"
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-4 items-center">
            <div className="md:w-1/2">
              <Image src={image2.src} alt="Expert Guidance" radius="none" />
            </div>

            <div className="md:w-1/2 space-y-3">
              <h3 className="font-bold">Expert Guidance</h3>
              <p className="text-gray-400 max-w-md text-justify lg:text-lg">
                Whether it&apos;s performance, luxury, or for practicality. Our
                team provides expert advice on selecting the right car and
                we&apos;ll guide you through every step with professionalism and
                care.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="md:w-1/2 space-y-3">
              <h3 className="font-bold">Customer Satisfaction Service</h3>
              <p className="text-gray-400 max-w-md text-justify lg:text-lg">
                Your satisfaction is our priority. From your first visit to
                driving off in your new car, we ensure a hassle-free, enjoyable
                experience. Our friendly staffs are here to make sure you find
                the vehicle that matches your expectations.
              </p>
            </div>

            <div className="md:w-1/2">
              <Image
                src={image3.src}
                alt="Customer Satisfaction Service"
                radius="none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
