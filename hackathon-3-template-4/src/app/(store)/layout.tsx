import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import HeadingBar from "@/components/HeadingBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterHeadingBar from "@/components/FooterHeadingBar";
import { Josefin_Sans, Lato } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-josefin",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
  variable: "--font-lato",
});

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

export const metadata: Metadata = {
  title: "Hackathon Project",
  description: "Giaic hackathon project assignment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${josefin.variable} ${lato.variable} ${geistMono.variable} antialiased`}
        >
          <HeadingBar />
          <Navbar />
          <div className="max-w-[1920px] mx-auto">{children}</div>
          <Footer />
          <FooterHeadingBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
