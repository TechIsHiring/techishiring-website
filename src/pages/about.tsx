import WithPageLayout from "interfaces/with-page-layouts";
import DefaultLayout from "components/templates/layouts/default-layout";
import AboutContent from "components/organisms/about-content/about-content";
import HeadContent from "components/particles/head/HeadContent";

interface AboutProps {}

const About: WithPageLayout<AboutProps> = () => {
  return (
    <>
      <HeadContent content={"About"}/>

      <AboutContent />
    </>
  );
};

About.PageLayout = DefaultLayout;

export default About;
