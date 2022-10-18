import Head from "next/head";

const AppHead = () => {
  return (
    <Head>
      <title>TechIsHiring - A space where great jobs and great devs can find each other!</title>
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:url" content="https://www.techishiring.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="TechIsHiring - A space where great jobs and great devs can find each other!" />
      <meta name="twitter:card" content="summary" />
      <meta
        property="og:description"
        content="TechIsHiring - A space where great jobs and great devs can find each other!"
      />
      <meta property="og:image" content="/techishiring-social-card.png" />
    </Head>
  )
};

export default AppHead;