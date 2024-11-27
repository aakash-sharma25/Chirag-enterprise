import React from "react";

export default function Getquote() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className=" flex flex-col gap-10 items-center justify-center text-center py-10 bg-blue-900 my-10 text-white"
    >
      <h1 className=" text-3xl text-yellow-500 ">
        {" "}
        Get a personalized quote today!
      </h1>
      <p className="w-[80%] md:w-[50%] text-center">
        At Chirag Enterprise, we're ready to provide you with a tailored quote
        that meets your needs. Click on the quote button and discover how our
        services can transform your spaces. Don't wait any longer, get your
        quote now!
      </p>
      <a
        href="https://wa.me/+918007443651?text=Hello%20there!"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-lg px-6 py-2 rounded-3xl bg-yellow-500 hover:bg-yellow-600 text-black transition-all ease-in-out delay-100"
      >
        Get Quote Today
      </a>
    </div>
  );
}
