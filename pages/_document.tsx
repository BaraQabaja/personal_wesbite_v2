import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

export default class SandBox extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/Picture1.png" type="image/png" />
          <title>Bara - Portfolio</title>
        <link rel="icon" href="%PUBLIC_URL%/Picture1.png" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/Picture1.png" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// ======================================================================

SandBox.getInitialProps = async (ctx: DocumentContext) => {
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

  return { ...initialProps };
};
