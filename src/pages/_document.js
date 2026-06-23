import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ── Google Site Verification ── */}
        <meta name="google-site-verification" content="j34f7ifHaPMhLEllpKYMyX7TzafTYTguhNAJt9qLm0s" />

        {/* ── Core SEO ── */}
        <meta name="keywords" content="SkyExchin, online cricket exchange, cricket exchange platform, sports exchange, online betting exchange, live cricket exchange, cricket ID provider, sports betting exchange" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="SkyExchin" />
        <link rel="canonical" href="https://skyexchin.com/" />

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
        <link rel="icon" href="/favicon.ico" />

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
                telephone: "+91-9062813000",
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
                  name: "What is SkyExchin?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "SkyExchin is a trusted Online Cricket Exchange platform offering a secure and seamless sports exchange experience with live updates and dedicated support.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why is SkyExchin considered a trusted Cricket Exchange Platform?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "SkyExchin is recognized as a reliable Cricket Exchange Platform because it offers secure transactions, live updates, fast performance, and dedicated customer support.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I get an Online Cricket ID on SkyExchin?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Getting an Online Cricket ID on SkyExchin is simple. Contact our support team, complete the registration process, and start accessing the platform securely.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does SkyExchin provide Live Cricket Exchange services?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, SkyExchin offers Live Cricket Exchange services with real-time updates and a seamless user experience.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What makes SkyExchin the best Cricket Exchange Platform?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "SkyExchin is considered one of the Best Cricket Exchange Platforms because of its secure environment, advanced technology, and responsive customer support.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
