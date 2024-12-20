import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="block md:hidden"> <MobileNavbar /></div>
       
        <div className="hidden md:block">  <Navbar/>     </div>

        {children}
        <Footer />
    


      </body>
    </html>
  );
}
