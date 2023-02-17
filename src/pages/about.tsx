import WithPageLayout from "interfaces/with-page-layouts";
import AltLayout from "components/templates/layouts/alt-layout";
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

About.PageLayout = AltLayout;

export default About;
