import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./navbar/Navbar";
import Sidebar from "./navbar/Sidebar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "კლაპტოპი",
  description: "harro everinyan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-text bg-background relative`}>
        <Navbar />
        {children}
        {/* will the invisible footer still count with the search engine crawlers? */}
      </body>
    </html>
  );
}
