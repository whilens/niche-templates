import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niche Templates — демо сайтов по нишам",
  description: "Один визуальный шаблон на нишу: шиномонтаж, логопеды, УК, психология и ещё 6 направлений.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
