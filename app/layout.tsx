import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://adarshsnair.com'),
  title: {
    default: "Adarsh S Nair",
    template: "%s | Adarsh S Nair",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main
          className="relative overflow-hidden"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
