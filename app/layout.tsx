import type { Metadata } from "next";
import "@/styles/globals.css";
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

export const metadata: Metadata = {
  title: "Hyeinisfree",
  description: "Hi Kim's Portfolio",
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
      <body>{children}</body>
    </html>
  );
}
