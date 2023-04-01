import WithPageLayout from "interfaces/with-page-layouts";
import DefaultLayout from "components/templates/layouts/default-layout";
import HireChadContent from "components/organisms/hire-chad-content/hire-chad-content";
import Head from "next/head";

interface HireChadProps {

};

const HireChad: WithPageLayout<HireChadProps> = () => {

  return ( 
    <div>

      <Head>
        <title>TechIsHiring - Hire Chad</title>
        <meta
          property="og:description"
          content={"TechIsHiring - Hire Chad"}
        />
      </Head>

      <HireChadContent />

    </div>
  );
};
HireChad.PageLayout = DefaultLayout;
export default HireChad;