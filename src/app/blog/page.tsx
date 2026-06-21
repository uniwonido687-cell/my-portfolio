// ブログ一覧ページ
import {BlogIndex} from '../ui/Blog/BlogIndex';

export const metadata = {
  title: "ブログ",
  description: "村上豪が執筆した技術記事の一覧です。バックエンド開発・Next.js・TypeScriptなどの知見を発信しています。",
  alternates: { canonical: "/blog"}
}

export default function Blog() {
    return (
        <>
            <BlogIndex />
        </>
    );
}
