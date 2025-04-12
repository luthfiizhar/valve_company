import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import NavigationBar from "./components/navigationBar/NavigationBar";
import Footer from "./components/Footer";
import Transition from "./components/Transition";
import { Toaster } from "@/components/ui/toaster";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Stock of Valf",
  description: "Stock of Valf a Kurvalf Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className}antialiased`}>
        <NavigationBar></NavigationBar>
        <Transition>{children}</Transition>
        <Footer></Footer>
        <Toaster />
      </body>
    </html>
  );
}
