import type { Metadata } from "next";
import { Cascadia_Code } from "next/font/google";
import "./globals.css";

const cascadiaCode = Cascadia_Code({
  variable: "--font-cascadia-code",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "Привет, я Ваня",
  description: "Фулстек-разработчик на JavaScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${cascadiaCode.variable} antialiased`}>{children}</body>
    </html>
  );
}
