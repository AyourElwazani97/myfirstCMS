import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
export default class Mydocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head>
          <script
            src={`https://identity.netlify.com/v1/netlify-identity-widget.js`}
          />
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', ${GA_TRACKING_ID}, {
                  page_path: window.location.pathname,
                });
              `,
            }}
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
