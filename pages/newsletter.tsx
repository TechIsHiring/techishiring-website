import WithPageLayout from "interfaces/with-page-layouts";
import DefaultLayout from "components/templates/layouts/default-layout";
import Head from "next/head";
import { fetchIssues } from "lib/api/external-apis/revue/issues-api";
import NewsletterContent from "components/organisms/newsletter-content/newsletter-content";
import Card from "components/atoms/card/card";

const Home: WithPageLayout = ({ lastTenIssues }: any) => {
  
  return (
    <Card section>
      <>
        <Head>
          <title>TechIsHiring - Newsletter</title>
          <meta
            property="og:description"
            content="TechIsHiring - Newsletter"
          />
        </Head>
        <NewsletterContent />
      </>
    </Card>
  );
};

export const getServerSideProps = async () => {
  const data = await fetchIssues();
  const lastTenIssues = data.filter((issue, index) => index < 10);

  return {
    props: {
      lastTenIssues
    }
  };
};

Home.PageLayout = DefaultLayout;

export default Home;
