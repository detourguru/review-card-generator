import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Review card generator",
  description: "generate review card easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-basic w-full h-screen px-8 py-12">{children}</body>
    </html>
  );
}
