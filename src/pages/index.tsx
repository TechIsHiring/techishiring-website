import WithPageLayout from "interfaces/with-page-layouts";
import DefaultLayout from "components/templates/layouts/default-layout";
import TwitterFeed from "components/organisms/twitter-feed/twitter-feed";
import HeadContent from "components/particles/head/HeadContent";
import Hero from "components/molecules/heroSection/Hero";

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
