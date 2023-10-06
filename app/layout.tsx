import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/_navbar/Navbar";
import Sidebar from "@/components/_sidebar/Sidebar";
import ChatBar from "@/components/_navbar/ChatBar";
import Footer from "@/components/_sidebar/Footer";
const inter = Inter({ subsets: ["latin"] });
import { NextAuthProvider } from "./Providers";
export const metadata: Metadata = {
  title: "კლაპტოპი",
  description: "ახალი და მეორადი ლეპტოპები საუკეთესო ფასად",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-text bg-background relative`}>
        <NextAuthProvider>
          <main>
            <Navbar />
            <div className="grid  grid-cols-[1fr_12fr] pr-8">
              {/* dont forget to hide the chatbar on smaller screens */}
              <Sidebar />
              {children}
            </div>
            {/* <ChatBar /> */}
            <Footer />
          </main>
        </NextAuthProvider>
        {/* will the invisible footer still count with the search engine crawlers? */}
      </body>
    </html>
  );
}
