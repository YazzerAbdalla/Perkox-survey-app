import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Nav-bar";
import Footer from "./Components/Footer";
import { DrawerProvider } from "@/contexts/DrawerContext";
import { DeviceProvider } from "@/contexts/DeviceContext";
import { FilterProvider } from "@/contexts/FilterContext";
import StarBackground from "./Components/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PERKOX",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="White-Perkox.ico" type="image/x-icon" />
      </head>
      <body>
        <Navbar />
        <div className="mt-[5rem]">
          <FilterProvider>
            <Footer />
            <DeviceProvider>
              <DrawerProvider>{children}</DrawerProvider>
              <StarBackground />
            </DeviceProvider>
          </FilterProvider>
        </div>
      </body>
    </html>
  );
}
