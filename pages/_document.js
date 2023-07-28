import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
      <Html>
        <Head>
          <meta name="title" content="Michael Volakis" />
          <meta name="description" content="My Personal Portfolio" />
          <meta
            name="keywords"
            content="Michael,Volakis,DIT,Computer Science,Informatics,Athens,Portfolio,Developer,Web Developer,Web Apps"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />

          <link rel="icon" href="/vectors/favicon.png" />
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
