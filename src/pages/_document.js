import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#1B2760" />

        {/* Open Graph */}
        <meta property="og:site_name" content="SkyExchin" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skyexchin.com/" />
        <meta property="og:title" content="SkyExchin | Premium Services" />
        <meta property="og:description" content="SkyExchin — your trusted partner for premium services." />
        <meta property="og:image" content="https://skyexchin.com/cover.jpg" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
