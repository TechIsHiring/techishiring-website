import DefaultAppHead from 'components/atoms/default-app-head/default-app-head';
import Footer from 'components/organisms/footer/footer';
import Header from 'components/organisms/header/header';

const DefaultLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <DefaultAppHead />
      <Header />
      {children}
      <Footer />
    </div>
  )
};

export default DefaultLayout;