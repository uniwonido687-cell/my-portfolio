// ウェルカムページ
import Image from "next/image";
import { ChangingPhrase } from "./ui/ChangingPhrase";

export const metadata = {
  title: "ポートフォリオサイト",
  description: "村上豪のポートフォリオサイト。バックエンドエンジニアとして、NestJS・Node.js・API設計・DB設計を中心に開発に携わっています。",
  alternates: { canonical: "/"}
}

export default function Home() {
  const greeting :string = "Hello, Welcome to My portfolio"
  return (
    <>
      <div className="flex flex-col w-full md:flex-row h-full justify-around items-center px-4">
        <h1 className="text-[48px] text-white mb-8 text-center md:text-left">
          {greeting}
          <ChangingPhrase />
        </h1>
          <Image src="/ray-so-export.png" alt="コードサンプル" width={720} height={720} className="w-[540px]" priority />
      </div>
    </>
  );
}
