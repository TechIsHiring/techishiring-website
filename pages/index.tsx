import AppHead from 'atoms/head';
import WithPageLayout from 'interfaces/with-page-layouts';
import DefaultLayout from 'organisms/layouts/default-layout';
import NextDefaultBody from 'organisms/NextDefaultBody/next-default-body';

const Home: WithPageLayout = () => {
  return (
    <DefaultLayout>
      <AppHead />
      <NextDefaultBody />
    </DefaultLayout>
  )
}

export default Home
