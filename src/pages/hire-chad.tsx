import WithPageLayout from "interfaces/with-page-layouts";
import DefaultLayout from "components/templates/layouts/default-layout";
import HireChadContent from "components/organisms/hire-chad-content/hire-chad-content";
import HeadContent from "components/particles/head/HeadContent";

interface HireChadProps {

};

const HireChad: WithPageLayout<HireChadProps> = () => {

  return ( 
    <div>

      <HeadContent content={"hire-chad"}/>

      <HireChadContent />

    </div>
  );
};
HireChad.PageLayout = DefaultLayout;
export default HireChad;