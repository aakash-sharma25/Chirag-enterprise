import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Getquote from "./components/Getquote";
import Strip from "./components/Strip";
import WhatsAppBtn from "./components/WhatsAppBtn";

export default function Home() {
  return (
    <>
      <div className=" mt-[50px]">
       <WhatsAppBtn />
      </div>
      <Hero />
      <About />
      <Strip />
      <Services />
      <Getquote />
    </>
  );
}
