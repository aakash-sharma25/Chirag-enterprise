import About from "../components/About";
import MissionAndVision from "../components/MissionAndVision";
import Strip from "../components/Strip";

export const metadata = {
  title: "About Us | Chirag Epoxy - Flooring Experts in Palghar",
  description:
    "Learn about Chirag Epoxy, your trusted partner for epoxy and flooring solutions in Palghar. Discover our commitment to quality and customer satisfaction.",
  keywords: [
    "about Chirag Epoxy",
    "epoxy flooring experts Palghar",
    "trusted flooring solutions Palghar",
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
  //   title: "About Us | Chirag Epoxy - Flooring Experts in Palghar",
  //   description:
  //     "Learn about Chirag Epoxy, your trusted partner for epoxy flooring solutions in Palghar. Discover our journey and commitment to excellence.",
  //   url: "https://chiragepoxy.com/about",
  //   images: [
  //     {
  //       url: "https://chiragepoxy.com/images/about-og.jpg",
  //       alt: "About Chirag Epoxy - Trusted Flooring Solutions",
  //       width: 1200,
  //       height: 630,
  //     },
  //   ],
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "About Us | Chirag Epoxy - Flooring Experts in Palghar",
  //   description:
  //     "Learn about Chirag Epoxy, your trusted partner for epoxy flooring and solutions in Palghar. Discover our journey and values.",
  //   images: ["https://chiragepoxy.com/images/about-og.jpg"],
  // },
  robots: {
    index: true,
    follow: true,
  },
};

export default function page() {
  return (
    <>
      {/* <Head>
        <title>
          About Chirag Epoxy | Trusted Epoxy & Flooring Experts in Palghar
        </title>
        <meta
          name="description"
          content="Learn about Chirag Epoxy, your trusted partner for epoxy and flooring solutions in Palghar. Excellence in service and customer satisfaction."
        />
        <meta
          name="keywords"
          content="Chirag Epoxy Palghar, epoxy services, flooring experts, about epoxy solutions Palghar, flooring professionals Palghar , chiragenterprises , chiragepxoy, epxoy in palghar , best epoxy near me , best epoxy in palghar"
        />

      </Head> */}
      <h1 className=" text-3xl text-blue-700 font-bold mt-[120px] text-center ">
        About Us
      </h1>
      <About />
      <Strip />
      <MissionAndVision />
    </>
  );
}
