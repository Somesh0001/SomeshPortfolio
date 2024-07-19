import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";

const inter = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Somesh Dwivedi Portfolio",
  description: "Somesh Dwivedi Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
