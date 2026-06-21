// ブログ記事一覧
import Link from "next/link";
import { GoBook, GoCalendar } from "react-icons/go";
import { blogPosts } from "../../lib/MyData";

export function BlogIndex() {
    return(
        <>
        <h1 className="mb-4 px-16"><GoBook className="icon" aria-hidden="true" />ブログ記事一覧</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {blogPosts.map(post =>
            <div className="glass mx-12 mb-8 p-6 flex flex-col gap-3" key={post.id}>
                <h2 className="leading-snug">{post.title}</h2>
                <p className="text-sm text-gray-400 flex items-center gap-1">
                    <GoCalendar className="inline-block" />{post.date}
                </p>
                <p className="text-sm leading-relaxed flex-1">{post.summary}</p>
                <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block mt-2 text-sm text-blue-400 hover:underline"
                >
                    続きを読む →
                </Link>
            </div>
        )}
        </div>
        </>
    );
}
