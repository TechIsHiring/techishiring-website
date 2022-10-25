import WithPageLayout from "interfaces/with-page-layouts";
import DefaultLayout from "components/templates/layouts/default-layout";
import Head from "next/head";
import AboutContent from "components/organisms/about-content/about-content";

const Home: WithPageLayout = () => {
  return (
    <>
      <Head>
        <title>TechIsHiring - About</title>
        <meta
          property="og:description"
          content="TechIsHiring - About"
        />
      </Head>
      <AboutContent />
    </>
  );
};

Home.PageLayout = DefaultLayout;

export default Home;
