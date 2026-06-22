import React from 'react';
import Image from 'next/image';

/* Wide landscape banner (shown full-width) */
const wideBanner = {
    src: '/images/3e9a5000-3199-4398-a6ce-e0f5734a1bb9.jpg',
    alt: 'Sky Exchin – Unmatched Odds, Fast Payouts, All-in-One Betting Platform',
    width: 1920,
    height: 480,
};

/* Portrait / square cards — shown in a 4-column grid */
const portraitCards = [
    { src: '/images/1ee54013-9ffa-4c9e-a75d-4d1781ae5305.jpg', alt: 'Welcome to Skyexchin.com – India\'s Trusted Betting Platform', width: 600, height: 600 },
    { src: '/images/5dafafb1-92a5-4f59-bc2b-f4952e7c6dee.jpg', alt: 'Sky Exchin Special Promotions',                               width: 600, height: 800 },
    { src: '/images/f548224f-af0c-48c6-9a3e-ce13e651db3b.jpg', alt: 'Sky Exchin Promotions & Bonuses – Maximize Your Rewards',    width: 600, height: 800 },
    { src: '/images/6a8adaa2-c64c-4311-b9c2-3a95d891f51c.jpg', alt: 'History of Skyexchin',                                       width: 600, height: 800 },
    { src: '/images/d1626d70-94e8-49c8-add4-2e671d4147f3.jpg', alt: 'History of Skyexchin – Platform Growth',                    width: 600, height: 800 },
    { src: '/images/45875717-c1c0-4c1d-ba43-8713bddc5a4a.jpg', alt: 'Sky Exchin Mobile Login Guide',                              width: 600, height: 800 },
    { src: '/images/bfb1d63b-b713-45b8-9e02-5747b47cc840.jpg', alt: 'Skyexchin – Best Gaming Club Logo',                         width: 600, height: 600 },
];

const QuickLinksSection = () => {
    return (
        <section className="ql-section">

            {/* Full-width wide banner */}
            <div className="ql-banner">
                <Image
                    src={wideBanner.src}
                    alt={wideBanner.alt}
                    width={wideBanner.width}
                    height={wideBanner.height}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    priority
                />
            </div>

            {/* Portrait / square cards grid */}
            <div className="ql-grid">
                {portraitCards.map(({ src, alt, width, height }) => (
                    <div key={src} className="ql-card">
                        <Image
                            src={src}
                            alt={alt}
                            width={width}
                            height={height}
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                    </div>
                ))}
            </div>

            <style jsx>{`
                .ql-section {
                    background: #000;
                    padding: 0;
                }

                /* WIDE BANNER */
                .ql-banner {
                    line-height: 0;
                    width: 100%;
                    overflow: hidden;
                }
                .ql-banner:hover img {
                    filter: brightness(1.06);
                }
                .ql-banner img {
                    transition: filter 0.3s ease;
                }

                /* PORTRAIT GRID — 4 columns */
                .ql-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2px;
                    margin-top: 2px;
                }
                .ql-card {
                    overflow: hidden;
                    cursor: pointer;
                    line-height: 0;
                }
                .ql-card img {
                    transition: transform 0.3s ease, filter 0.3s ease;
                }
                .ql-card:hover img {
                    transform: scale(1.03);
                    filter: brightness(1.08);
                }

                /* RESPONSIVE */
                @media (max-width: 900px) {
                    .ql-grid { grid-template-columns: repeat(3, 1fr); }
                }
                @media (max-width: 600px) {
                    .ql-grid { grid-template-columns: repeat(2, 1fr); }
                }
            `}</style>
        </section>
    );
};

export default QuickLinksSection;
