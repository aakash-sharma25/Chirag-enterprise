import Image from "next/image";
import React from "react";
import logo from "@/public/logo.jpg";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <div className=" p-[20px] w-[100%] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
        <div className="max-w-screen-lg mx-auto flex items-center justify-between text-xl font-semibold">
          <Image
            src={logo}
            alt="company logo"
            width={50}
            height={50}
            className=""
          />
          <div className="flex justify-evenly w-[40%] gap-5">
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
            <button className=" text-sm font-normal px-4 py-2 rounded-3xl bg-blue-500 hover:bg-blue-800 text-white transition-all ease-in-out delay-100">
              Request Services
            </button>
          </div>
          {/* <div className="hamburger"> */}
          {/* <GiHamburgerMenu onClick={toggle} /> */}
          {/* </div> */}

          {/* <div className=" bg-white absolute top-[100%] left-[0px]  w-[100vw] text-center"> */}
          {/* {open && <Drawer setopen={setopen} />} */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
