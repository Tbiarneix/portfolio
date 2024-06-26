import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";

import "./globals.css";
import { luciole } from "@/font/custom-font";

export const metadata: Metadata = {
  title: "Thomas Biarneix - Web developer",
  description: "Frontend web developer based in Toulouse, France",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <html lang={locale} className={luciole.className}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
