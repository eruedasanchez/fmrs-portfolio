import type { Metadata } from "next";
import { Providers } from "./providers";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

export const metadata: Metadata = {
  title: "My portfolio | Index",
  description: "A tourist guide portfolio website",
};

export default function RootLayout({ children } : Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className='bg-peach-600 dark:bg-slate-800'>
        <Providers>
          <NextTopLoader color="#B27947" showSpinner={false}/>
          {children}
          {/* Init AOS */}
        </Providers>
      </body>
    </html>
  );
}
