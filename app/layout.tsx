import type { Metadata } from "next";
import "../styles/globals.css";
import { clash, pretendard, arita, geistSans, geistMono } from "@/lib/fonts";
import Layout from "@/components/layout/Layout";

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
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
