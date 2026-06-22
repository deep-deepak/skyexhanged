import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

const slides = [
    { src: '/images/b8872e90-08f0-4107-8041-b2d20562d14f.jpg', alt: 'Welcome to Skyexchin – India\'s Trusted Betting Platform' },
    { src: '/images/3e9a5000-3199-4398-a6ce-e0f5734a1bb9.jpg', alt: 'Sky Exchin – Unmatched Odds, Fast Payouts' },
    { src: '/images/dc6bbbc5-4727-41f1-98b0-99e114c0f416.jpg', alt: 'Skyexchin – Your Ultimate Gaming Destination' },
];

const PrevArrow = ({ onClick }) => (
    <button className="slider-arrow slider-prev" onClick={onClick} aria-label="Previous">
        &#8249;
        <style jsx>{`
            .slider-arrow {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                z-index: 10;
                background: rgba(0,0,0,0.45);
                color: #fff;
                border: none;
                width: 36px;
                height: 56px;
                font-size: 32px;
                line-height: 1;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: background 0.2s;
                padding: 0;
            }
            .slider-prev { left: 0; border-radius: 0 4px 4px 0; }
            .slider-arrow:hover { background: rgba(0,0,0,0.7); }
        `}</style>
    </button>
);

const NextArrow = ({ onClick }) => (
    <button className="slider-arrow slider-next" onClick={onClick} aria-label="Next">
        &#8250;
        <style jsx>{`
            .slider-arrow {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                z-index: 10;
                background: rgba(0,0,0,0.45);
                color: #fff;
                border: none;
                width: 36px;
                height: 56px;
                font-size: 32px;
                line-height: 1;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: background 0.2s;
                padding: 0;
            }
            .slider-next { right: 0; border-radius: 4px 0 0 4px; }
            .slider-arrow:hover { background: rgba(0,0,0,0.7); }
        `}</style>
    </button>
);

const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
};

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="slider-wrapper">
                    <Slider {...sliderSettings}>
                        {slides.map((slide) => (
                            <div key={slide.src} className="slide">
                                <Image
                                    src={slide.src}
                                    alt={slide.alt}
                                    width={1200}
                                    height={360}
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                    priority
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <style jsx global>{`
                /* slick reset */
                .slick-slider, .slick-list, .slick-track { position: relative; }
                .slick-list { overflow: hidden; }
                .slick-track { display: flex; }
                .slick-slide { float: none; height: auto; }
                .slick-slide > div { line-height: 0; }
            `}</style>

            <style jsx>{`
                .hero-section {
                    padding-top: 107px;
                    background: #f0f0f0;
                    min-height: calc(100vh - 107px);
                }
                .hero-container {
                    max-width: 1440px;
                    margin: 0 auto;
                    padding: 12px 16px 0;
                }
                .slider-wrapper {
                    overflow: hidden;
                    position: relative;
                    background: #000;
                }
                .slide {
                    line-height: 0;
                }
            `}</style>
        </section>
    );
};

export default HeroSection;
