// ブログ一覧ページ
import {BlogIndex} from '../ui/Blog/BlogIndex';

export const metadata = {
  title: "ブログ",
  description: "峰岡大円が執筆した技術記事の一覧です。",
  alternates: { canonical: "/blog"}
}

export default function Blog() {
    return (
        <>
            <BlogIndex />
        </>
    );
}
