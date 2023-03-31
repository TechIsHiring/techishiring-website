import WithPageLayout from "interfaces/with-page-layouts";
import DefaultLayout from "components/templates/layouts/default-layout";
import TwitterFeed from "components/organisms/twitter-feed/twitter-feed";
import HeadContent from "components/particles/head/HeadContent";
import Hero from "components/molecules/heroSection/Hero";
import WhyChooseSection from "components/molecules/why-choose/why-choose-section";

interface HomeProps {}

const Home: WithPageLayout<HomeProps> = () => {
  return (
    <>
      <HeadContent
        content="A space where great jobs and great devs can find each other!"
      />
      <Hero />
      <WhyChooseSection />
      <TwitterFeed />
    </>
  );
};

Home.PageLayout = DefaultLayout;

export default Home;
