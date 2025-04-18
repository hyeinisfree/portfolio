import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const pretendard = localFont({
  src: "../public/fonts/pretendard/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
});

export const clash = localFont({
  src: "../public/fonts/clash-display/ClashDisplay-Variable.woff2",
  display: "swap",
  variable: "--font-clash",
});

export const arita = localFont({
  src: [
    {
      path: "../public/fonts/arita-dotum/AritaDotumKR-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/arita-dotum/AritaDotumKR-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/arita-dotum/AritaDotumKR-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/arita-dotum/AritaDotumKR-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/arita-dotum/AritaDotumKR-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-arita",
});

export const yoonwoo = localFont({
  src: "../public/fonts/yoonwoo/yoonwoo.ttf",
  display: "swap",
  variable: "--font-yoonwoo",
});

export const wish = localFont({
  src: "../public/fonts/wish/wish.ttf",
  display: "swap",
  variable: "--font-wish",
});

export const jaram = localFont({
  src: "../public/fonts/jaram/jaram.ttf",
  display: "swap",
  variable: "--font-jaram",
});
