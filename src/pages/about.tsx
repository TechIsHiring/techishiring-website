import WithPageLayout from "interfaces/with-page-layouts";
import DefaultLayout from "components/templates/layouts/default-layout";
import Head from "next/head";
import AboutContent from "components/organisms/about-content/about-content";
import HeadContent from "components/particles/head/HeadContent";

interface AboutProps {}

const About: WithPageLayout<AboutProps> = () => {
  return (
    <>
      <HeadContent content={"About"}/>
      <Head>
        <title>TechIsHiring - About</title>
        <meta property="og:description" content="TechIsHiring - About" />
      </Head>
      <AboutContent />
    </>
  );
};

About.PageLayout = DefaultLayout;

export default About;
