import WithPageLayout from "interfaces/with-page-layouts";
import DefaultLayout from "components/templates/layouts/default-layout";
import TwitterFeed from "components/organisms/twitter-feed/twitter-feed";
import Head from "next/head";

interface HomeProps {}

const Home: WithPageLayout<HomeProps> = () => {
  return (
    <>
      <Head>
        <title>
          TechIsHiring - A space where great jobs and great devs can find each
          other!
        </title>
        <meta
          property="og:description"
          content="TechIsHiring - A space where great jobs and great devs can find each other!"
        />
      </Head>
      <TwitterFeed />
    </>
  );
};

Home.PageLayout = DefaultLayout;

export default Home;
