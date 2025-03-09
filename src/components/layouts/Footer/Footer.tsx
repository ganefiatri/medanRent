import React from "react";
import Logo from "@/components/partials/Logo/Logo";
import { navLinks } from "@/constant/Navlink";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-secondary py-8 md:py-20 text-white">
      <div className="lg:w-3/4 mx-auto">
        <div className="container p-4 md:p-8">
          <div className="flex flex-col lg:flex-row gap-y-8 justify-between">
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              <Link href={"/"}>
                <Logo className="w-32" />
              </Link>

              <div>
                <h4 className="font-medium text-base lg:text-xl">
                  SHOWROOM ADDRESS
                </h4>
                <a
                  className="text-white/50"
                  href="https://maps.app.goo.gl/M18vu4fa44xYGk8N9"
                  target="_blank"
                >
                  Jln Stasiun Gg Bunter, <br /> Medan, North Sumatra
                </a>
              </div>

              <div>
                <h4 className="font-medium uppercase text-base lg:text-xl">
                  Opening Hours
                </h4>
                <span className="text-white/50">10 AM to 6:30 PM daily</span>
              </div>
            </div>

            <div>
              <h4 className="uppercase mb-2 lg:mb-4 text-base lg:text-xl">
                Navigation
              </h4>
              <ul className="space-y-4">
                {navLinks.map((nav, index: number) => (
                  <li key={index} className="text-white/50">
                    <Link href={nav.path}>{nav.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="uppercase mb-2 lg:mb-4 text-base lg:text-xl">
                Connect With us
              </h4>
              <ul className="flex gap-4 md:gap-8 items-center">
                <li>
                  <a
                    href="#"
                    target="_blank"
                  >
                    <FaInstagram className="w-6 h-6 lg:w-10 lg:h-10" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                  >
                    <FaFacebook className="w-6 h-6 lg:w-10 lg:h-10" />
                  </a>
                </li>
                <li>
                  <a
                    href={
                      "#"
                    }
                    target="_blank"
                  >
                    <FaWhatsapp className="w-6 h-6 lg:w-10 lg:h-10" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
