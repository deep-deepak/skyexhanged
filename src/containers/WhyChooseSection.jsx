import React from 'react';
import { MdOutlineListAlt, MdOutlineSync, MdOutlineSportsScore, MdOutlineCasino, MdOutlineUpdate, MdOutlineTune, MdOutlineHeadsetMic } from 'react-icons/md';

const features = [
    {
        Icon: MdOutlineListAlt,
        title: 'Secure Login System',
        desc: 'Advanced security protocols ensure safe access and data protection.',
    },
    {
        Icon: MdOutlineSync,
        title: 'Fast Deposits & Withdrawals',
        desc: 'Quick transaction processing for a smooth betting experience.',
    },
    {
        Icon: MdOutlineSportsScore,
        title: 'Wide Range of Sports Betting Markets',
        desc: 'Cricket, football, tennis, and more with real-time odds.',
    },
    {
        Icon: MdOutlineCasino,
        title: 'Online Casino & Slot Games',
        desc: 'A complete casino experience with popular games and live dealers.',
    },
    {
        Icon: MdOutlineUpdate,
        title: 'Real-Time Betting Updates',
        desc: 'Stay informed with live scores and instant market changes.',
    },
    {
        Icon: MdOutlineTune,
        title: 'Attractive Bonuses & Promotions',
        desc: 'Regular offers that enhance your betting value.',
    },
    {
        Icon: MdOutlineHeadsetMic,
        title: 'Responsive Customer Support',
        desc: 'Dedicated assistance for a hassle-free experience.',
    },
];

export default function WhyChooseSection() {
    return (
        <section className="whychoose-section">
            <div className="whychoose-container">

                {/* Intro */}
                <div className="wc-intro">
                    <h2 className="wc-heading">
                        Why Millions in India Choose Sky Exchange for Online Betting
                    </h2>
                    <p className="wc-para">
                        As online betting continues to grow rapidly in India, players are looking for a platform that
                        offers <strong>security, speed, variety, and reliability</strong>. With over <strong>50 lakh users</strong>,
                        Sky Exchange has built a strong reputation as a trusted and user-friendly online betting platform.
                        It combines advanced security features, fast transactions, diverse betting markets, and exciting
                        bonuses to deliver a complete and enjoyable gaming experience.
                    </p>
                    <p className="wc-para">
                        Sky Exchange is designed to make betting simple, safe, and rewarding for every type of player.
                        Here's what makes it stand out:
                    </p>
                    <h3 className="wc-sub-heading">Key Features & Benefits</h3>
                </div>

                {/* Features grid */}
                <div className="features-grid">
                    {features.map((f) => (
                        <div key={f.title} className="feat-item">
                            <div className="feat-icon-wrap">
                                <f.Icon size={52} />
                            </div>
                            <h4 className="feat-title">{f.title}</h4>
                            <p className="feat-desc">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .whychoose-section {
                    background: #0d0d0d;
                    padding: 80px 0 90px;
                }
                .whychoose-container {
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 0 40px;
                }

                /* INTRO */
                .wc-intro { margin-bottom: 60px; }
                .wc-heading {
                    color: #ffffff;
                    font-size: clamp(1.8rem, 3vw, 2.6rem);
                    font-weight: 800;
                    line-height: 1.2;
                    margin-bottom: 24px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .wc-para {
                    color: #cccccc;
                    font-size: 16px;
                    line-height: 1.85;
                    margin-bottom: 16px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .wc-para strong { color: #ffffff; font-weight: 700; }
                .wc-sub-heading {
                    color: #ffffff;
                    font-size: clamp(1.4rem, 2.2vw, 2rem);
                    font-weight: 800;
                    margin: 36px 0 0;
                    font-family: 'Poppins', Arial, sans-serif;
                }

                /* GRID — 4 cols, last 3 centered */
                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 40px 30px;
                }
                /* Row 2: items 5-7 span 3 of 4 cols, centered */
                .feat-item:nth-child(5) { grid-column: 1 / 2; }
                .feat-item:nth-child(6) { grid-column: 2 / 3; }
                .feat-item:nth-child(7) { grid-column: 3 / 4; }

                /* ITEM */
                .feat-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }
                .feat-icon-wrap {
                    color: #ffffff;
                    margin-bottom: 20px;
                    opacity: 0.9;
                    transition: opacity 0.2s, color 0.2s;
                }
                .feat-item:hover .feat-icon-wrap {
                    opacity: 1;
                    color: #F5C518;
                }
                .feat-title {
                    color: #ffffff;
                    font-size: 18px;
                    font-weight: 800;
                    margin-bottom: 10px;
                    line-height: 1.3;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .feat-desc {
                    color: #aaaaaa;
                    font-size: 15px;
                    line-height: 1.7;
                    margin: 0;
                    font-family: 'Poppins', Arial, sans-serif;
                }

                /* RESPONSIVE */
                @media (max-width: 1024px) {
                    .features-grid { grid-template-columns: repeat(3, 1fr); }
                    .feat-item:nth-child(5),
                    .feat-item:nth-child(6),
                    .feat-item:nth-child(7) { grid-column: auto; }
                }
                @media (max-width: 640px) {
                    .features-grid { grid-template-columns: repeat(2, 1fr); gap: 32px 20px; }
                    .whychoose-container { padding: 0 20px; }
                }
                @media (max-width: 400px) {
                    .features-grid { grid-template-columns: 1fr; }
                }
            `}</style>
        </section>
    );
}
