import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My portfolio | Index",
  description: "A tourist guide portfolio website",
};

export default function RootLayout({ children } : Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={`bg-peach-600 ${manrope.className}`}>
        <NextTopLoader color="#5700FF" showSpinner={false}/>
        {children}
        {/* Init AOS */}
      </body>
    </html>
  );
}
