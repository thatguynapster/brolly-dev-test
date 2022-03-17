import React, { FC, Fragment, useState } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Modal } from "./modal";
import router from "next/router";
import CheckPremium from "./check-premium";
import PremiumRequest from "./panel/premium-request";
import Login from "./panel/login";

const Header: FC<{ pagename: string }> = ({ pagename }) => {
  const [showQuoteForm, setShowQuoteForm] = useState<boolean>(false);
  const [premiumData, setPremiumData] = useState<any>({});
  const [showPremiumRequestModal, setShowPremiumRequestModal] =
    useState<boolean>(false);
  const [showPremiumRequestResponseModal, setShowPremiumRequestResponseModal] =
    useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  return (
    <header className="relative bg-white max-w-7xl mx-auto px-4 sm:px-6">
      <Popover className="relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex flex-row items-center justify-start lg:w-0 lg:flex-1 space-x-10">
              <Link href="/" passHref>
                <a href="#">
                  <img
                    className="cursor-pointer w-auto"
                    src="/img/logo.svg"
                    alt=""
                  />
                </a>
              </Link>
              <nav className="hidden md:flex space-x-8">
                <Link href="/how-it-works" passHref>
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                    How it works
                  </a>
                </Link>
                <Link href="/legal?section=faq" passHref>
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                    FAQs
                  </a>
                </Link>
                <Link href="/network" passHref>
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Network
                  </a>
                </Link>
                <Link href="/claims" passHref>
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Claims
                  </a>
                </Link>
              </nav>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-border">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-8">
              {/* <nav className="hidden md:flex space-x-10">
                <Link href="/who-we-are" passHref>
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900">Who we are</a>
                </Link>
                <Link href="/how-it-works" passHref>
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900">How it works</a>
                </Link>
              </nav> */}

              <div className="flex z-50">
                <a
                  href="#"
                  className="whitespace-nowrap text-base font-medium hover:text-gray-900 bg-primary-main py-2 px-4 border-0 shadow-sm flex items-center space-x-4"
                  onClick={(ev: any) => {
                    ev.preventDefault();
                    pagename === "home" || pagename === "how-it-works"
                      ? router.push("#getQuote")
                      : setShowQuoteForm(true);
                  }}
                >
                  <span>Get a Quote</span>
                  <ArrowRightIcon className="w-4 h-4 animate-bounceX" />
                </a>
                <a
                  href="#"
                  rel="noreferrer"
                  className="whitespace-nowrap text-base font-medium hover:text-gray-900 bg-background py-2 px-4 border-0 shadow-sm capitalize"
                  onClick={(ev) => {
                    ev.preventDefault();
                    setShowLoginModal(true);
                  }}
                >
                  my account
                </a>
              </div>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="z-30 absolute top-0 inset-x-0 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white space-y-4">
              <div className="pt-5 px-5">
                <div className="flex items-center justify-between">
                  <Link href="/" passHref>
                    <img
                      className="h-20 w-1/4 sm:h-28"
                      src="/img/logo.svg"
                      alt=""
                    />
                  </Link>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-border">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <Link href="/how-it-works">
                      <span className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 text-base font-medium text-gray-900">
                        How it works
                      </span>
                    </Link>
                    <Link href="/legal?section=faq">
                      <span className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 text-base font-medium text-gray-900">
                        FAQs
                      </span>
                    </Link>
                    <Link href="/network">
                      <span className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 text-base font-medium text-gray-900">
                        Network
                      </span>
                    </Link>
                    <Link href="/claims">
                      <span className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 text-base font-medium text-gray-900">
                        Claims
                      </span>
                    </Link>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center whitespace-nowrap text-base font-medium hover:text-gray-900 bg-primary-main py-2 px-4 border-0 shadow-sm"
                    onClick={(ev: any) => {
                      ev.preventDefault();
                      pagename === "home" || pagename === "how-it-works"
                        ? router.push("#getQuote")
                        : setShowQuoteForm(true);
                    }}
                  >
                    Get a Quote
                  </a>
                  <a
                    href="#"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center whitespace-nowrap text-base font-medium hover:text-gray-900 py-2 px-4 border-0 shadow-sm bg-background capitalize"
                    onClick={(ev) => {
                      ev.preventDefault();
                      setShowLoginModal(true);
                    }}
                  >
                    my account
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <Modal
        show={showQuoteForm}
        onClose={(ev: any) => {
          setShowQuoteForm(false);
        }}
        className="z-50"
      >
        <XIcon
          className="absolute top-0 right-0 m-4 w-5 h-5 cursor-pointer"
          onClick={() => {
            setShowQuoteForm(false);
          }}
        />
        <CheckPremium
          isModal={true}
          onRequestCover={(_data) => {
            // console.log(_data);
            setPremiumData(_data);
            setShowQuoteForm(false);
            setShowPremiumRequestModal(true);
          }}
        />
      </Modal>

      <Modal
        show={showPremiumRequestModal}
        onClose={(ev: any) => {
          setShowPremiumRequestModal(false);
        }}
        className="z-50"
      >
        <XIcon
          className="absolute top-0 right-0 m-4 w-5 h-5 cursor-pointer"
          onClick={() => {
            setShowPremiumRequestModal(false);
          }}
        />
        <PremiumRequest
          data={premiumData}
          onClose={() => {
            setShowPremiumRequestModal(false);
            setShowPremiumRequestResponseModal(true);
          }}
        />
      </Modal>

      <Modal
        show={showPremiumRequestResponseModal}
        onClose={() => {
          setShowPremiumRequestResponseModal(false);
        }}
      >
        <div className="flex flex-col px-4 py-8 space-y-8 items-center">
          <CheckCircleIcon className="text-success-main w-48 h-48" />
          <h2 className="text-center font-semibold text-md">
            Insurance cover successfully requested. A representative will be in
            touch soon.
          </h2>
          <button
            className="bg-primary-main px-4 py-2"
            onClick={() => {
              setShowPremiumRequestResponseModal(false);
            }}
          >
            Close
          </button>
        </div>
      </Modal>
      <Modal
        show={showLoginModal}
        onClose={(ev: any) => {
          setShowLoginModal(false);
        }}
        className="z-50"
      >
        <Login
          onLoginComplete={() => {
            router.push("./panel");
          }}
        />
      </Modal>
    </header>
  );
};

export default Header;
