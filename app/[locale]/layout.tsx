import type { Metadata } from "next";
import { ReactNode } from "react";
import { useLocale } from "next-intl";
import { Providers } from "./providers";
import NextTopLoader from "nextjs-toploader";
import { notFound } from "next/navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "My portfolio | Index",
  description: "A tourist guide portfolio website",
};

type Props = {
  children: ReactNode,
  params: {locale: string}
}

export default function LocaleLayout({ children, params } : Props) {
  const locale = useLocale();

  if(params.locale !== locale) notFound();

  return (
    <html lang={locale}>
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
