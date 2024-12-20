import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./output.css";
import { Analytics } from "@vercel/analytics/next";

const overusedGrotesk = localFont({
  src: "./fonts/OverusedGrotesk-VF.ttf",
  variable: "--overused-grotesk",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ipsum Else",
  description: "Filler Text for Web Developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${overusedGrotesk.className} flex h-fit min-h-[100svh] w-screen flex-col items-center justify-center overflow-y-auto bg-base-100 p-4 pt-0 text-black antialiased md:p-10`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
