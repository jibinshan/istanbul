import "@/styles/globals.css";

import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "Istanbul",
  description:
    "Bavette was born from a passion for bringing the finest cuts of beef to the table, with a commitment to sustainability and premium quality.",
  icons: [{ rel: "icon", url: "/images/logo.png" }],
};

const manrope = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const playfair = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom font-roboto flex min-h-screen bg-[#070707] text-[#FBEAD2] antialiased",
          manrope.variable,
          playfair.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
