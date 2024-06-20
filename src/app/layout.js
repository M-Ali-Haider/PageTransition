import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
// import Transition from "@/components/Transition";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Page Transition",
  description:
    "Making the Dennis Snellenberg Page Transition using the App Router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
