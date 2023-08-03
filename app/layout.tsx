import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/_navbar/Navbar";
import Sidebar from "@/components/_sidebar/Sidebar";
const inter = Inter({ subsets: ["latin"] });
import { NextAuthProvider } from "./Providers";
import ChatBar from "@/components/_navbar/ChatBar";
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
        <NextAuthProvider>
          <main>
            <Navbar />
            <div className="grid  grid-cols-[1fr_10fr_1fr] 2xl:grid-cols-[2fr_13fr_2fr]">
              {/* dont forget to hide the chatbar on smaller screens */}
              <Sidebar />
              {children}
              <ChatBar />
            </div>
          </main>
        </NextAuthProvider>
        {/* will the invisible footer still count with the search engine crawlers? */}
      </body>
    </html>
  );
}
