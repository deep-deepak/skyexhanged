import React from 'react';

const features = [
    {
        num: '01',
        title: 'A Complete Sports Betting Experience',
        paras: [
            'Sports betting is one of the core strengths of Sky Exchin. Indian players, especially cricket fans, can enjoy competitive odds and a wide variety of betting markets. From local cricket tournaments to international matches, the platform covers multiple sporting events to ensure players never miss an opportunity.',
            'The platform is optimized for both desktop and mobile users, allowing seamless access anytime and anywhere. With fast loading speeds and real-time updates, players can place bets confidently without delays.',
        ],
    },
    {
        num: '02',
        title: 'Live Casino and Slots Under One Platform',
        paras: [
            'In addition to sports betting, Sky Exchin provides an impressive selection of live dealer casino games. These games recreate the atmosphere of a real casino, offering players a more immersive experience. Professional dealers, smooth streaming, and interactive gameplay make live gaming exciting and engaging.',
            'Slot lovers can explore a wide range of slot games featuring attractive themes, bonuses, and jackpots. Whether you prefer classic slots or modern video slots, the platform ensures variety and entertainment.',
        ],
    },
    {
        num: '03',
        title: 'Safe, Secure, and Reliable',
        paras: [
            'Security is one of the biggest concerns for online players, and Sky Exchin prioritizes user safety at every step. The platform uses advanced security measures to protect personal information and financial transactions.',
            'From account registration to deposits and withdrawals, every process is designed to ensure data privacy and secure payment handling. Players can focus on gaming without worrying about the safety of their information or funds.',
            'In case of any issue, the Sky Exchin support team is available 24/7 to assist users. The customer care staff is trained to resolve queries quickly and guide players through any technical or account-related concerns. This round-the-clock support adds an extra layer of trust and reliability.',
        ],
    },
    {
        num: '04',
        title: 'Trusted by Millions of Players',
        paras: [
            'Today, Sky Exchin is trusted by over 50 lakh active users across India. This growing community reflects the platform\'s strong reputation and commitment to delivering a quality gaming experience.',
            'The increasing number of users highlights:',
        ],
        bullets: [
            'Reliable services',
            'Smooth and secure transactions',
            'Fast customer support',
            'A wide variety of betting and gaming options',
        ],
        closing: 'Such consistent performance has helped Sky Exchin build credibility in a competitive online gaming market.',
    },
    {
        num: '05',
        title: 'Easy Registration and Quick Access',
        paras: [
            'Creating an account on Sky Exchin is simple and fast. New users can register within minutes and start exploring the platform immediately. The straightforward sign-up process ensures that players can begin betting and gaming without unnecessary complications.',
            'The platform\'s clean design and intuitive layout make it easy for users to navigate between sports betting, casino games, slots, and other features. Even first-time users can quickly understand how to place bets, manage their accounts, and explore different gaming sections.',
        ],
    },
];

const PopularitySection = () => {
    return (
        <section className="expertise-section">
            <div className="expertise-container">

                {/* Heading block */}
                <div className="intro-block">
                    <h2 className="intro-heading">Why Sky Exchin Is Gaining Popularity in India</h2>
                    <p className="intro-para">
                        One of the main reasons behind the rapid success of Sky Exchin is its user-focused approach.
                        The platform combines multiple gaming services under one roof, ensuring players do not need to
                        switch between different websites.
                    </p>
                    <p className="intro-para">Sky Exchin offers:</p>
                    <ul className="intro-list">
                        <li>Sports betting on major national and international events</li>
                        <li>Live dealer casino games for a real-time gaming experience</li>
                        <li>Popular slot games with engaging themes</li>
                        <li>Matka markets</li>
                        <li>Card table games such as poker and other classic options</li>
                    </ul>
                    <p className="intro-para">
                        Whether you want to place a bet on your favorite cricket team, enjoy spinning slots, or test
                        your skills at a poker table, Sky Exchin provides everything in one easy-to-use interface.
                    </p>
                </div>

                {/* Feature cards */}
                <div className="cards-grid">
                    {features.map((f) => (
                        <div key={f.num} className="feat-card">
                            <span className="feat-num">{f.num}</span>
                            <h3 className="feat-title">{f.title}</h3>
                            {f.paras.map((p, i) => (
                                <p key={i} className="feat-para">{p}</p>
                            ))}
                            {f.bullets && (
                                <ul className="feat-list">
                                    {f.bullets.map((b) => <li key={b}>{b}</li>)}
                                </ul>
                            )}
                            {f.closing && <p className="feat-para">{f.closing}</p>}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                /* ── SECTION ── */
                .expertise-section {
                    background: radial-gradient(ellipse at 10% 10%, #6b0000 0%, #1a0000 40%, #000000 100%);
                    padding: 80px 0 90px;
                }
                .expertise-container {
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 0 40px;
                }

                /* ── INTRO ── */
                .intro-block {
                    margin-bottom: 60px;
                }
                .intro-heading {
                    color: #ffffff;
                    font-size: clamp(1.8rem, 3vw, 2.8rem);
                    font-weight: 800;
                    margin-bottom: 24px;
                    font-family: Arial, sans-serif;
                    line-height: 1.2;
                }
                .intro-para {
                    color: #dddddd;
                    font-size: 17px;
                    line-height: 1.8;
                    margin-bottom: 14px;
                    font-family: Arial, sans-serif;
                }
                .intro-list {
                    color: #dddddd;
                    font-size: 17px;
                    line-height: 2;
                    padding-left: 24px;
                    margin-bottom: 14px;
                    font-family: Arial, sans-serif;
                }

                /* ── CARDS GRID ── */
                .cards-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 22px;
                    align-items: stretch;
                }
                .feat-card:nth-child(4) { grid-column: 1 / 2; }
                .feat-card:nth-child(5) { grid-column: 2 / 3; }

                /* ── CARD ── */
                .feat-card {
                    background: #1a0d0d;
                    border: 1px solid rgba(180, 60, 60, 0.25);
                    border-radius: 14px;
                    padding: 30px 28px 32px;
                    position: relative;
                    box-shadow: 0 4px 24px rgba(0,0,0,0.5);
                    transition: border-color 0.25s, box-shadow 0.25s;
                }
                .feat-card:hover {
                    border-color: rgba(245, 197, 24, 0.4);
                    box-shadow: 0 6px 32px rgba(0,0,0,0.7);
                }

                /* number badge */
                .feat-num {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    background: #F5C518;
                    color: #111;
                    font-size: 14px;
                    font-weight: 900;
                    border-radius: 8px;
                    margin-bottom: 18px;
                    font-family: Arial, sans-serif;
                    flex-shrink: 0;
                }

                .feat-title {
                    color: #F5C518;
                    font-size: 21px;
                    font-weight: 800;
                    margin-bottom: 18px;
                    line-height: 1.3;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .feat-para {
                    color: #e0e0e0;
                    font-size: 15px;
                    line-height: 1.8;
                    margin-bottom: 12px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .feat-para:last-child { margin-bottom: 0; }
                .feat-list {
                    color: #e0e0e0;
                    font-size: 15px;
                    line-height: 2.1;
                    padding-left: 20px;
                    margin-bottom: 12px;
                    font-family: 'Poppins', Arial, sans-serif;
                }

                /* ── RESPONSIVE ── */
                @media (max-width: 1024px) {
                    .cards-grid { grid-template-columns: repeat(2, 1fr); }
                    .feat-card:nth-child(4),
                    .feat-card:nth-child(5) { grid-column: span 1; }
                    .feat-card:nth-child(5) { grid-column: auto; }
                }
                @media (max-width: 640px) {
                    .cards-grid { grid-template-columns: 1fr; }
                    .feat-card:nth-child(4),
                    .feat-card:nth-child(5) { grid-column: 1; }
                    .expertise-container { padding: 0 20px; }
                }
            `}</style>
        </section>
    );
};

export default PopularitySection;
