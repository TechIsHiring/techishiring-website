import WithPageLayout from "interfaces/with-page-layouts";
import DefaultLayout from "components/templates/layouts/default-layout";
import TwitterFeed from "components/organisms/twitter-feed/twitter-feed";
import Head from "next/head";
import Hero from "components/molecules/hero-section/Hero";
import WhyChooseSection from "components/molecules/why-choose/why-choose-section";

interface HomeProps {}

const Home: WithPageLayout<HomeProps> = () => {
  return (
    <>
      <Head>
        <title>TechIsHiring - A space where great jobs and great devs can find each other!</title>
        <meta
          property="og:description"
          content={"TechIsHiring - A space where great jobs and great devs can find each other!"}
        />
      </Head>
      <Hero />
      <WhyChooseSection />
      <TwitterFeed />
    </>
  );
};

Home.PageLayout = DefaultLayout;

export default Home;
