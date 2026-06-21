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
];

// 活動のデータ
export const works: Work[] = [
    {
        id: 1,
        title: "SaaS企業向けコーポレート・マーケティングサイト",
        date: "2025.04 - 2026.02",
        description: "SaaS企業向けマーケティングサイトの新規構築。サービス紹介・料金プラン・ブログ・お問い合わせ機能を含む構成。\n\n役割：フルスタックエンジニア（3名）\n担当：要件定義 / 設計・開発 / 運用\n技術：TypeScript, Next.js, Laravel, PostgreSQL, Docker, AWS, GitHub Actions, Jest, Cypress\n\n・Next.js によるフロントエンド実装（SSR / SSG 対応、SEO対策）\n・Laravel による API 設計・実装\n・お問い合わせフォーム実装・バリデーション対応\n・レスポンシブ対応・運用保守",
        src: "/portfolio1.png",
    },
    {
        id: 2,
        title: "建設業向け業務効率化・管理システム",
        date: "2024.01 - 2025.03",
        description: "建設業向けの写真・データ管理および業務フロー管理システムの開発。\n\n役割：バックエンドエンジニア（6名）\n担当：基本設計 / 詳細設計 / 実装 / テスト / 保守運用\n技術：TypeScript, NestJS, Next.js, PostgreSQL, Docker, AWS(EC2/RDS), GitHub\n\n・NestJS による API 設計・実装\n・管理画面開発（React / Next.js、一部担当）\n・ユーザー・権限管理機能の実装\n・ログ機能の実装・改善",
        src: "/portfolio2.png",
    },
    {
        id: 3,
        title: "建設業向け検査・帳票作成支援システム",
        date: "2021.04 - 2023.12",
        description: "建設業向け検査記録・帳票作成システムの新規構築および継続開発。\n\n役割：バックエンドエンジニア（4名）\n担当：基本設計 / 詳細設計 / 実装 / テスト / 保守運用\n技術：TypeScript, JavaScript, PHP, Laravel, Vue.js, Nuxt.js, MySQL, AWS, GitHub\n\n・API 設計・実装、データベース設計・クエリ最適化\n・ユーザー・権限管理機能の実装\n・ログ機能の設計・改善\n・保守運用・機能改善・導入支援",
        src: "/portfolio3.png",
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
        url: "https://github.com/uniwonido687-cell/my-portfolio",
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
        title: "なぜバックエンドエンジニアの私がNext.jsでポートフォリオサイトを作ったのか",
        slug: "why-i-built-portfolio-with-nextjs",
        date: "2026.06.22",
        summary: "バックエンドエンジニアとして日々APIやDB設計に向き合ってきた私が、なぜNext.jsでポートフォリオサイトを作ることにしたのか。技術選定の理由から苦労した点、今後の目標まで振り返ります。",
        content: `## はじめに

はじめまして、村上豪です。バックエンドエンジニアとしてNestJS / Node.js を中心に、API設計・データベース設計・パフォーマンス改善に携わっています。

このサイトは私のポートフォリオサイトです。「自分の技術を可視化したい」「これまでの実績をちゃんと伝えたい」という思いから作りました。

---

## なぜ作ったのか

### 技術を可視化したい

バックエンドエンジニアの仕事は、外から見えにくいものです。APIの設計がどれだけ丁寧か、DBのクエリがどれだけ最適化されているか、コードの保守性がどれだけ高いか——これらは動いているサービスの裏側にあるため、採用担当者やクライアントには伝わりづらい。

だからこそ、自分の技術スタックや実績を整理して「見える形」にしたいと思いました。

### 実績を伝えたい

これまでフリーランスや正社員として複数のプロジェクトに携わってきましたが、経歴書だけでは伝えられる情報に限界があります。どんな技術を使ったか、何を担当したか、何に苦労したか——ポートフォリオサイトなら、より詳しく・より自分らしく伝えられます。

### 学習成果を残したい

新しい技術を学んだとき、その成果をどこかに残しておきたい。ブログ記事という形で残すことで、自分の学習履歴にもなりますし、同じ課題を持つ誰かの役に立てるかもしれません。

---

## 使用技術

### Next.js

フロントエンドのフレームワークにはNext.jsを採用しました。App Routerによるファイルベースルーティング、Server Actionsによるフォーム送信、SSR/SSGによるSEO対応など、ポートフォリオサイトに必要な機能が揃っています。

バックエンドが専門の私にとって、Reactのエコシステムに慣れるための良い機会にもなりました。

### TypeScript

型安全性を重視してTypeScriptを採用しました。バックエンド開発でも日常的に使用しているため、フロントエンドでも一貫して使えるのは大きなメリットです。定義ファイルを分離して型を管理する設計にしたことで、データ構造の変更にも柔軟に対応できています。

### Tailwind CSS

CSSフレームワークにはTailwind CSSを採用しました。ユーティリティファーストの設計思想は、コンポーネント単位でスタイルを管理するReactとの相性が良く、デザインの一貫性を保ちやすいと感じました。

glassmorphism（すりガラス風デザイン）など、視覚的な工夫もTailwindのクラスで比較的簡単に実現できました。

### Vercel

デプロイ先にはVercelを選びました。Next.jsとの親和性が高く、GitHubとの連携によりプッシュするたびに自動デプロイされる環境が簡単に構築できます。

### Resend

お問い合わせフォームのメール送信にはResendを使用しました。Server Actionsと組み合わせることで、APIキーをクライアントに露出させずにサーバーサイドでメール送信処理を行える構成にしています。

---

## 苦労した点

### App Routerの学習

Next.js 13以降のApp RouterはPages Routerと異なる考え方が必要でした。Server ComponentsとClient Componentsの使い分け、レイアウトの設計など、最初は戸惑う部分も多かったです。

特に「どのコンポーネントをServer Componentにして、どこからClient Componentにするか」という境界線の判断は、実際に動かしながら試行錯誤しました。

### レスポンシブ対応

バックエンドが専門のため、CSSやレスポンシブデザインの実装は苦手意識がありました。TailwindのブレイクポイントクラスやFlexbox・Gridレイアウトを活用して、スマートフォンからPCまで崩れないデザインを目指しました。

### Server Actions

フォームからのメール送信にServer Actionsを採用しましたが、エラーハンドリングやフォームのバリデーション、送信中の状態管理（useFormStatus）など、考慮すべき点が多かったです。

### デプロイ

ローカルでは問題なく動いていたものが、Vercelにデプロイすると環境変数の設定やビルドエラーが発生することがありました。特にServer-onlyなモジュールの扱いや、環境変数の設定漏れは要注意でした。

---

## 今後の目標

### Java / Spring Bootへの挑戦

バックエンドエンジニアとしてさらなるスキルアップのために、JavaとSpring Bootを本格的に学習する予定です。エンタープライズ向けの堅牢なAPIを設計・実装できるエンジニアを目指しています。

### バックエンド開発の深化

NestJSやNode.jsの経験をさらに深めつつ、システム設計・アーキテクチャ設計の知識も積み上げていきたいと考えています。マイクロサービスやDDD（ドメイン駆動設計）についても実践的に学んでいく予定です。

### フルスタック開発への対応

Next.jsでのフロントエンド開発経験を積んだことで、フルスタックエンジニアとしての視野が広がりました。バックエンドの深い知識を持ちながら、フロントエンドも対応できるエンジニアとして成長していきたいです。

---

## まとめ

バックエンドエンジニアとしての実績や技術を可視化するために作ったこのポートフォリオサイトですが、制作を通じてNext.jsやTailwind CSS、Server Actionsなど、普段の業務ではあまり触れないフロントエンド技術を実践的に学ぶ機会にもなりました。

今後はブログ記事を定期的に更新しながら、学習の記録と技術の発信を続けていきます。Java・Spring Bootの学習進捗やバックエンド設計の知見なども、ここで積極的に共有していく予定です。

ここまで読んでいただきありがとうございました。`,
    },
];
