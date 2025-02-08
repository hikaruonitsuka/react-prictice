import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "React練習",
  description: "React練習用のリポジトリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <div className="mx-auto grid min-h-screen max-w-5xl grid-cols-[100%] grid-rows-[auto_1fr_auto]">
          <Header />
          <main className="my-8 px-4 sm:px-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
