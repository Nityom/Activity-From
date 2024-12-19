import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar";
import "./globals.css";
import Navbar from "../components/MyNavbar";
import { AppSidebar } from "../components/MySidebar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Activity App",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
        <main>
      <Navbar/>
          <div className="flex gap-4">
          <AppSidebar/>
          {children}
          </div>
          <Footer/>
        </main>
        </SidebarProvider>
      </body>
    </html>
  );
}