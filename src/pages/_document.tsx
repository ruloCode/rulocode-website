/* eslint-disable @next/next/no-css-tags */
import React from 'react';

import Document, { Html, NextScript, Main, Head } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png" />

          <link
            href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css"
            rel="stylesheet"
           />
           <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" />
          <meta name="theme-color" content="#fff" />
        </Head>
        <body>
          <Main />
          <div id="modal-root" />

          <NextScript />
        </body>
      </Html>
    );
  }
}
