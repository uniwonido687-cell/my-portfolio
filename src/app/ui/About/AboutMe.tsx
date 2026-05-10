// 自己紹介
import { GoPerson, GoUnmute, GoFlame, GoGlobe, GoCrossReference } from "react-icons/go";
import { VscCoffee } from "react-icons/vsc";
import Image from "next/image";

export function AboutMe() {
    return (
        <>
        <h1 className="mb-4 px-16"><GoPerson className="icon" />自己紹介</h1>
        <div className="flex flex-col md:flex-row items-center mb-8">
            <Image src="/Me.png" alt="Daien Mineoka" width={500} height={500} className="rounded-full mx-16 mb-4" priority/>
            <div className="glass p-4 mx-16">
                <h2 className=" mb-2">峰岡 大円</h2><br />
                <p>バックエンドエンジニア / フルスタックエンジニア</p><br />
                <p>2021年より、建設業向け業務支援システムやSaaS企業向けWebアプリケーションの開発に従事しています。NestJS / Node.js を中心としたバックエンド開発を得意とし、API設計・データベース設計・パフォーマンス改善に携わってきました。</p><br />
                <p>バックエンドを主軸としつつ、React / Next.js を用いたフロントエンド開発にも対応しています。</p>
            </div>
        </div>

        <h1 className="mb-4 px-16"><GoUnmute className="icon" />好きな曲</h1>
        <div className="flex flex-col md:flex-row items-center justify-center md:px-16">
            <div className="glass p-4 mb-8 w-full max-w-[400px] md:mr-8">
                <iframe width="400" height="225" src="https://www.youtube.com/embed/OwLkGMBYL7I" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" className="w-full aspect-video" allowFullScreen></iframe>
            </div>
            <div className="glass p-4 mb-8 w-full max-w-[400px] md:ml-8">
                <iframe width="400" height="225" src="https://www.youtube.com/embed/bCCRV3gMunY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" className="w-full aspect-video" allowFullScreen></iframe>
            </div>
        </div>

        <h1 className="mb-4 px-16"><GoFlame className="icon" />趣味</h1>
        <div className="flex flex-col mb-8">
            <div className="glass mb-4 p-4 mx-16">
                <h2 className="mb-2"><VscCoffee className="text-[1.5rem] icon" />コーヒー</h2>
                <p>自宅ではハンドドリップで淹れています。作業の合間に一杯飲むのが日々の楽しみです。豆の産地や焙煎度による味の違いを試すのが好きです。</p>
            </div>
            <div className="glass mb-4 p-4 mx-16">
                <h2 className="mb-2"><GoGlobe className="text-[1.5rem] icon" />技術記事・ドキュメント読書</h2>
                <p>日本語・中国語・英語の技術記事やドキュメントを読むのが習慣になっています。気になったフレームワークやアーキテクチャの話題は、実務に関係なくとりあえず読んでしまいます。</p>
            </div>
        </div>

        <h1 className="mb-4 px-16"><GoCrossReference className="icon" />一言</h1>
        <div className="glass p-4 mb-8 mx-16">
            <p>バックエンドを軸に、設計から運用まで一通り経験してきました。引き続き実務を通じてスキルを積んでいきたいと思っています。</p>
        </div>
        </>

    );
}
