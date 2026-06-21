// ブログ記事詳細ページ（動的ルーティング）
import { notFound } from "next/navigation";
import { blogPosts } from "../../lib/MyData";
import { BlogDetail } from "../../ui/Blog/BlogDetail";
import type { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

// 静的パス生成
export async function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

// 動的 metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return { title: "記事が見つかりません" };
    return {
        title: post.title,
        description: post.summary,
        alternates: { canonical: `/blog/${post.slug}` },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) notFound();

    return <BlogDetail post={post} />;
}
