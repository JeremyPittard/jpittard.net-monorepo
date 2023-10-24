/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Specialising in helping small businesses and sports clubs kick off and improve their digital presence."
        />
        <link
          rel="icon"
          href="/favicon.ico"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/favicon-alto.ico"
          media="(prefers-color-scheme: dark)"
        />
        <meta
          property="og:title"
          content="Digital consulting and web development."
        />
        <meta property="og:site_name" content="jpittard.net" />
        <meta property="og:url" content="https://jpittard.net" />
        <meta
          property="og:description"
          content="Specialising in helping small businesses and sports clubs kick off and improve their digital presence."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://jpittard.net/img/ogimage.png"
        />
      </Head>
      <body className="text-4xl bg-gondola text-alto">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
