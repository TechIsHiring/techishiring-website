import Head from "next/head";

export default function HeadContent({content}: any) {
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