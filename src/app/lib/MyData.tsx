import {
    SiTypescript,
    SiJavascript,
    SiPhp,
    SiNodedotjs,
    SiPostgresql,
    SiMysql,
    SiMongodb,
    SiDocker,
    SiGit,
    SiLaravel,
    SiVuedotjs,
    SiRedis,
    SiNextdotjs,
} from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
import { GoMail, GoCloud } from "react-icons/go";
import { Work, Skill, JourneyItem, Achievement, ExternalLink, BlogPost } from "./definition";

// homeの切り替わりフレーズのデータ
export const phrases: Array<string> = [
    "Backend Engineer",
    "NestJS / Node.js",
    "API設計・DB設計",
    "TypeScript",
    "フルスタック対応可",
    "日本語N1 / 中国語ネイティブ",
];

// 活動のデータ
export const works: Work[] = [
    {
        id: 1,
        title: "SaaS企業向けコーポレート・マーケティングサイト",
        date: "2025.04 - 2026.02",
        description: "SaaS企業向けマーケティングサイトの新規構築。サービス紹介・料金プラン・ブログ・お問い合わせ機能を含む構成。\n\n役割：フルスタックエンジニア（3名）\n担当：要件定義 / 設計・開発 / 運用\n技術：TypeScript, Next.js, Laravel, PostgreSQL, Docker, AWS, GitHub Actions, Jest, Cypress\n\n・Next.js によるフロントエンド実装（SSR / SSG 対応、SEO対策）\n・Laravel による API 設計・実装\n・お問い合わせフォーム実装・バリデーション対応\n・レスポンシブ対応・運用保守",
        src: "/portfolio.png",
    },
    {
        id: 2,
        title: "建設業向け業務効率化・管理システム",
        date: "2024.01 - 2025.03",
        description: "建設業向けの写真・データ管理および業務フロー管理システムの開発。\n\n役割：バックエンドエンジニア（6名）\n担当：基本設計 / 詳細設計 / 実装 / テスト / 保守運用\n技術：TypeScript, NestJS, Next.js, PostgreSQL, Docker, AWS(EC2/RDS), GitHub\n\n・NestJS による API 設計・実装\n・管理画面開発（React / Next.js、一部担当）\n・ユーザー・権限管理機能の実装\n・ログ機能の実装・改善",
        src: "/portfolio.png",
    },
    {
        id: 3,
        title: "建設業向け検査・帳票作成支援システム",
        date: "2021.04 - 2023.12",
        description: "建設業向け検査記録・帳票作成システムの新規構築および継続開発。\n\n役割：バックエンドエンジニア（4名）\n担当：基本設計 / 詳細設計 / 実装 / テスト / 保守運用\n技術：TypeScript, JavaScript, PHP, Laravel, Vue.js, Nuxt.js, MySQL, AWS, GitHub\n\n・API 設計・実装、データベース設計・クエリ最適化\n・ユーザー・権限管理機能の実装\n・ログ機能の設計・改善\n・保守運用・機能改善・導入支援",
        src: "/portfolio.png",
    },
];

// 技術スタックのデータ
// level: 1〜5（実務経験の深さを相対的に示す）
export const skills: Skill[] = [
    {
        id: 1,
        name: "TypeScript",
        level: 4,
        icon: <SiTypescript className="inline-block mr-2" />,
        description: "バックエンド・フロントエンド双方で3年以上使用。型設計やジェネリクスも実務で扱ってきた。",
    },
    {
        id: 2,
        name: "JavaScript",
        level: 4,
        icon: <SiJavascript className="inline-block mr-2" />,
        description: "TypeScriptと並行して使用。フロント・バックエンド双方の経験あり。",
    },
    {
        id: 3,
        name: "PHP",
        level: 4,
        icon: <SiPhp className="inline-block mr-2" />,
        description: "主にLaravelと組み合わせてAPI開発に使用。3年以上の実務経験あり。",
    },
    {
        id: 4,
        name: "Node.js / NestJS",
        level: 5,
        icon: <SiNodedotjs className="inline-block mr-2" />,
        description: "最もよく使う技術。NestJSでのAPI設計・権限管理・ログ設計など、3年以上担当してきた。",
    },
    {
        id: 5,
        name: "Express",
        level: 4,
        icon: <SiNodedotjs className="inline-block mr-2" />,
        description: "NestJS以前のプロジェクトで使用。REST API構築・ミドルウェア設計の経験あり。",
    },
    {
        id: 6,
        name: "Laravel",
        level: 4,
        icon: <SiLaravel className="inline-block mr-2" />,
        description: "API設計・実装、フォームバリデーション、認証まわりの実装に使用。3年以上の実務経験あり。",
    },
    {
        id: 7,
        name: "Next.js / React",
        level: 4,
        icon: <SiNextdotjs className="inline-block mr-2" />,
        description: "管理画面開発・SSR/SSG対応・SEO対策など。バックエンドが主だが、フロントも対応してきた。",
    },
    {
        id: 8,
        name: "Vue.js / Nuxt.js",
        level: 3,
        icon: <SiVuedotjs className="inline-block mr-2" />,
        description: "フロントエンド実装・管理画面開発で使用。実務2年程度。",
    },
    {
        id: 9,
        name: "PostgreSQL",
        level: 5,
        icon: <SiPostgresql className="inline-block mr-2" />,
        description: "最も使用頻度が高いDB。スキーマ設計・クエリ最適化・インデックス設計を3年以上担当。",
    },
    {
        id: 10,
        name: "MySQL",
        level: 4,
        icon: <SiMysql className="inline-block mr-2" />,
        description: "PostgreSQLと並行して使用。クエリ最適化・スキーマ設計の経験あり。",
    },
    {
        id: 11,
        name: "MongoDB",
        level: 3,
        icon: <SiMongodb className="inline-block mr-2" />,
        description: "ドキュメント指向DBの設計・運用を実務で経験。",
    },
    {
        id: 12,
        name: "Docker",
        level: 4,
        icon: <SiDocker className="inline-block mr-2" />,
        description: "開発環境構築・コンテナ管理・CI/CDとの連携に使用。3年以上の実務経験あり。",
    },
    {
        id: 13,
        name: "AWS",
        level: 3,
        icon: <GoCloud className="inline-block mr-2" />,
        description: "EC2 / RDS / S3 を使ったインフラ構築・運用を担当。実務2年程度。",
    },
    {
        id: 14,
        name: "Git / GitHub",
        level: 4,
        icon: <SiGit className="inline-block mr-2" />,
        description: "チーム開発でのブランチ運用・PRレビュー・GitHub Actions によるCI/CD構築を経験。",
    },
    {
        id: 15,
        name: "Redis",
        level: 3,
        icon: <SiRedis className="inline-block mr-2" />,
        description: "セッション管理・キャッシュ設計に使用。実務2年程度。",
    },
];

// 学歴・職歴のデータ
export const journey: JourneyItem[] = [
    {
        id: 1,
        period: "2017.04 - 2021.03",
        title: "台北城市科技大学（台湾）工学部 情報工学科（卒業）",
        description: "コンピュータサイエンスを専攻。ソフトウェア工学・データベース・ネットワークを中心に学習。学士（コンピュータサイエンス）取得。",
    },
    {
        id: 2,
        period: "2021.04 - 2023.12",
        title: "フリーランス バックエンドエンジニア（業務委託）",
        description: "建設業向け業務支援システムの新規構築および継続開発に従事。API設計・実装、データベース設計・クエリ最適化、保守運用、導入支援を担当。3〜4名の小規模チームで開発を担当。",
    },
    {
        id: 3,
        period: "2024.01 - 2025.03",
        title: "正社員 バックエンドエンジニア",
        description: "建設業向け業務効率化・管理システムの開発に従事。NestJSを用いたAPI設計・実装、権限管理機能・ログ機能の実装を担当。6名チームでの開発を経験。",
    },
    {
        id: 4,
        period: "2025.04 - 現在",
        title: "フリーランス フルスタックエンジニア（業務委託）",
        description: "SaaS企業向けコーポレート・マーケティングサイトの新規構築に従事。要件定義から設計・開発・運用まで担当。Next.js / Laravel を用いたフルスタック開発。",
    },
];

// 実績のデータ
export const achivements: Achievement[] = [
    {
        id: 1,
        title: "学士（コンピュータサイエンス）取得",
        date: "2021.03",
        description: "台北城市科技大学 工学部 情報工学科を卒業。",
    },
    {
        id: 2,
        title: "基本情報技術者試験 合格",
        date: "2022.10",
        description: "ITエンジニアとしての基礎知識を体系的に整理する目的で受験・合格。",
    },
    {
        id: 3,
        title: "日本語能力試験 N1 合格",
        date: "2025.12",
        description: "日本語でのビジネスコミュニケーション・技術文書読解に対応できるレベル。",
    },
    {
        id: 4,
        title: "ログ設計の見直しによる障害調査の効率化",
        date: "2023 - 2024",
        description: "障害発生時の原因特定に時間がかかる課題に対し、ログの出力項目と構造を見直し。調査時の手順が整理され、対応にかかる時間を短縮できた。",
    },
    {
        id: 5,
        title: "フォームのバリデーション改善による入力ミス削減",
        date: "2025 - 2026",
        description: "お問い合わせフォームのバリデーションとエラー表示を改善。ユーザーの入力ミスが減り、フォームの運用が安定した。",
    },
];

// 外部リンクのデータ
export const ExternalLinks: ExternalLink[] = [
    {
        id: 1,
        name: "GitHub",
        url: "https://github.com/",
        icon: <VscGithubInverted />,
        description: "個人プロジェクトやコードを公開しています。",
    },
    {
        id: 2,
        name: "メール",
        url: "mailto:Uniwonido687@gmail.com",
        icon: <GoMail />,
        description: "お仕事のご相談・お問い合わせはこちらからどうぞ。",
    },
];

// ブログ記事のデータ
export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "技術記事を準備中です",
        date: "2026.06（予定）",
        description: "NestJS・PostgreSQL・API設計などをテーマにした技術記事を執筆予定です。公開までしばらくお待ちください。",
        src: "/portfolio.png",
        link: "#",
    },
];
