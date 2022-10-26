import WithPageLayout from "interfaces/with-page-layouts";
import NextDefaultBody from "components/organisms/next-default-body/next-default-body";
import DefaultLayout from "components/templates/layouts/default-layout";
import Head from "next/head";
import { fetchIssues } from "lib/api/external-apis/revue/issues-api";

const Home: WithPageLayout = ({ firstTenIssues }: any) => {
  
  return (
    <>
      <Head>
        <title>TechIsHiring - Newsletter</title>
        <meta
          property="og:description"
          content="TechIsHiring - Newsletter"
        />
      </Head>
      <NextDefaultBody />
    </>
  );
};

export const getServerSideProps = async () => {
  const data = await fetchIssues();
  const firstTenIssues = data.filter((issue, index) => index < 10);

  return {
    props: {
      firstTenIssues
    }
  };
};

Home.PageLayout = DefaultLayout;

export default Home;
