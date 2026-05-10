// お問い合わせページ
import { ResendForm } from "../ui/Contact/ResendForm";
import { ExternalLink } from "../ui/Contact/ExternalLink";

export const metadata = {
  title: "お問い合わせ",
  description: "峰岡大円へのお問い合わせ・各種リンクのページです。",
  alternates: { canonical: "/contact"}
}

export default function Page() {
    return (
        <>
            <ExternalLink />
            <ResendForm />
        </>
    );
}
