import type { Metadata } from "next";
import "../styles/globals.css";
import { clash, pretendard, arita, geistSans, geistMono } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "My Next.js Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${clash.variable} ${pretendard.variable} ${arita.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
