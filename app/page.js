import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Getquote from "./components/Getquote";
import Strip from "./components/Strip";
import WhatsAppBtn from "./components/WhatsAppBtn";
import Head from "next/head";

export const metadata = {
  title: "Chirag Epoxy | Epoxy Flooring & Solutions in Palghar",
  description:
    "Chirag Epoxy offers premium epoxy and flooring solutions in Palghar. We are your trusted partner for durable and high-quality flooring services.",
  keywords: [
    "epoxy flooring Palghar",
    "epoxy solutions Palghar",
    "flooring contractors Palghar",
    "Chirag Epoxy",
    "Chirag Epoxy Palghar",
    "epoxy services",
    "flooring experts",
    "about epoxy solutions Palghar",
    "flooring professionals Palghar",
    "chiragenterprises",
    "chiragepxoy",
    "epxoy in palghar",
    "best epoxy near me",
    "best epoxy in palghar",
  ],
  // openGraph: {
  //   title: "Chirag Epoxy | Epoxy Flooring & Solutions in Palghar",
  //   description:
  //     "Discover Chirag Epoxy, the leading provider of epoxy and flooring solutions in Palghar. Quality, durability, and customer satisfaction guaranteed.",
  //   url: "https://chiragepoxy.com/",
  //   images: [
  //     {
  //       url: "https://chiragepoxy.com/images/home-og.jpg",
  //       alt: "Chirag Epoxy - Epoxy Flooring Solutions",
  //       width: 1200,
  //       height: 630,
  //     },
  //   ],
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Chirag Epoxy | Epoxy Flooring & Solutions in Palghar",
  //   description:
  //     "Discover Chirag Epoxy, your trusted provider for epoxy flooring and solutions in Palghar. Excellence in service and customer satisfaction.",
  //   images: ["https://chiragepoxy.com/images/home-og.jpg"],
  // },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>
          Chirag Epoxy | Trusted Epoxy & Flooring Experts in Palghar
        </title>
        <meta
          name="description"
          content="Learn about Chirag Epoxy, your trusted partner for epoxy and flooring solutions in Palghar. Excellence in service and customer satisfaction."
        />
        <meta
          name="keywords"
          content="Chirag Epoxy Palghar, epoxy services, flooring experts, about epoxy solutions Palghar, flooring professionals Palghar , chiragenterprises , chiragepxoy, epxoy in palghar , best epoxy near me , best epoxy in palghar"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head> */}
      <Hero />
      <About />
      <Strip />
      <Services showButton={true} />
      <Getquote />
    </>
  );
}
