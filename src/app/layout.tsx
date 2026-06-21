import type { Metadata } from "next";
import ""./globals.css";"
import { ParticlesBackground } from "./ui/ParticlesBackground";
import { NavigationBar } from "./ui/NavigationBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://daien-mineoka.vercel.app/"),
  title: {
    default: "村上豪 | Backend Engineer Portfolio",
    template: "%s | 村上豪"
  },
  description: "Java、Spring Boot、Next.js、TypeScriptを中心に開発を行うバックエンドエンジニア村上豪のポートフォリオサイトです。",
  alternates: { canonical: "/"},
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    siteName: "村上豪のポートフォリオサイト",
    title: "村上豪 | Backend Engineer Portfolio",
    description: "Java、Spring Boot、Next.js、TypeScriptを中心に開発を行うバックエンドエンジニア村上豪のポートフォリオサイトです。",
    images: [{ url: "/Me.png", width: 1200, height: 630, alt: "村上豪 ポートフォリオ"}],
  },
  twitter: {
    card: "summary_large_image",
    title: "村上豪 | Backend Engineer Portfolio",
    description: "Java、Spring Boot、Next.js、TypeScriptを中心に開発を行うバックエンドエンジニア村上豪のポートフォリオサイトです。",
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
      <footer className="bg-gray-200/30 py-4 mt-4 w-full text-center relative z-50">© 2026 村上豪</footer>
      </body>
    </html>
  );
}
