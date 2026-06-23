import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

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
      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/9062813000"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "28px",
          right: "20px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "#25D366",
          color: "#ffffff",
          border: "none",
          borderRadius: "50px",
          padding: "12px 20px 12px 14px",
          cursor: "pointer",
          boxShadow: "0 4px 16px rgba(0,0,0,0.28)",
          zIndex: 1100,
          textDecoration: "none",
          fontFamily: "'Poppins', Arial, sans-serif",
          fontSize: "14px",
          fontWeight: "700",
          letterSpacing: "0.01em",
          whiteSpace: "nowrap",
        }}
      >
        {/* WhatsApp SVG icon */}
        <span style={{
          width: "36px",
          height: "36px",
          backgroundColor: "#ffffff",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}>
          <svg viewBox="0 0 32 32" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.666 4.8 1.83 6.8L2 30l7.43-1.8A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#25D366"/>
            <path d="M23.07 20.18c-.31-.87-1.8-1.71-2.53-1.82-.52-.08-.97.02-1.37.32-.54.41-.78.82-1.15.82-.27 0-.63-.22-1.08-.6-.9-.74-1.66-1.74-2.07-2.48-.28-.5-.3-.9.04-1.28.28-.3.62-.47.62-.95 0-.31-.6-2.01-1.06-2.6-.27-.35-.56-.46-.93-.46-.62 0-1.26.21-1.68.66-.73.78-1.07 1.78-.92 2.84.2 1.41 1.02 2.86 2.18 4.04 1.16 1.18 2.7 2.2 4.17 2.64 1.02.3 2.05.2 2.86-.28.62-.37 1.08-.96 1.28-1.65.09-.31.07-.62-.06-.8z" fill="#ffffff"/>
          </svg>
        </span>
        Get Skyexchange Id Now
      </a>

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "90px",
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
