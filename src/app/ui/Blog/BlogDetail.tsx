// ブログ記事詳細
import Link from "next/link";
import { GoBook, GoCalendar, GoArrowLeft } from "react-icons/go";
import { BlogPost } from "../../lib/definition";

interface BlogDetailProps {
    post: BlogPost;
}

export function BlogDetail({ post }: BlogDetailProps) {
    // Markdown見出し・段落をシンプルにレンダリングするヘルパー
    const renderContent = (content: string) => {
        return content.split("\n").map((line, index) => {
            if (line.startsWith("## ")) {
                return (
                    <h2 key={index} className="mt-8 mb-3">
                        {line.replace("## ", "")}
                    </h2>
                );
            }
            if (line.startsWith("### ")) {
                return (
                    <h3 key={index} className="mt-6 mb-2 text-lg font-bold">
                        {line.replace("### ", "")}
                    </h3>
                );
            }
            if (line === "---") {
                return <hr key={index} className="my-6 border-gray-500/50" />;
            }
            if (line === "") {
                return <br key={index} />;
            }
            return (
                <p key={index} className="leading-relaxed">
                    {line}
                </p>
            );
        });
    };

    return (
        <>
            <div className="px-8 md:px-16 mb-4">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                >
                    <GoArrowLeft />ブログ一覧に戻る
                </Link>
            </div>

            <div className="glass mx-8 md:mx-16 mb-12 p-6 md:p-10">
                <div className="mb-2 flex items-center gap-1 text-sm text-gray-400">
                    <GoBook className="inline-block" />
                    <span>ブログ</span>
                </div>
                <h1 className="mb-3 leading-snug">{post.title}</h1>
                <p className="text-sm text-gray-400 flex items-center gap-1 mb-8">
                    <GoCalendar className="inline-block" />{post.date}
                </p>
                <div className="prose-custom">
                    {renderContent(post.content)}
                </div>
            </div>
        </>
    );
}
