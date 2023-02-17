import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:url" content="https://www.techishiring.com" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="TechIsHiring - A space where great jobs and great devs can find each other!"
          />
          <meta name="twitter:card" content="summary" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta property="og:image" content="/techishiring-social-card.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
