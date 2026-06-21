// ナビゲーションバー
// usePathnameで動的なUIを実装しているのでuse client
'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { VscGithubInverted } from "react-icons/vsc"; 
import { GoHome, GoPerson, GoMail, GoBook, GoSponsorTiers } from "react-icons/go";

const pages = [
    { name: "Home", path: "/", icon: <GoHome /> },
    { name: "About", path: "/about", icon: <GoPerson /> },
    { name: "Portfolio", path: "/portfolio", icon: <GoSponsorTiers /> },
    { name: "Blog", path: "/blog", icon: <GoBook /> },
    { name: "Contact", path: "/contact", icon: <GoMail /> },
];

export function NavigationBar() {
    const pathname = usePathname(); // 現在のパスを取得
    return(
            <nav className="fixed top-0 left-0 w-full z-50 px-4 py-3 md:px-8 md:py-6"> {/* navigation bar を画面上部に固定 */}
                <div className = "text-xl flex flex-wrap items-center justify-between gap-2 glass">
                    <a
                        href="https://github.com/uniwonido687-cell/my-portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-left gap-2 btn"
                        aria-label="GitHubリポジトリを開く（新しいタブ）"
                    >
                        <span className="text-[1.5rem] flex-shrink-0" aria-hidden="true"><VscGithubInverted /></span>
                        <span className="hidden md:block">GitHub</span>
                    </a>
                    {pages.map((page) => {
                        return(
                            <div className ="flex items-center" key={page.name}>
                                <Link
                                    href={page.path}
                                    className={`flex items-center btn px-2 py-1 md:px-4 md:py-2 ${pathname === page.path ? "bg-green-400/40" : ""}`}
                                    aria-current={pathname === page.path ? "page" : undefined}
                                >
                                    <span className="text-[1.5rem] pr-1 flex-shrink-0" aria-hidden="true">{page.icon}</span>
                                    <span className="hidden md:block">{page.name}</span>
                                    <span className="sr-only md:hidden">{page.name}</span>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </nav>
    );
}
