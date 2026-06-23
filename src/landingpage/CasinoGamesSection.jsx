import React from 'react';

const games = [
    {
        title: 'Live Casino Games',
        paras: [
            'Live Casino Games on Sky Exchange bring the real casino atmosphere directly to your screen. Players can enjoy real-time gameplay with professional dealers hosting popular table games such as Blackjack, Roulette, Baccarat, and Poker.',
            'These games are streamed live, allowing users to interact with dealers and experience an authentic casino setting from the comfort of their homes. The smooth interface and high-quality streaming make live casino games one of the most popular sections on the platform.',
            'Whether you are a beginner or an experienced player, live casino games offer excitement, transparency, and real-time action.',
        ],
    },
    {
        title: 'Slot Games',
        paras: [
            'Slot Games on Sky Exchange provide a mix of classic slots, video slots, and progressive jackpot slots. Each slot game comes with unique themes, engaging graphics, and rewarding bonus features.',
            'Players can choose from:',
        ],
        bullets: [
            'Traditional fruit slot machines',
            'Modern video slots with interactive animations',
            'Progressive jackpot slots offering big winning opportunities',
        ],
        closing: 'Slot games are easy to play and suitable for all types of players. With simple controls and multiple paylines, they deliver both entertainment and the potential for substantial rewards.',
    },
    {
        title: 'Teen Patti & Andar Bahar',
        paras: [
            'For fans of traditional Indian card games, Sky Exchange offers Teen Patti and Andar Bahar with real dealers. These games combine cultural familiarity with exciting betting options.',
            'Teen Patti allows players to compete using strategic card combinations, while Andar Bahar focuses on predicting where the matching card will appear. Both games are fast-paced and highly engaging.',
            'Playing Teen Patti and Andar Bahar with live dealers enhances the overall experience, giving players the feel of a real gaming table while enjoying online convenience.',
        ],
    },
    {
        title: 'Poker Games',
        paras: [
            'Poker enthusiasts can enjoy multiple variations of poker on Sky Exchange. Popular options include Texas Hold\'em, Omaha, and other competitive poker formats.',
            'Players can:',
        ],
        bullets: [
            'Compete against real opponents',
            'Join tables with different stake levels',
            'Test strategic skills in live gameplay environments',
        ],
        closing: 'The poker section is designed to cater to both casual players and serious competitors. With interactive gameplay and professional hosting, it offers a thrilling and competitive gaming experience.',
    },
    {
        title: 'Roulette',
        paras: [
            'Roulette remains one of the most iconic casino games, and Sky Exchange provides several exciting versions. Players can place bets on European Roulette, American Roulette, and French Roulette.',
            'Each version offers unique rules and betting structures, giving users multiple ways to enjoy the spinning wheel. From betting on single numbers to colors and combinations, roulette combines simplicity with suspense.',
            'The live roulette tables create an immersive casino experience with real-time spins and transparent outcomes.',
        ],
    },
    {
        title: 'Blackjack',
        paras: [
            'Blackjack is a classic casino favorite available in both live dealer and AI-powered formats. Players can choose to compete against professional dealers in real-time or practice with digital versions.',
            'The objective is simple—reach a card total as close to 21 as possible without exceeding it. However, strategic decisions such as hitting, standing, splitting, and doubling down add depth to the game.',
            'Blackjack on Sky Exchange is suitable for beginners and advanced players who enjoy skill-based gameplay with competitive odds.',
        ],
    },
    {
        title: 'Baccarat',
        paras: [
            'Baccarat is a fast-paced card game that is widely popular among casino enthusiasts. Sky Exchange offers live dealer baccarat tables that recreate the authentic casino experience online.',
            'Players bet on one of three outcomes: the Player, the Banker, or a Tie. The simplicity of the rules combined with the excitement of live gameplay makes baccarat one of the top choices on the platform.',
            'Baccarat on Sky Exchange is suitable for beginners and advanced players who enjoy skill-based gameplay with competitive odds.',
        ],
    },
];

const whyBullets = [
    'Live dealer interaction',
    'High-quality streaming',
    'Multiple game variations',
    'User-friendly interface',
    'Secure and smooth gameplay',
];

const CasinoGamesSection = () => {
    return (
        <section className="cg-section">
            <div className="cg-container">
                <h2 className="cg-heading" data-aos="fade-up">Casino Games on Sky Exchange</h2>
                <p className="cg-intro">
                    Sky Exchange offers a dynamic and engaging online casino environment where players can enjoy a
                    wide variety of games. From live dealer tables to thrilling slot machines and traditional Indian
                    card games, the platform is designed to deliver a seamless and immersive gaming experience.
                    Below is a detailed overview of the exciting casino games available on Sky Exchange.
                </p>

                <div className="cg-grid">
                    {games.map(({ title, paras, bullets, closing }, index) => (
                        <div key={title} className="cg-card" data-aos="zoom-in" data-aos-delay={String((index % 4) * 100)}>
                            <h3 className="cg-card-title">{title}</h3>
                            {paras.map((p, i) => <p key={i} className="cg-card-text">{p}</p>)}
                            {bullets && (
                                <ul className="cg-list">
                                    {bullets.map((b) => <li key={b}>{b}</li>)}
                                </ul>
                            )}
                            {closing && <p className="cg-card-text">{closing}</p>}
                        </div>
                    ))}
                </div>

                {/* WHY CHOOSE */}
                <div className="cg-why">
                    <h2 className="cg-why-heading">Why Choose Sky Exchange for Casino Games?</h2>
                    <p className="cg-card-text">Sky Exchange offers a well-rounded casino experience with:</p>
                    <ul className="cg-why-list">
                        {whyBullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                    <p className="cg-card-text">
                        Whether you prefer slot machines, live table games, or traditional Indian card games, the
                        platform provides diverse options to suit every player's interest.
                    </p>
                </div>
            </div>

            <style jsx>{`
                .cg-section {
                    background: #111111;
                    padding: 80px 0 90px;
                }
                .cg-container {
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 0 50px;
                }

                /* HEADING */
                .cg-heading {
                    color: #ffffff;
                    font-size: clamp(1.8rem, 3vw, 2.6rem);
                    font-weight: 800;
                    line-height: 1.2;
                    margin-bottom: 20px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .cg-intro {
                    color: #cccccc;
                    font-size: 16px;
                    line-height: 1.85;
                    margin-bottom: 48px;
                    font-family: 'Poppins', Arial, sans-serif;
                }

                /* GRID */
                .cg-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                    margin-bottom: 60px;
                }

                /* CARD */
                .cg-card {
                    background: #1a2235;
                    border-radius: 10px;
                    padding: 28px 24px 30px;
                }
                .cg-card-title {
                    color: #F5C518;
                    font-size: 1.05rem;
                    font-weight: 700;
                    margin-bottom: 16px;
                    line-height: 1.3;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .cg-card-text {
                    color: #cccccc;
                    font-size: 14px;
                    line-height: 1.8;
                    margin-bottom: 10px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .cg-card-text:last-child { margin-bottom: 0; }
                .cg-list {
                    color: #cccccc;
                    font-size: 14px;
                    line-height: 2;
                    padding-left: 20px;
                    margin-bottom: 10px;
                    list-style-type: disc;
                    font-family: 'Poppins', Arial, sans-serif;
                }

                /* WHY CHOOSE */
                .cg-why { padding-top: 10px; }
                .cg-why-heading {
                    color: #ffffff;
                    font-size: clamp(1.4rem, 2.5vw, 1.9rem);
                    font-weight: 800;
                    margin-bottom: 18px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .cg-why-list {
                    color: #cccccc;
                    font-size: 15px;
                    line-height: 2.2;
                    padding-left: 22px;
                    margin: 14px 0 18px;
                    list-style-type: disc;
                    font-family: 'Poppins', Arial, sans-serif;
                }

                /* RESPONSIVE */
                @media (max-width: 1024px) {
                    .cg-grid { grid-template-columns: repeat(2, 1fr); }
                    .cg-container { padding: 0 40px; }
                }
                @media (max-width: 600px) {
                    .cg-grid { grid-template-columns: 1fr; }
                    .cg-container { padding: 0 20px; }
                }
            `}</style>
        </section>
    );
};

export default CasinoGamesSection;
