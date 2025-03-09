import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
  return (
    <div className="fixed bottom-4 md:bottom-6 right-4 z-20 md:right-10">
      <Button
        className="bg-green-600 py-2 px-4 rounded-full"
        startContent={<FaWhatsapp className="text-white w-6 h-6" />}
        as={Link}
        href={
          "https://wa.me/6282122548332?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20MedanRent"
        }
        target="_blank"
      >
        <div className="flex gap-2 items-center">
          {/* <FaWhatsapp className="text-white w-6 h-6" /> */}
          <span className="font-bold text-white text-sm md:text-base">
            Need Assistance?
          </span>
        </div>
      </Button>
    </div>
  );
}
