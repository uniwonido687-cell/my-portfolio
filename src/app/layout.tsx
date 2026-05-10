import type { Metadata } from "next";
import "./globals.css";
import { ParticlesBackground } from "./ui/ParticlesBackground";
import { NavigationBar } from "./ui/NavigationBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://daien-mineoka.vercel.app/"),
  title: {
    default: "峰岡 大円 | ポートフォリオサイト",
    template: "%s | 峰岡 大円"
  },
  description: "峰岡大円のポートフォリオサイト。バックエンドエンジニア / フルスタックエンジニアとして、NestJS・Node.js・API設計・DB設計を中心に開発に携わっています。",
  alternates: { canonical: "/"},
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    siteName: "峰岡 大円のポートフォリオサイト",
    title: "峰岡 大円 | ポートフォリオサイト",
    description: "バックエンドエンジニア / フルスタックエンジニアとして、NestJS・Node.js・API設計・DB設計を中心に開発に携わっています。",
    images: [{ url: "/Me.png", width: 1200, height: 630, alt: "峰岡 大円 ポートフォリオ"}],
  },
  twitter: {
    card: "summary_large_image",
    title: "峰岡 大円 | ポートフォリオサイト",
    description: "バックエンドエンジニア / フルスタックエンジニアとして、NestJS・Node.js・API設計・DB設計を中心に開発に携わっています。",
    images: ["/Me.png"]
  },
  robots: { index: true, follow: true},
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col">
        <NavigationBar />
        <ParticlesBackground />
        <main className="relative z-10 pt-32 flex-1">{children}</main>
      <footer className="bg-gray-200/30 py-4 mt-4 w-full text-center relative z-50">© 2026 Daien Mineoka</footer>
      </body>
    </html>
  );
}
