import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yusuf Kaan Köksal — Robotics & Software",
  description:
    "Robotics enthusiast and software developer focused on autonomous systems and competitive robotics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased bg-[#030712] text-neutral-200`}>
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}
