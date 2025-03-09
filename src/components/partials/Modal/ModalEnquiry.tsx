import React, { FormEvent, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Spinner,
} from "@nextui-org/react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

// import "react-toastify/dist/ReactToastify.css";
import { toast } from "sonner";
import { FaCheckCircle } from "react-icons/fa";
type Props = {
  enquiryCar: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export default function ModalEnquiry({ enquiryCar, isOpen, setIsOpen }: Props) {
  // states

  const [loading, setLoading] = useState<boolean>(false);

  // submit func
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form: HTMLFormElement = e.currentTarget;
    const formData = new FormData(form);
    formData.append("car", enquiryCar);
    const data = Object.fromEntries(formData.entries());
    const formReset = e.target as HTMLFormElement;
    try {
      await fetch("/api/car-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      toast("Enquiry submitted", {
        position: "top-center",
        className: "bg-primary text-white font-bold",
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

      setIsOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      {/* <Button
        variant="solid"
        color="primary"
        radius="full"
        onPress={() => setIsOpen(true)}
      >
        Enquire Now
      </Button> */}
      <Modal isOpen={isOpen} onOpenChange={setIsOpen} placement="center">
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {enquiryCar}
              </ModalHeader>
              <ModalBody>
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
                      inputClassName="border border-orange-400 rounded-md"
                      defaultCountry="id"
                    />
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button
                  form="form-submit"
                  type="submit"
                  color="secondary"
                  radius="sm"
                >
                  {loading ? <Spinner size="sm" color="white" /> : "Submit"}
                </Button>
                {/* <Button color="primary" onPress={onClose}>
                  Sign in
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* <Toaster position="top-center" /> */}
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
    </div>
  );
}
