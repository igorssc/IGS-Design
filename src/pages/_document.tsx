import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class Document extends NextDocument {
  static async getInitialProps(context: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(context);
    return { ...initialProps };
  }

  render() {
    const pageTitle = "IGS Design";
    const pageImage =
      "https://user-images.githubusercontent.com/26682297/191368584-c36a95f6-f4d1-428c-8014-c22f89fae56a.jpg";
    const description =
      "A IGS Design oferece vários serviços como criação de logotipos, cartões de visita, panfletos, banners, flyers, e convites. Oferecemos também serviços para plataformas online, como criação de sites, blogs e muito mais.";

    return (
      <Html lang="pt-br">
        <Head>
          <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
          <meta name="MobileOptimized" content="320" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="theme-color" content="#199ada" />
          <meta name="msapplication-TileColor" content="#199ada" />
          <meta name="referrer" content="no-referrer-when-downgrade" />
          <meta name="google" content="notranslate" />

          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={description} />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={pageTitle} />
          <meta property="og:image" content={pageImage} />
          <meta property="og:image:secure_url" content={pageImage} />
          <meta property="og:image:alt" content="Thumbnail" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@rocketseat" />
          <meta name="twitter:creator" content="@rocketseat" />
          <meta name="twitter:image" content={pageImage} />
          <meta name="twitter:image:src" content={pageImage} />
          <meta name="twitter:image:alt" content="Thumbnail" />
          <meta name="twitter:image:width" content="1200" />
          <meta name="twitter:image:height" content="620" />

          <link rel="icon" href="./favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <div id="fb-root"></div>
          <script
            async
            defer
            crossOrigin="anonymous"
            src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v14.0"
            nonce="iEJHFMgb"
          ></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
