import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Getquote from "./components/Getquote";
import Strip from "./components/Strip";
import WhatsAppBtn from "./components/WhatsAppBtn";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
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
      </Head>
      <Hero />
      <About />
      <Strip />
      <Services showButton={true} />
      <Getquote />
    </>
  );
}
