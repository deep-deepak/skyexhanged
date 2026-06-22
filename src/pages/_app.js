import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease" });

    const handleScroll = () => setShowScrollButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <Head>
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://skyexchin.com/" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SkyExchin",
              url: "https://skyexchin.com/",
              logo: "https://skyexchin.com/logo.png",
              description: "SkyExchin — your trusted partner for premium services.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-000-000-0000",
                contactType: "customer service",
                availableLanguage: "en",
              },
              email: "info@skyexchin.com",
            }),
          }}
        />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "SkyExchin",
              url: "https://skyexchin.com/",
              telephone: "+1-000-000-0000",
              email: "info@skyexchin.com",
              priceRange: "££",
            }),
          }}
        />

        {/* FAQPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What services does SkyExchin provide?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "SkyExchin provides a wide range of premium services tailored to your needs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer free quotes?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes — we offer free, no-obligation consultations and quotes for all projects.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "72px",
            right: "20px",
            backgroundColor: "#F47920",
            color: "white",
            border: "none",
            borderRadius: "50%",
            padding: "5px",
            cursor: "pointer",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
            fontSize: "30px",
            height: "50px",
            width: "50px",
          }}
        >
          ↑
        </button>
      )}

      <Component {...pageProps} />
    </>
  );
}
