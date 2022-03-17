import React, { FC, useEffect, useState } from "react";
import type { NextPage } from "next";
import FormGroup from "../components/form-group";
import { validateEmail } from "../utils/functions";
import { toast } from "react-toastify";
import { Modal } from "./modal";
import { BadgeCheckIcon, CheckIcon, ExclamationCircleIcon } from "@heroicons/react/outline";

const JoinWaitlist: FC<{ status: any; message: any; onValidated: (formData: any) => void }> = ({
  status,
  message,
  onValidated,
}) => {
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [buttonText, setButtonText] = useState<string>("Join");

  const [formStatus, setFormStatus] = useState<string | null>(status);

  async function _handleSubmit() {
    if (!validateEmail(email)) {
      toast.error("Provide a valid email");
      return;
    }
    if (phone === "") {
      toast.error("Enter phone number");
      return;
    }

    onValidated({
      MERGE0: email,
      MERGE4: phone,
    });
  }

  useEffect(() => {
    // console.log(status);
    setFormStatus(status);
    switch (status) {
      case "error":
        toast.error("Failed to join waitlist");
        setButtonText("Failed to join waitlist");
        setTimeout(() => {
          setButtonText("Join");
        }, 3000);
        break;
      case "success":
        toast.success("Added To Waitlist");
        setButtonText("Added To Waitlist");
        setTimeout(() => {
          setButtonText("Join");
        }, 3000);
        break;
      default:
        setButtonText("Join");
    }
  }, [status]);

  return (
    <form className="grid grid-cols-7 w-full max-w-md" method="POST">
      <div className="col-span-7">
        <FormGroup
          type="email"
          id="waitlistEmailInput"
          value={email}
          placeholder="Email"
          className="rounded-[0px] placeholder-[#848484] focus:ring-primary-border"
          onValueChanged={(ev: any) => {
            // console.log(ev);
            setEmail(ev.currentTarget.value);
          }}
          onFocusOut={(ev: any) => {
            // console.log(ev);
            setEmail(ev.currentTarget.value);
          }}
        />
        <FormGroup
          type="tel"
          id="waitlistPhoneInput"
          value={phone}
          placeholder="Whatsapp number"
          className="rounded-[0px] placeholder-[#848484] focus:ring-primary-border"
          onValueChanged={(ev: any) => {
            // console.log(ev);
            setPhone(ev.currentTarget.value);
          }}
          onFocusOut={(ev: any) => {
            // console.log(ev);
            setPhone(ev.currentTarget.value);
          }}
        />
      </div>
      <button
        className="col-span-7 bg-primary-main py-3 px-4 font-semibold flex items-center justify-center space-x-4"
        type="submit"
        onClick={(ev) => {
          ev.preventDefault();
          _handleSubmit();
        }}
      >
        <span>{buttonText}</span>
      </button>

      <Modal
        show={formStatus === "success"}
        onConfirm={(ev: any) => {
          // console.log(ev);
        }}
        onClose={(ev: any) => {
          // console.log(ev);
          setFormStatus(null);
        }}
      >
        <div className="px-4 py-12 flex flex-col space-y-4 items-center justify-center">
          <BadgeCheckIcon className="w-20 h-20 text-success-main" />
          <p className="text-center font-semibold">Added to Waitlist</p>
        </div>
      </Modal>

      <Modal
        show={formStatus === "error"}
        onConfirm={(ev: any) => {
          // console.log(ev);
        }}
        onClose={(ev: any) => {
          // console.log(ev);
          setFormStatus(null);
        }}
      >
        <div className="px-4 py-12 flex flex-col space-y-4 items-center justify-center">
          <ExclamationCircleIcon className="w-20 h-20 text-danger-main" />
          <p className="text-center font-semibold">Failed to join waitlist. Try again</p>
        </div>
      </Modal>
    </form>
  );
};

export default JoinWaitlist;
