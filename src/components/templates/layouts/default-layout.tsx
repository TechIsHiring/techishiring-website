import Head from 'next/head';
import Footer from 'components/organisms/footer/footer';
import Header from 'components/organisms/header/header';

const DefaultLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <Head>
      <meta 
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
    </Head>
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Header />
      <main className="flex w-full min-h-[calc(100vh-190px)] flex-1 flex-col px-5 py-10">
        {children}
      </main>
      <Footer />
    </div>
    </>
  )
};

export default DefaultLayout;