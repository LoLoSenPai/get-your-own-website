import localFont from "next/font/local";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";
import { ReactLenis } from "@/lib/SmoothScrollProvider";

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
  title: "NFT | Memecoins | Crypto | Web3",
  description: "Get the best website for your project, business, or personal use. We offer a wide range of services to help you get started.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactLenis root>
          <Navbar />
          {children}
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
