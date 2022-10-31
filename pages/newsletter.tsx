import WithPageLayout from "interfaces/with-page-layouts";
import DefaultLayout from "components/templates/layouts/default-layout";
import Head from "next/head";
import { fetchIssues } from "lib/api/external-apis/revue/issues-api";
import NewsletterContent from "components/organisms/newsletter-content/newsletter-content";
import Card from "components/atoms/card/card";

interface NewsletterProps {
  lastTenIssues: Issues[];
}

const Newsletter: WithPageLayout<NewsletterProps> = ({ lastTenIssues }) => {
  
  return (
    <Card section className="flex flex-col gap-8">
      <>
        <Head>
          <title>TechIsHiring - Newsletter</title>
          <meta
            property="og:description"
            content="TechIsHiring - Newsletter"
          />
        </Head>
        <NewsletterContent lastTenIssues={lastTenIssues} />
      </>
    </Card>
  );
};

export const getServerSideProps = async () => {

  let lastTenIssues;

  try {
    const data = await fetchIssues();
    lastTenIssues = data.filter((issue, index) => index < 10);
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      lastTenIssues
    }
  };
};

Newsletter.PageLayout = DefaultLayout;

export default Newsletter;
