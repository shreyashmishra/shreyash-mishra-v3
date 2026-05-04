import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./styles/theme.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shreyash Mishra",
  description: "Math & Computing student at the University of Waterloo. Software developer building full-stack products, internal tools, and AI-powered applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
