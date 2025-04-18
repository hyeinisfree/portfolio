import type { Metadata } from "next";
import "../styles/globals.css";
import {
  clash,
  pretendard,
  arita,
  geistSans,
  geistMono,
  yoonwoo,
  wish,
  jaram,
} from "@/lib/fonts";
import HomeLayout from "@/components/layout/HomeLayout";

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
      className={`${clash.variable} ${pretendard.variable} ${arita.variable} ${yoonwoo.variable} ${wish.variable} ${jaram.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <HomeLayout>{children}</HomeLayout>
      </body>
    </html>
  );
}
