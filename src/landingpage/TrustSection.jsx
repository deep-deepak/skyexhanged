import React from 'react';
import { MdLock, MdSportsCricket, MdAccountBalance, MdPhoneAndroid, MdCardGiftcard, MdSupportAgent, MdDevices } from 'react-icons/md';

const cards = [
    {
        Icon: MdLock,
        title: 'Licensed & Secure Platform',
        paras: ['Security is one of the biggest concerns for online bettors. Sky Exchange operates on a secure and monitored system designed to protect user funds and personal data.'],
        bullets: [
            'Advanced encryption technology safeguards transactions',
            '24/7 monitoring ensures platform integrity',
            'Secure login system prevents unauthorized access',
        ],
        closing: 'This strong focus on safety gives users peace of mind while betting.',
    },
    {
        Icon: MdSportsCricket,
        title: 'Wide Range of Betting Markets & Competitive Odds',
        paras: ['One of the main reasons players prefer Sky Exchange is the variety of betting options available. The platform offers multiple sports and gaming categories, making it suitable for every type of bettor.', 'Popular options include:'],
        bullets: [
            'Cricket betting',
            'Football betting',
            'Tennis betting',
            'Casino games',
            'Matka and card games',
        ],
        closing: 'Competitive odds across all categories allow users to maximize their betting strategies.',
    },
    {
        Icon: MdAccountBalance,
        title: 'Fast Deposit & Withdrawal Process',
        paras: ['Quick and hassle-free transactions are essential for a smooth betting experience. Sky Exchange is known for its fast deposit and withdrawal system.'],
        bullets: [
            'Instant or near-instant deposits',
            'Quick withdrawal processing',
            'Minimal delays in transactions',
        ],
        closing: 'Users can add funds or withdraw their winnings within minutes, ensuring uninterrupted gameplay and financial flexibility.',
    },
    {
        Icon: MdPhoneAndroid,
        title: 'User-Friendly Interface',
        paras: ['A simple and intuitive interface makes Sky Exchange accessible to both beginners and experienced bettors.'],
        bullets: [
            'Easy navigation across categories',
            'Clear betting options and odds display',
            'Smooth account management system',
        ],
        closing: 'Even new users can quickly understand how the platform works without facing technical difficulties.',
    },
    {
        Icon: MdCardGiftcard,
        title: 'Exclusive Promotions & Bonus Offers',
        paras: ['Bonuses and rewards play a major role in enhancing the betting experience. Sky Exchange regularly provides:'],
        bullets: [
            'Welcome bonuses for new users',
            'Special promotions on major sporting events',
            'Cashback and loyalty rewards',
            'Ongoing bonus offers for active players',
        ],
        closing: 'These exclusive offers keep users engaged and add extra value to their betting journey.',
    },
    {
        Icon: MdSupportAgent,
        title: '24/7 Customer Support',
        paras: ['Reliable customer service is crucial for building trust. Sky Exchange offers dedicated support around the clock.'],
        bullets: [
            '24/7 assistance for account-related issues',
            'Quick responses to transaction queries',
            'Help with login or technical problems',
        ],
        closing: 'Players can reach out anytime and receive prompt support whenever needed.',
    },
    {
        Icon: MdDevices,
        title: 'Seamless Access on Mobile & Desktop',
        paras: ['In today\'s mobile-first world, accessibility is key. Sky Exchange provides smooth performance on both mobile devices and desktop platforms.'],
        bullets: [
            'Fast-loading website',
            'Optimized mobile experience',
            'Easy login process without complications',
        ],
        closing: 'Whether users prefer betting on their smartphones or computers, the platform ensures consistent and reliable access.',
    },
];

const TrustSection = () => {
    return (
        <section id="trust" className="trust-section">
            <div className="trust-container">

                {/* Intro */}
                <div className="trust-intro">
                    <h2 className="trust-heading" data-aos="fade-up">Why Over 50 Lakh Users Trust Sky Exchange for Online Betting in India</h2>
                    <p className="trust-para">
                        When it comes to online betting in India, trust, security, and user experience matter the most.
                        Over 50 lakh users across the country rely on Sky Exchange for a safe, smooth, and rewarding
                        betting experience.
                    </p>
                    <p className="trust-para">
                        So, what makes this platform stand out in a competitive market? Let's explore the key reasons
                        why millions of players continue to choose Sky Exchange.
                    </p>
                </div>

                {/* Cards */}
                <div className="trust-grid">
                    {cards.map((card, i) => (
                        <div key={i} className={`trust-card ${i === 6 ? 'last-card' : ''}`} data-aos="zoom-in" data-aos-delay={String((i % 4) * 100)}>
                            <div className="trust-icon-wrap">
                                <card.Icon size={36} color="#111" />
                            </div>
                            <h3 className="trust-title">{card.title}</h3>
                            {card.paras.map((p, j) => (
                                <p key={j} className="trust-para-card">{p}</p>
                            ))}
                            {card.bullets && (
                                <ul className="trust-list">
                                    {card.bullets.map((b) => <li key={b}>{b}</li>)}
                                </ul>
                            )}
                            {card.closing && <p className="trust-para-card">{card.closing}</p>}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .trust-section {
                    background: radial-gradient(ellipse at 10% 50%, #6b0000 0%, #1a0000 40%, #000000 100%);
                    padding: 80px 0 90px;
                }
                .trust-container {
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 0 40px;
                }

                /* INTRO */
                .trust-intro { margin-bottom: 55px; }
                .trust-heading {
                    color: #ffffff;
                    font-size: clamp(1.8rem, 3vw, 2.6rem);
                    font-weight: 800;
                    line-height: 1.2;
                    margin-bottom: 22px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .trust-para {
                    color: #cccccc;
                    font-size: 16px;
                    line-height: 1.85;
                    margin-bottom: 14px;
                    font-family: 'Poppins', Arial, sans-serif;
                }

                /* GRID — 3 cols, last card alone col-1 */
                .trust-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 22px;
                    align-items: stretch;
                }
                .last-card { grid-column: 1 / 2; }

                /* CARD */
                .trust-card {
                    background: #1c1c1c;
                    border: 1px solid rgba(255,255,255,0.07);
                    border-radius: 14px;
                    padding: 28px 26px 30px;
                    transition: border-color 0.25s;
                }
                .trust-card:hover { border-color: rgba(245,197,24,0.4); }

                /* ICON */
                .trust-icon-wrap {
                    width: 68px;
                    height: 68px;
                    background: #F5C518;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 18px;
                    flex-shrink: 0;
                }

                .trust-title {
                    color: #F5C518;
                    font-size: 19px;
                    font-weight: 800;
                    margin-bottom: 14px;
                    line-height: 1.3;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .trust-para-card {
                    color: #dddddd;
                    font-size: 15px;
                    line-height: 1.8;
                    margin-bottom: 10px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .trust-para-card:last-child { margin-bottom: 0; }
                .trust-list {
                    color: #dddddd;
                    font-size: 15px;
                    line-height: 2;
                    padding-left: 22px;
                    margin-bottom: 10px;
                    font-family: 'Poppins', Arial, sans-serif;
                }

                /* RESPONSIVE */
                @media (max-width: 1024px) {
                    .trust-grid { grid-template-columns: repeat(2, 1fr); }
                    .last-card { grid-column: auto; }
                }
                @media (max-width: 640px) {
                    .trust-grid { grid-template-columns: 1fr; }
                    .trust-container { padding: 0 20px; }
                }
            `}</style>
        </section>
    );
};

export default TrustSection;
