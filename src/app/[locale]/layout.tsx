import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider, useMessages } from "next-intl";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
  console.log(messages);

  return (
    <html lang={locale} className={inter.className}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
