import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="about-container">

                {/* Left — image */}
                <div className="about-image-col">
                    <div className="about-image-wrap">
                        <Image
                            src="/images/skyexchangeapp-img-02.webp"
                            alt="Welcome to Sky Exchin"
                            width={520}
                            height={520}
                            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
                            priority
                        />
                    </div>
                </div>

                {/* Right — text */}
                <div className="about-text-col">
                    <h2 className="about-heading">
                        Welcome to Sky Exchin – India's Trusted Betting Platform
                    </h2>
                    <p className="about-para">
                        Sky Exchin may be a newer name for some players, but since entering the online gaming
                        industry in 2017, it has grown rapidly into one of India's most trusted and popular betting
                        platforms. What started as a small digital space for Indian players has evolved into a powerful
                        and feature-rich destination for sports betting and online casino gaming.
                    </p>
                    <p className="about-para">
                        Sky Exchin was built with a clear goal: to deliver an exciting, secure, and hassle-free gaming
                        experience right at players' fingertips. From simple navigation to fast access to betting markets,
                        the platform is designed to eliminate confusion and make online gaming smooth for both
                        beginners and experienced players. Today, Sky Exchin stands as a reliable, energetic, and
                        engaging one-stop destination for online betting in India.
                    </p>
                </div>
            </div>

            <style jsx>{`
                .about-section {
                    background: #111111;
                    padding: 90px 0;
                }
                .about-container {
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 0 40px;
                    display: flex;
                    align-items: center;
                    gap: 80px;
                }

                /* IMAGE */
                .about-image-col {
                    flex: 0 0 46%;
                    max-width: 46%;
                }
                .about-image-wrap {
                    border-radius: 8px;
                    overflow: hidden;
                }

                /* TEXT */
                .about-text-col {
                    flex: 1;
                }
                .about-heading {
                    color: #ffffff;
                    font-size: clamp(2.2rem, 3.6vw, 3.4rem);
                    font-weight: 800;
                    line-height: 1.2;
                    margin-bottom: 32px;
                    font-family: Arial, sans-serif;
                }
                .about-para {
                    color: #cccccc;
                    font-size: 18px;
                    line-height: 1.85;
                    margin-bottom: 24px;
                    font-family: Arial, sans-serif;
                }
                .about-para:last-child { margin-bottom: 0; }

                /* RESPONSIVE */
                @media (max-width: 900px) {
                    .about-container {
                        flex-direction: column;
                        gap: 36px;
                    }
                    .about-image-col {
                        flex: none;
                        max-width: 100%;
                        width: 100%;
                    }
                }
            `}</style>
        </section>
    );
};

export default AboutSection;
