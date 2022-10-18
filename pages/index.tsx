import WithPageLayout from 'interfaces/with-page-layouts';
import NextDefaultBody from 'components/organisms/NextDefaultBody/next-default-body';
import AppHead from 'components/atoms/head';
import DefaultLayout from 'components/organisms/layouts/default-layout';

const Home: WithPageLayout = () => {
  return (
    <>
      <AppHead />
      <NextDefaultBody />
    </>
  )
}

Home.PageLayout = DefaultLayout;

export default Home
