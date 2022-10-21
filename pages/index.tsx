import WithPageLayout from 'interfaces/with-page-layouts';
import DefaultLayout from 'components/templates/layouts/default-layout';
import TwitterFeed from 'components/organisms/twitter-feed/twitter-feed';

const Home: WithPageLayout = () => {
  return (
    <TwitterFeed />
  )
}

Home.PageLayout = DefaultLayout;

export default Home
