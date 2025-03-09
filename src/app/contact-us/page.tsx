"use client";

import React, { FormEvent, useState } from "react";
import { Image, Input, Textarea, Button, Spinner } from "@nextui-org/react";
import hero from "@/assets/images/hero-contact.webp";
import { FiMapPin } from "react-icons/fi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { PhoneInput } from "react-international-phone";
import { FaCheckCircle } from "react-icons/fa";
import "react-international-phone/style.css";
import { toast } from "sonner";

export default function Contact() {
  const [loading, setLoading] = useState<boolean>(false);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form: HTMLFormElement = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const formReset = e.target as HTMLFormElement;
    try {
      await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      toast("Form submitted", {
        position: "top-center",
        className: "bg-secondary text-white font-bold",
        icon: <FaCheckCircle className="text-white w-5 h-5" />,
      });
      // toast.success("Form submitted", {
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      //   transition: Bounce,
      // });
      formReset.reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
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

          <div className="container p-4 md:p-8 absolute inset-0 flex flex-col  justify-center z-20">
            <h1 className="text-2xl font-semibold uppercase leading-snug sm:text-5xl sm:leading-snug lg:text-7xl lg:leading-tight text-white">
              Contact MedanRent <br /> Today!
            </h1>
          </div>
        </div>
      </header>

      <section className="bg-[#f5f5f5] py-8 md:p-16 lg:py-24">
        <div className="container p-4 md:p-8">
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-24 items-center">
            <div className="lg:w-2/5">
              <div className="flex flex-col gap-4 md:gap-8">
                <h3 className="font-bold">Get In Touch</h3>
                <p className="md:text-lg max-w-md text-black/85 tracking-wide">
                  Questions, comments, or suggestions? Simply fill in the form
                  and we’ll be in touch shortly.
                </p>

                <div className="flex flex-col gap-2">
                  <a
                    href="https://maps.app.goo.gl/M18vu4fa44xYGk8N9"
                    target="_blank"
                    className="flex items-start gap-2"
                  >
                    <FiMapPin className="text-primary w-6 h-6" />

                    <span className="font-bold md:text-lg max-w-xs text-black/85">
                      Jln Stasiun Gg Bunter, Medan, North Sumatra
                    </span>
                  </a>

                  <a
                    href="tel:+6282122548332"
                    target="_blank"
                    className="flex items-start gap-2"
                  >
                    <MdOutlinePhoneInTalk className="text-primary w-6 h-6" />

                    <span className="font-bold md:text-lg max-w-xs text-black/85">
                      +62 82122548332
                    </span>
                  </a>

                  <a
                    href="mailto:gicerf@gmail.com"
                    target="_blank"
                    className="flex items-start gap-2"
                  >
                    <IoMailOutline className="text-primary w-6 h-6" />

                    <span className="font-bold md:text-lg max-w-xs text-black/85">
                      gicerf@gmail.com
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-3/5 w-full">
              <div className="bg-white border-2 rounded-lg p-4 md:p-8">
                <form id="form-submit" onSubmit={handleFormSubmit}>
                  <div className="space-y-4">
                    <Input
                      required
                      size="sm"
                      type="text"
                      label="Full Name"
                      name="full_name"
                      radius="sm"
                      variant="bordered"
                    />

                    <Input
                      required
                      size="sm"
                      type="email"
                      label="Email"
                      name="email"
                      radius="sm"
                      variant="bordered"
                    />

                    <PhoneInput
                      required
                      name="phone"
                      inputProps={{
                        style: {
                          width: "100%",
                          backgroundColor: "transparent",
                          height: "42px",
                          fontSize: "14px",
                        },
                      }}
                      className="rounded-md border border-[#DCDCDC]  w-full"
                      countrySelectorStyleProps={{
                        className: "bg-transparent border ",
                        buttonStyle: {
                          backgroundColor: "transparent",
                          borderStyle: "solid",
                          border: "10px",
                          height: "38px",
                          padding: "0 4px",
                        },
                      }}
                      inputClassName="border border-primary rounded-md"
                      defaultCountry="id"
                    />

                    <Textarea
                      required
                      label="Message"
                      name="message"
                      radius="sm"
                      variant="bordered"
                    />
                    <Button type="submit" color="secondary" radius="sm">
                      {loading ? (
                        <Spinner size="sm" color="white" />
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        /> */}
      </section>

      <section className=" ">
        <div className="container p-4 md:p-8">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31858.44049029907!2d98.65485998305859!3d3.516765638633744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30313af26de1a8ab%3A0xb7b86d3d22ab12f7!2sMekar%20Sari%2C%20Kec.%20Deli%20Tua%2C%20Kabupaten%20Deli%20Serdang%2C%20Sumatera%20Utara!5e0!3m2!1sid!2sid!4v1741514937093!5m2!1sid!2sid" loading="lazy"
            className="lg:h-[450px] w-full"
            allowFullScreen>
          </iframe>
        </div>
      </section>
    </div>
  );
}
