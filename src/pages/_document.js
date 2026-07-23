import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ── Google Tag Manager ── */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5QBR46K4');`,
          }}
        />

        {/* ── Google Site Verification ── */}
        <meta name="google-site-verification" content="j34f7ifHaPMhLEllpKYMyX7TzafTYTguhNAJt9qLm0s" />

        {/* ── Core SEO ── */}
        <meta name="keywords" content="SkyExchin, online cricket exchange, cricket exchange platform, sports exchange, online betting exchange, live cricket exchange, cricket ID provider, sports betting exchange" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="SkyExchin" />

        {/* ── Open Graph ── */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SkyExchin" />
        <meta property="og:url" content="https://skyexchin.com/" />
        <meta property="og:title" content="SkyExchin - Trusted Online Cricket Exchange Platform" />
        <meta property="og:description" content="Join SkyExchin for a secure and reliable online cricket exchange experience with live updates and instant support." />
        <meta property="og:image" content="https://skyexchin.com/images/logo.jpg" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SkyExchin - Trusted Online Cricket Exchange Platform" />
        <meta name="twitter:description" content="Experience secure online cricket exchange with SkyExchin. Fast support and seamless user experience." />
        <meta name="twitter:image" content="https://skyexchin.com/images/logo.jpg" />

        {/* ── Theme / Favicon ── */}
        <meta name="theme-color" content="#F5C518" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/favicon.ico" />

        {/* ── Fonts ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

        {/* ── GA4 ── */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-X708EZ8RCF" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-X708EZ8RCF');
            `,
          }}
        />

        {/* ── Organization Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SkyExchin",
              url: "https://skyexchin.com/",
              logo: "https://skyexchin.com/images/logo.jpg",
              description: "SkyExchin is a trusted online cricket exchange platform providing secure sports exchange services.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-6284220750",
                contactType: "customer service",
                availableLanguage: "en",
              },
              email: "info@skyexchange.com",
              sameAs: [
                "https://facebook.com/skyexchin",
                "https://instagram.com/skyexchin",
                "https://twitter.com/skyexchin",
              ],
            }),
          }}
        />

        {/* ── WebSite Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "SkyExchin",
              url: "https://skyexchin.com/",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://skyexchin.com/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* ── WebPage Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "SkyExchin - Trusted Online Cricket Exchange Platform",
              url: "https://skyexchin.com/",
              description: "SkyExchin offers secure online cricket exchange and sports exchange services.",
            }),
          }}
        />

        {/* ── BreadcrumbList Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://skyexchin.com/",
                },
              ],
            }),
          }}
        />

        {/* ── FAQPage Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is Sky Exchange?",
                  acceptedAnswer: { "@type": "Answer", text: "Sky Exchange is a trusted Online Cricket Exchange platform that offers users a seamless and secure experience for live sports exchange. Our platform provides real-time updates, fast access, and reliable support for sports enthusiasts." },
                },
                {
                  "@type": "Question",
                  name: "Why is Sky Exchange considered a trusted Cricket Exchange Platform?",
                  acceptedAnswer: { "@type": "Answer", text: "Sky Exchange is recognized as a reliable Cricket Exchange Platform because it offers secure transactions, fast performance, live match updates, and dedicated customer support to ensure a smooth user experience." },
                },
                {
                  "@type": "Question",
                  name: "What services does Sky Exchange offer as a Sports Exchange Platform?",
                  acceptedAnswer: { "@type": "Answer", text: "As a leading Sports Exchange Platform, Sky Exchange provides access to live cricket exchange services, real-time match information, and a user-friendly platform designed for sports fans." },
                },
                {
                  "@type": "Question",
                  name: "How can I get an Online Cricket ID on Sky Exchange?",
                  acceptedAnswer: { "@type": "Answer", text: "Getting an Online Cricket ID on Sky Exchange is quick and easy. Simply contact our support team, complete the registration process, and start accessing the platform securely." },
                },
                {
                  "@type": "Question",
                  name: "What makes Sky Exchange the best Cricket Exchange Platform?",
                  acceptedAnswer: { "@type": "Answer", text: "Sky Exchange is considered one of the Best Cricket Exchange Platforms due to its advanced technology, secure environment, instant support, and seamless user experience for cricket enthusiasts." },
                },
                {
                  "@type": "Question",
                  name: "Does Sky Exchange provide Live Cricket Exchange services?",
                  acceptedAnswer: { "@type": "Answer", text: "Yes, Sky Exchange offers Live Cricket Exchange services with real-time updates, fast access, and a smooth interface to enhance your overall experience." },
                },
                {
                  "@type": "Question",
                  name: "Why choose Sky Exchange over other Online Sports Exchange platforms?",
                  acceptedAnswer: { "@type": "Answer", text: "Sky Exchange stands out among Online Sports Exchange platforms because of its reliability, responsive customer support, user-friendly design, and commitment to delivering a premium experience." },
                },
                {
                  "@type": "Question",
                  name: "Is Sky Exchange a trusted platform for Cricket Exchange services?",
                  acceptedAnswer: { "@type": "Answer", text: "Yes, Sky Exchange is a Trusted Cricket Exchange platform that prioritizes user security, fast performance, and excellent customer support." },
                },
                {
                  "@type": "Question",
                  name: "Can I access multiple sports on Sky Exchange?",
                  acceptedAnswer: { "@type": "Answer", text: "Yes, Sky Exchange is a comprehensive Sports Exchange Platform that aims to provide users with a seamless experience across various sports along with live cricket updates." },
                },
                {
                  "@type": "Question",
                  name: "How does Sky Exchange ensure a secure Cricket Betting Exchange experience?",
                  acceptedAnswer: { "@type": "Answer", text: "Sky Exchange focuses on platform security, data protection, and a smooth user interface to provide a secure and reliable Cricket Betting Exchange experience." },
                },
              ],
            }),
          }}
        />
      </Head>
      <body>
        {/* ── Google Tag Manager (noscript) ── */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5QBR46K4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
