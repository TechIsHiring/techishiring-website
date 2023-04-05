import WithPageLayout from "interfaces/with-page-layouts";
import DefaultLayout from "components/templates/layouts/default-layout";
import AboutContent from "components/organisms/about-content/about-content";
import Head from "next/head";

interface AboutProps {}

const About: WithPageLayout<AboutProps> = () => {
  return (
    <>  
      <Head>
        <title>TechIsHiring - About</title>
        <meta
          property="og:description"
          content={"TechIsHiring - About"}
        />
      </Head>

      <AboutContent />
    </>
  );
};

About.PageLayout = DefaultLayout;

export default About;
