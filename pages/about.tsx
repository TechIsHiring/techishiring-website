import WithPageLayout from 'interfaces/with-page-layouts';
import NextDefaultBody from 'components/organisms/next-default-body/next-default-body';
import DefaultLayout from 'components/templates/layouts/default-layout';
import Head from 'next/head';

const Home: WithPageLayout = () => {
  return (
    <>
      <Head>
        <title>TechIsHiring - About</title>
        <meta
          property="og:description"
          content="TechIsHiring - About"
        />
      </Head>
      <NextDefaultBody />
    </>
  )
}

Home.PageLayout = DefaultLayout;

export default Home
