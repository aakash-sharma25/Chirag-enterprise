"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/log2.png";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white md:p-[20px] p-[10px] w-[100%] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
        <div className="max-w-screen-lg mx-auto flex items-center justify-between text-xl font-semibold">
          <Image src={logo} alt="company logo" width={150} height={100} />

          <div className="hidden md:flex justify-evenly w-[40%] gap-5">
            <Link
              className="hover:text-blue-500 transition ease-in-out delay-50"
              href="/"
            >
              Home
            </Link>
            <Link
              className="hover:text-blue-500 transition ease-in-out delay-50"
              href="/about"
            >
              About
            </Link>
            <Link
              className="hover:text-blue-500 transition ease-in-out delay-50"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="hover:text-blue-500 transition ease-in-out delay-50"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>

          <div>
            <button className="hidden md:inline animate-bounce text-sm font-normal px-4 py-2 rounded-3xl bg-blue-500 hover:bg-blue-800 text-white transition-all ease-in-out delay-100">
              Request Services
            </button>

            <div className="md:hidden inline">
              {!open ? (
                <svg
                  onClick={() => setOpen(true)}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  className="cursor-pointer"
                >
                  <rect y="4" width="24" height="2" rx="1"></rect>
                  <rect y="11" width="24" height="2" rx="1"></rect>
                  <rect y="18" width="24" height="2" rx="1"></rect>
                </svg>
              ) : (
                <svg
                  onClick={() => setOpen(false)}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  className="cursor-pointer"
                >
                  <line
                    x1="4"
                    y1="4"
                    x2="20"
                    y2="20"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="4"
                    y1="20"
                    x2="20"
                    y2="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-[100vh] bg-white z-40 p-6 flex flex-col items-center justify-center space-y-4 text-lg font-semibold transition-all duration-300">
          <Link
            onClick={() => setOpen(false)}
            href="/"
            className="hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/about"
            className="hover:text-blue-500"
          >
            About
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/services"
            className="hover:text-blue-500"
          >
            Services
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/contact"
            className="hover:text-blue-500"
          >
            Contact Us
          </Link>
          <button className=" text-sm font-normal px-4 py-2 rounded-3xl bg-blue-500 hover:bg-blue-800 text-white transition-all ease-in-out delay-100">
            Request Services
          </button>
        </div>
      )}
    </>
  );
}
