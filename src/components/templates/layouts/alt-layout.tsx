import Head from "next/head";
import Footer from "components/organisms/footer/footer";
import Header from "components/organisms/header/header";

const AltLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <Head>
        <meta 
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Header />
        <main className="flex w-full min-h-[calc(100vh-190px)] flex-1 flex-col">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AltLayout;