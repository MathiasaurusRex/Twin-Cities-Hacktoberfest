import Document, { Head, Main, NextScript } from "next/document";

import "../style.css";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/assets/mr2.ico"
          />

          <link rel="stylesheet" href="/_next/static/style.css" />
          <link
            href="https://fonts.googleapis.com/css?family=Domine|Josefin+Sans"
            rel="stylesheet"
          />
        </Head>
        <body className="mr-body">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
