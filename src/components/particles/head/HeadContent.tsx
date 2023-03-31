import Head from "next/head";

interface HeadContentProps {
  content: string;
}

export default function HeadContent({ content }: HeadContentProps) {
  return (
    <Head>
      <title>TechIsHiring - {content}</title>
      <meta
        property="og:description"
        content={"TechIsHiring - " + {content}}
      />
    </Head>
  );
}