import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppBtn from "./components/WhatsAppBtn";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL("https://chiragepoxy.com"),
  title: {
    default: "Chirag Enterprise",
    template: `%s | Chirag Epoxy Solutions`,
  },
  description:
    "Learn about Chirag Epoxy, your trusted partner for epoxy and flooring solutions in Palghar. Excellence in service and customer satisfaction.",
  openGraph: {
    description:
      "Learn about Chirag Epoxy, your trusted partner for epoxy and flooring solutions in Palghar. Excellence in service and customer satisfaction.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className=" mt-[50px]">
          <WhatsAppBtn />
        </div>
        {children}

        <Footer />
      </body>
    </html>
  );
}
