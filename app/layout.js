import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./(core)/components/Navbar";
import Footer from "./(core)/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Do Well Do Good | Jakarta Business School",
  description:
    "Jakarta Business School — Do Well Do Good programs, insights and careers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
