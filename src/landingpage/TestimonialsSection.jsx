import React from 'react';
import Slider from 'react-slick';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const testimonials = [
    {
        name: 'Priya Mehta',
        stars: 5,
        quote: '"My experience with Skyexchange has been very positive. The platform provides a wide range of sports options, and everything from account access to placing bets feels quick and convenient."',
    },
    {
        name: 'Sandeep Patel',
        stars: 5,
        quote: '"I was searching for a reliable betting platform and came across Skyexchange. After using it for some time, I can say it offers a stable and user-friendly environment for sports enthusiasts."',
    },
    {
        name: 'Rohit Gupta',
        stars: 5,
        quote: '"Skyexchange stands out because of its organized layout and smooth navigation. It\'s easy to track matches, check odds, and manage your account without confusion."',
    },
    {
        name: 'Neha Kapoor',
        stars: 5,
        quote: '"I like how Skyexchange provides a seamless experience across devices. Whether I access it from my phone or laptop, the platform works consistently and keeps everything simple."',
    },
    {
        name: 'Arjun Sharma',
        stars: 5,
        quote: '"The live betting feature on Skyexchange is exceptional. Real-time odds and instant updates make every match thrilling. I\'ve been using it for months and it never disappoints."',
    },
    {
        name: 'Kavya Reddy',
        stars: 5,
        quote: '"Depositing and withdrawing funds on Skyexchange is hassle-free. Transactions are processed quickly and the platform supports multiple payment methods including UPI and bank transfer."',
    },
    {
        name: 'Manish Verma',
        stars: 5,
        quote: '"The cricket betting section is amazing. From IPL to international matches, every market is available with competitive odds. Skyexchange is my go-to platform for cricket betting."',
    },
];

const PrevArrow = ({ onClick }) => (
    <button className="ts-arrow ts-arrow--prev" onClick={onClick} aria-label="Previous">
        <MdChevronLeft size={32} />
        <style jsx>{`
            .ts-arrow {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                z-index: 10;
                background: rgba(255,255,255,0.08);
                border: none;
                border-radius: 50%;
                width: 44px;
                height: 44px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                color: #ffffff;
                transition: background 0.2s;
            }
            .ts-arrow:hover { background: rgba(245,197,24,0.25); color: #F5C518; }
            .ts-arrow--prev { left: -56px; }
        `}</style>
    </button>
);

const NextArrow = ({ onClick }) => (
    <button className="ts-arrow ts-arrow--next" onClick={onClick} aria-label="Next">
        <MdChevronRight size={32} />
        <style jsx>{`
            .ts-arrow {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                z-index: 10;
                background: rgba(255,255,255,0.08);
                border: none;
                border-radius: 50%;
                width: 44px;
                height: 44px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                color: #ffffff;
                transition: background 0.2s;
            }
            .ts-arrow:hover { background: rgba(245,197,24,0.25); color: #F5C518; }
            .ts-arrow--next { right: -56px; }
        `}</style>
    </button>
);

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 640,  settings: { slidesToShow: 1 } },
    ],
};

const Stars = ({ count }) => (
    <div className="ts-stars">
        {Array.from({ length: count }).map((_, i) => (
            <span key={i}>★</span>
        ))}
        <style jsx>{`
            .ts-stars { color: #F5A623; font-size: 1.15rem; margin-bottom: 16px; letter-spacing: 2px; }
        `}</style>
    </div>
);

const TestimonialsSection = () => {
    return (
        <section className="ts-section">
            <div className="ts-container">
                <h2 className="ts-heading">Skyexchange User Testimonials</h2>

                <div className="ts-slider-wrap">
                    <Slider {...settings}>
                        {testimonials.map(({ name, stars, quote }) => (
                            <div key={name} className="ts-slide">
                                <div className="ts-card">
                                    <h3 className="ts-name">{name}</h3>
                                    <Stars count={stars} />
                                    <p className="ts-quote">{quote}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <style jsx>{`
                .ts-section {
                    background: #0f0f0f;
                    padding: 80px 0 90px;
                    border-top: 1px solid #1a1a1a;
                }
                .ts-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 70px;
                }
                .ts-heading {
                    color: #ffffff;
                    font-size: clamp(1.8rem, 3vw, 2.6rem);
                    font-weight: 800;
                    margin-bottom: 48px;
                    font-family: 'Poppins', Arial, sans-serif;
                }

                /* SLIDER WRAPPER — room for arrows */
                .ts-slider-wrap {
                    position: relative;
                }

                /* SLIDE PADDING */
                .ts-slide { padding: 0 10px; }

                /* CARD */
                .ts-card {
                    background: #131c2e;
                    border-radius: 10px;
                    padding: 28px 24px 32px;
                    min-height: 220px;
                }
                .ts-name {
                    color: #ffffff;
                    font-size: 1rem;
                    font-weight: 700;
                    margin-bottom: 8px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .ts-quote {
                    color: #bbbbbb;
                    font-size: 14px;
                    line-height: 1.8;
                    font-family: 'Poppins', Arial, sans-serif;
                    margin: 0;
                }

                /* SLICK DOTS */
                :global(.ts-slider-wrap .slick-dots) {
                    bottom: -36px;
                }
                :global(.ts-slider-wrap .slick-dots li button:before) {
                    color: #555555;
                    font-size: 8px;
                    opacity: 1;
                }
                :global(.ts-slider-wrap .slick-dots li.slick-active button:before) {
                    color: #F5C518;
                    opacity: 1;
                }

                @media (max-width: 768px) {
                    .ts-container { padding: 0 50px; }
                }
                @media (max-width: 480px) {
                    .ts-container { padding: 0 40px; }
                }
            `}</style>
        </section>
    );
};

export default TestimonialsSection;
