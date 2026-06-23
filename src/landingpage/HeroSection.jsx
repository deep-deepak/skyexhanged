import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

const slides = [
    { src: '/images/b8872e90-08f0-4107-8041-b2d20562d14f.jpg', alt: 'Welcome to Skyexchange – India\'s Trusted Betting Platform' },
    { src: '/images/dc6bbbc5-4727-41f1-98b0-99e114c0f416.jpg', alt: 'Skyexchange – Your Ultimate Gaming Destination' },
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
                                    width={1920}
                                    height={700}
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
                    background: #000;
                }
                .hero-container {
                    width: 100%;
                }
                .slider-wrapper {
                    overflow: hidden;
                    position: relative;
                    background: #000;
                    width: 100%;
                }
                .slide {
                    line-height: 0;
                }
            `}</style>
        </section>
    );
};

export default HeroSection;
