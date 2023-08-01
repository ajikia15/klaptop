import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/_navbar/Navbar";
import Sidebar from "@/components/_sidebar/Sidebar";
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
        <main className="grid grid-cols-[1fr_6fr]">
          <Sidebar />
          {children}
        </main>

        {/* will the invisible footer still count with the search engine crawlers? */}
      </body>
    </html>
  );
}
