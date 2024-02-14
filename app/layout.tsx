import type { Metadata } from "next";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "My portfolio | Index",
  description: "A tourist guide portfolio website",
};

export default function RootLayout({ children } : Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className='bg-peach-600'>
        <NextTopLoader color="#B27947" showSpinner={false}/>
        {children}
        {/* Init AOS */}
      </body>
    </html>
  );
}
