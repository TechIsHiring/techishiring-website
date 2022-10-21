import WithPageLayout from 'interfaces/with-page-layouts';
import NextDefaultBody from 'components/organisms/next-default-body/next-default-body';
import DefaultLayout from 'components/templates/layouts/default-layout';

const Home: WithPageLayout = () => {
  return (
    <NextDefaultBody />
  )
}

Home.PageLayout = DefaultLayout;

export default Home
