import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const JBM = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sadev Kaveesha",
  description: "Sadev Kaveesha | Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-black text-white ${JBM.className} flex flex-col justify-between h-screen`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
