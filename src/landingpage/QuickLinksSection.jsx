import React from 'react';
import Image from 'next/image';

/* Wide landscape banners — 2 per row */
const wideCards = [
    { src: '/images/1.png', alt: 'Sports Betting',               width: 900, height: 225 },
    { src: '/images/2.png', alt: 'Blog – News & Sporting Info',  width: 900, height: 225 },
    { src: '/images/3.png', alt: 'Virtual Cricket – Betradar',   width: 900, height: 225 },
    { src: '/images/4.png', alt: 'Royal Gaming',                 width: 900, height: 225 },
];

/* Square game-provider cards — 4 per row */
const squareCards = [
    { src: '/images/5.png', alt: 'Live Casino', width: 400, height: 400 },
    { src: '/images/6.png', alt: 'Evolution',   width: 400, height: 400 },
    { src: '/images/7.png', alt: 'Ezugi',       width: 400, height: 400 },
    { src: '/images/8.png', alt: 'SmartSoft',   width: 400, height: 400 },
];

const QuickLinksSection = () => {
    return (
        <section id="quick-links" className="ql-section">

            {/* Rows 1 & 2 — wide landscape banners, 2 per row */}
            <div className="ql-wide-grid">
                {wideCards.map(({ src, alt, width, height }) => (
                    <div key={src} className="ql-wide-card">
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

            {/* Row 3 — square game-provider cards, 4 per row */}
            <div className="ql-square-grid">
                {squareCards.map(({ src, alt, width, height }) => (
                    <div key={src} className="ql-square-card">
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

                /* WIDE BANNERS — 2 columns */
                .ql-wide-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 2px;
                }
                .ql-wide-card {
                    overflow: hidden;
                    cursor: pointer;
                    line-height: 0;
                }
                .ql-wide-card img { transition: transform 0.3s ease, filter 0.3s ease; }
                .ql-wide-card:hover img { transform: scale(1.02); filter: brightness(1.08); }

                /* SQUARE CARDS — 4 columns */
                .ql-square-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2px;
                    margin-top: 2px;
                }
                .ql-square-card {
                    overflow: hidden;
                    cursor: pointer;
                    line-height: 0;
                }
                .ql-square-card img { transition: transform 0.3s ease, filter 0.3s ease; }
                .ql-square-card:hover img { transform: scale(1.03); filter: brightness(1.08); }

                /* RESPONSIVE */
                @media (max-width: 768px) {
                    .ql-wide-grid  { grid-template-columns: 1fr; }
                    .ql-square-grid { grid-template-columns: repeat(2, 1fr); }
                }
            `}</style>
        </section>
    );
};

export default QuickLinksSection;
