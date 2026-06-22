import React from 'react';

const steps = [
    {
        step: 'Step 1',
        title: 'Create an Account',
        paras: [
            'To begin your betting journey, you first need to register on the platform. The registration process is simple:',
        ],
        bullets: [
            'Enter your basic details.',
            'Create a secure username and password.',
            'Complete any necessary verification steps.',
        ],
        closing: 'Once your account is successfully created, you can log in anytime using your credentials and access the full range of features available on Sky Exchin.',
    },
    {
        step: 'Step 2',
        title: 'Make a Secure Deposit',
        paras: [
            'After registration, the next step is to fund your account. Sky Exchin offers multiple payment options, allowing users to choose a method that is convenient and secure for them.',
            'Deposits are typically processed quickly, ensuring you can start betting without delays. The platform prioritizes safe financial transactions, giving users peace of mind while managing their funds.',
        ],
    },
    {
        step: 'Step 3',
        title: 'Choose Your Sport or Casino Game',
        paras: [
            'Once your account balance is updated, you can explore the available betting options. Sky Exchin provides access to:',
        ],
        bullets: [
            'Sports betting on various national and international events',
            'Live casino games',
            'Slot machines',
            'Card games',
            'Matka',
        ],
        closing: 'Users can browse different categories, select their preferred event or game, and place bets instantly. The interface is designed to make navigation smooth and betting fast.',
    },
    {
        step: 'Step 4',
        title: 'Place Bets and Track Winnings in Real-Time',
        paras: [
            'Sports betting is one of the core strengths of Sky Exchin. Indian players, especially cricket fans, can enjoy competitive odds and a wide variety of betting markets. From local cricket tournaments to international matches, the platform covers multiple sporting events to ensure players never miss an opportunity.',
            'The platform is optimized for both desktop and mobile users, allowing seamless access anytime and anywhere. With fast loading speeds and real-time updates, players can place bets confidently without delays.',
        ],
    },
    {
        step: 'Step 5',
        title: 'Withdraw Your Winnings Easily',
        paras: [
            'One of the key features of Sky Exchin is its simple withdrawal process. If you win, you can request a withdrawal directly from your account dashboard.',
            'The withdrawal process is designed to be:',
        ],
        bullets: [
            'Quick',
            'Secure',
            'Easy to complete',
        ],
        closing: 'With just a few clicks, you can transfer your winnings using your preferred payment method.',
    },
];

const HowItWorksSection = () => {
    return (
        <section className="howworks-section">
            <div className="howworks-container">

                {/* Intro */}
                <div className="hw-intro">
                    <h2 className="hw-main-heading">What is Sky Exchin and How Does It Work?</h2>
                    <p className="hw-para">
                        <strong>Sky Exchin</strong> is an online betting platform that allows users to safely log in
                        and place bets on a wide range of sports and casino games. Designed for simplicity, security,
                        and user-friendly navigation, Sky Exchin makes it easy for players to enjoy sports betting,
                        live casino games, slot machines, card games, and matka in one place.
                    </p>
                    <p className="hw-para">
                        The platform is built to ensure a smooth experience for both beginners and experienced bettors.
                        With secure login access, fast transactions, and real-time updates, users can enjoy gambling
                        entertainment with confidence and convenience.
                    </p>

                    <h3 className="hw-sub-heading">How Sky Exchin Works</h3>
                    <p className="hw-para">
                        Sky Exchin operates through a straightforward process that allows users to start betting
                        in just a few easy steps.
                    </p>
                </div>

                {/* Step cards */}
                <div className="steps-grid">
                    {steps.map((s) => (
                        <div key={s.step} className="step-card">
                            <div className="step-badge">{s.step}</div>
                            <h4 className="step-title">{s.title}</h4>
                            {s.paras.map((p, i) => (
                                <p key={i} className="step-para">{p}</p>
                            ))}
                            {s.bullets && (
                                <ul className="step-list">
                                    {s.bullets.map((b) => <li key={b}>{b}</li>)}
                                </ul>
                            )}
                            {s.closing && <p className="step-para">{s.closing}</p>}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                /* ── SECTION ── */
                .howworks-section {
                    background: radial-gradient(ellipse at 90% 20%, #4a0a0a 0%, #0d0d0d 50%, #000 100%);
                    padding: 80px 0 90px;
                }
                .howworks-container {
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 0 40px;
                }

                /* ── INTRO ── */
                .hw-intro {
                    margin-bottom: 60px;
                }
                .hw-main-heading {
                    color: #ffffff;
                    font-size: clamp(1.8rem, 3vw, 2.6rem);
                    font-weight: 800;
                    margin-bottom: 22px;
                    font-family: 'Poppins', Arial, sans-serif;
                    line-height: 1.2;
                }
                .hw-sub-heading {
                    color: #ffffff;
                    font-size: clamp(1.4rem, 2.2vw, 2rem);
                    font-weight: 800;
                    margin: 36px 0 14px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .hw-para {
                    color: #cccccc;
                    font-size: 16px;
                    line-height: 1.8;
                    margin-bottom: 14px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .hw-para strong { color: #ffffff; font-weight: 700; }

                /* ── STEPS GRID ── */
                .steps-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 22px;
                    align-items: stretch;
                }
                /* Step 4 & 5 in second row of 2 */
                .step-card:nth-child(4) { grid-column: 1 / 2; }
                .step-card:nth-child(5) { grid-column: 2 / 3; }

                /* ── CARD ── */
                .step-card {
                    background: #0d1520;
                    border: 1px solid rgba(255,255,255,0.07);
                    border-radius: 14px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    transition: border-color 0.25s;
                }
                .step-card:hover {
                    border-color: rgba(245, 197, 24, 0.35);
                }

                /* step badge — full-width yellow bar */
                .step-badge {
                    background: #F5C518;
                    color: #111;
                    font-size: 15px;
                    font-weight: 800;
                    font-family: 'Poppins', Arial, sans-serif;
                    padding: 10px 20px;
                    border-radius: 8px;
                    margin: 18px 18px 0;
                }

                .step-title {
                    color: #F5C518;
                    font-size: 20px;
                    font-weight: 800;
                    margin: 18px 22px 14px;
                    line-height: 1.3;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .step-para {
                    color: #e0e0e0;
                    font-size: 15px;
                    line-height: 1.8;
                    margin: 0 22px 12px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .step-para:last-child { margin-bottom: 22px; }
                .step-list {
                    color: #e0e0e0;
                    font-size: 15px;
                    line-height: 2;
                    padding-left: 40px;
                    margin: 0 22px 12px 0;
                    font-family: 'Poppins', Arial, sans-serif;
                }

                /* ── RESPONSIVE ── */
                @media (max-width: 1024px) {
                    .steps-grid { grid-template-columns: repeat(2, 1fr); }
                    .step-card:nth-child(4),
                    .step-card:nth-child(5) { grid-column: auto; }
                }
                @media (max-width: 640px) {
                    .steps-grid { grid-template-columns: 1fr; }
                    .howworks-container { padding: 0 20px; }
                }
            `}</style>
        </section>
    );
};

export default HowItWorksSection;
