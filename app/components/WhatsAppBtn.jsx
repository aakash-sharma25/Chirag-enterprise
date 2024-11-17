"use client";
import Image from "next/image";
import React from "react";

export default function WhatsAppBtn() {
  return (
    <div className="fixed right-[30px] bottom-[30px] hire z-50 cursor-pointer">
      <a
        href="https://wa.me/+918007443651?text=Hello%20there!"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/whatsapp.png"
          alt="whatsapp logo"
          width={70}
          height={70}
          className="animate-jump w-[50px] md:w-[70px]"
        />
      </a>
    </div>
  );
}
