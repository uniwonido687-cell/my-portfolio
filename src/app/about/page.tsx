// プロフィールページ
import { AboutMe } from "../ui/About/AboutMe";

export const metadata = {
  title: "自己紹介",
  description: "村上豪の自己紹介ページ。経歴・趣味・人となりを紹介しています。",
  alternates: { canonical: "/about"}
}


export default function About() {
    return (
        <>
            <AboutMe />
        </>
    );
}
