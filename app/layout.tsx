import type { Metadata } from "next";
import "../styles/globals.css";

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
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
