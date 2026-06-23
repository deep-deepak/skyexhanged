import React from 'react';
import { MdListAlt, MdSync, MdSportsScore, MdPhoneIphone } from 'react-icons/md';

const features = [
    {
        Icon: MdListAlt,
        title: 'Secure & Lightweight',
        desc: 'The app uses strong encryption technology to protect user data. It is lightweight, meaning it runs smoothly even on older smartphones without slowing down performance.',
    },
    {
        Icon: MdSync,
        title: 'Live Betting Access',
        desc: 'Get real-time access to live odds, in-play markets, and instant refresh features during matches. This helps users make faster and smarter betting decisions.',
    },
    {
        Icon: MdSportsScore,
        title: 'Wide Range of Sports Betting Markets',
        desc: 'The app supports popular payment methods and offers quick cash-out options. Users can deposit funds and withdraw winnings easily without long waiting times.',
    },
    {
        Icon: MdPhoneIphone,
        title: 'Simple & Clean Navigation',
        desc: 'The mobile-first design ensures easy navigation. Users can quickly find sports betting, casino games, slots, and matka sections without confusion.',
    },
];

const ApkGuideSection = () => {
    return (
        <section className="apk-section">
            <div className="apk-container">

                {/* MAIN HEADING BLOCK */}
                <h2 className="apk-main-heading" data-aos="fade-up">
                    Downloading the Sky Exchange App (APK) – Safe &amp; Easy Guide
                </h2>
                <p className="apk-para">
                    Downloading the Sky Exchange App (APK) is quick and secure when you follow the official process.
                    Whether you're using Android or iOS, this guide will help you install the app safely and avoid
                    fake files. Always download the app only from the official Sky Exchange website and never trust
                    third-party APK links.
                </p>
                <p className="apk-para">
                    For Android users, the APK file allows direct installation. For iOS users, the mobile site or
                    official installer instructions on the Sky Exchange pages provide a smooth setup experience.
                </p>

                {/* WHY DOWNLOAD */}
                <h2 className="apk-section-heading">Why Download the Sky Exchange Mobile App?</h2>
                <p className="apk-para">
                    The Sky Exchange mobile app is designed for speed, safety, and convenience. Whether you use
                    Android or iOS, the app ensures a seamless betting experience on the go.
                </p>

                {/* KEY FEATURES LABEL */}
                <p className="apk-gold-label">Key Features of the Sky Exchange App (Android &amp; iOS)</p>

                {/* FEATURE CARDS */}
                <div className="apk-features-grid">
                    {features.map(({ Icon, title, desc }, index) => (
                        <div key={title} className="apk-card" data-aos="fade-up" data-aos-delay={String((index % 4) * 100)}>
                            <div className="apk-icon-wrap">
                                <Icon size={38} />
                            </div>
                            <h3 className="apk-card-title">{title}</h3>
                            <p className="apk-card-desc">{desc}</p>
                        </div>
                    ))}
                </div>

                {/* GET YOUR ID */}
                <h2 className="apk-section-heading">Get Your Sky Exchange ID Now</h2>
                <p className="apk-para">
                    Before downloading the app, make sure you have a valid Sky Exchange ID. You'll need it to log
                    in and access all features after installation.
                </p>
            </div>

            <style jsx>{`
                .apk-section {
                    background: #0d0d0d;
                    padding: 80px 0 90px;
                    border-top: 1px solid #1a1a1a;
                }
                .apk-container {
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 0 60px;
                }

                .apk-main-heading {
                    color: #ffffff;
                    font-size: clamp(1.8rem, 3vw, 2.6rem);
                    font-weight: 800;
                    line-height: 1.2;
                    margin-bottom: 22px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .apk-section-heading {
                    color: #ffffff;
                    font-size: clamp(1.4rem, 2.5vw, 1.9rem);
                    font-weight: 800;
                    line-height: 1.3;
                    margin: 48px 0 18px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .apk-para {
                    color: #cccccc;
                    font-size: 16px;
                    line-height: 1.85;
                    margin-bottom: 14px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .apk-gold-label {
                    color: #F5C518;
                    font-size: 1.05rem;
                    font-weight: 700;
                    margin: 6px 0 36px;
                    font-family: 'Poppins', Arial, sans-serif;
                }

                /* FEATURE CARDS */
                .apk-features-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 28px;
                    margin-bottom: 12px;
                }
                .apk-card {
                    background: #111111;
                    border: 1px solid #222222;
                    border-radius: 10px;
                    padding: 32px 22px 28px;
                    text-align: center;
                    transition: border-color 0.25s;
                }
                .apk-card:hover { border-color: #F5C518; }
                .apk-icon-wrap {
                    color: #ffffff;
                    margin-bottom: 18px;
                    display: flex;
                    justify-content: center;
                }
                .apk-card:hover .apk-icon-wrap { color: #F5C518; }
                .apk-card-title {
                    color: #ffffff;
                    font-size: 1rem;
                    font-weight: 700;
                    margin-bottom: 12px;
                    line-height: 1.3;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .apk-card-desc {
                    color: #aaaaaa;
                    font-size: 14px;
                    line-height: 1.75;
                    font-family: 'Poppins', Arial, sans-serif;
                    margin: 0;
                }

                /* RESPONSIVE */
                @media (max-width: 1024px) {
                    .apk-features-grid { grid-template-columns: repeat(2, 1fr); }
                    .apk-container { padding: 0 40px; }
                }
                @media (max-width: 600px) {
                    .apk-features-grid { grid-template-columns: 1fr; }
                    .apk-container { padding: 0 20px; }
                }
            `}</style>
        </section>
    );
};

export default ApkGuideSection;
