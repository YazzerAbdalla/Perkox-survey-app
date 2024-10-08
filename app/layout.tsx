import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DrawerProvider } from "@/contexts/DrawerContext";
import { DeviceProvider } from "@/contexts/DeviceContext";
import { FilterProvider } from "@/contexts/FilterContext";
import { DrawerTabsProvider } from "@/contexts/DrawerTabs";
import { CardProvider } from "@/contexts/CardContext";
import { DataProvider } from "@/contexts/DataContext";
import { ErrorContextProvider } from "@/contexts/ErrorContext";
import { FilteredDataProvider } from "@/contexts/FilteredDataContext";
import { DeviceTypeProvider } from "@/contexts/DeviceTypeContext";

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
        <link
          rel="shortcut icon"
          href="/perkox-logo-1.ico"
          type="image/x-icon"
        />
      </head>
      <body>
        {/* <div className="max-w-5xl mx-auto p-4 "> */}
        {/* </div> */}
        <div className=" p-6 min-h-[calc(100vh-180px)]">
          <DeviceTypeProvider>
            <FilteredDataProvider>
              <ErrorContextProvider>
                <DataProvider>
                  <CardProvider>
                    <FilterProvider>
                      <DeviceProvider>
                        <DrawerTabsProvider>
                          <DrawerProvider>{children}</DrawerProvider>
                        </DrawerTabsProvider>
                      </DeviceProvider>
                    </FilterProvider>
                  </CardProvider>
                </DataProvider>
              </ErrorContextProvider>
            </FilteredDataProvider>
          </DeviceTypeProvider>
        </div>
      </body>
    </html>
  );
}
