import { env } from "@/env";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s | devstore",
    default: "devstore",
  },
  description:
    "Um projeto de comércio eletrônico simples, ideal para iniciantes que desejam aprender mais sobre o mundo do desenvolvimento web.",
  metadataBase: new URL(env.APP_URL),
};

interface IRootLayout {
  children: ReactNode;
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html className={inter.variable} lang="pt-BR">
      <body className="bg-zinc-950 text-zinc-50 antialiased">{children}</body>
    </html>
  );
}
