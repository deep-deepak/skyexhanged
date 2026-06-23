import React from 'react';
import { MdSportsSoccer, MdSportsTennis, MdSportsBasketball, MdSportsEsports } from 'react-icons/md';
import { GiCricketBat, GiHorseHead, GiCardRandom, GiRollingDices, GiSpinningWheel, GiShuttlecock } from 'react-icons/gi';
import { FaRunning } from 'react-icons/fa';

const trendingGames = [
    {
        Icon: GiCricketBat,
        title: 'Cricket Betting (IPL, T20, World Cup)',
        paras: [
            'Cricket remains India\'s number one betting choice. Major tournaments such as the IPL, ICC World Cup, and T20 internationals generate massive engagement throughout the year.',
            'Players can access:',
        ],
        bullets: ['Pre-match betting markets', 'Live in-play betting', 'Session betting options', 'Player performance markets', 'Toss and over-by-over markets'],
        closing: 'With continuous domestic and international tours, cricket betting offers endless opportunities. Real-time odds and live match updates make the experience even more immersive for fans who follow every ball.',
    },
    {
        Icon: MdSportsSoccer,
        title: 'Football Betting (Premier League, FIFA, UCL)',
        paras: [
            'Football betting is another top-performing category on Sky Exchange. Popular competitions like the English Premier League (EPL), UEFA Champions League (UCL), and FIFA tournaments attract strong participation.',
            'Available betting markets include:',
        ],
        bullets: ['Match winner', 'Over/Under goals', 'Both teams to score', 'Cards and corners', 'In-play goal betting'],
        closing: 'With global coverage and year-round tournaments, football provides consistent action and flexible betting options for both beginners and seasoned players.',
    },
    {
        Icon: MdSportsTennis,
        title: 'Tennis Betting (ATP, Wimbledon, Grand Slams)',
        paras: [
            'Tennis betting continues to grow, especially during major tournaments like Wimbledon and the Grand Slams. Sky Exchange covers ATP and WTA events with detailed markets.',
            'Popular betting options include:',
        ],
        bullets: ['Match winner', 'Set betting', 'Game betting', 'Point-by-point live markets'],
        closing: 'Tennis is particularly attractive for in-play bettors because of its frequent momentum swings. Each set and game can change the outcome, making it highly dynamic and engaging.',
    },
    {
        Icon: GiShuttlecock,
        title: 'Badminton Betting (Olympics & Major Tournaments)',
        paras: [
            'Badminton has gained significant popularity in India, especially during international tournaments and Olympic events.',
            'Betting markets typically include:',
        ],
        bullets: ['Match winner', 'Set betting', 'Total points markets'],
        closing: 'With fast rallies and short match durations, badminton offers quick betting opportunities and steady action for fans of the sport.',
    },
    {
        Icon: GiCardRandom,
        title: 'Card Games (Rummy, Poker, Teen Patti)',
        paras: [
            'Traditional Indian card games remain among the most trending betting formats. Sky Exchange offers both live and digital tables for:',
        ],
        bullets: ['Rummy', 'Poker', 'Teen Patti'],
        closing: 'These games are designed for quick entry and continuous gameplay. With steady action and simple rules, card games appeal to players looking for skill-based formats alongside entertainment.',
    },
    {
        Icon: FaRunning,
        title: 'Kabaddi Betting (Pro Kabaddi League)',
        paras: [
            'Kabaddi betting peaks during the Pro Kabaddi League (PKL) season. The sport\'s fast raids and quick tackles create rapid shifts in momentum, making it ideal for live betting.',
            'Common markets include:',
        ],
        bullets: ['Match winner', 'Total points', 'Raid points', 'First-half/second-half betting'],
        closing: 'The fast pace ensures consistent excitement throughout the match.',
    },
    {
        Icon: GiRollingDices,
        title: 'Matka Betting',
        paras: [
            'Matka betting continues to attract players who prefer traditional number-based formats. Known for its simple structure and quick results, Matka offers straightforward entry options.',
            'It remains popular due to:',
        ],
        bullets: ['Easy participation', 'Fast result declaration', 'Simple number selection format'],
        closing: 'This old-school betting style still holds strong appeal in 2025.',
    },
    {
        Icon: GiSpinningWheel,
        title: 'Slot Games',
        paras: [
            'Slot games are a major attraction for casual players. With a large catalogue featuring modern themes and engaging bonus rounds, slots offer quick spins and instant results.',
            'Key features include:',
        ],
        bullets: ['Fast gameplay', 'Bonus features', 'Progressive jackpots', 'Easy-to-understand mechanics'],
        closing: 'Slots are ideal for players seeking entertainment without complex strategies.',
    },
    {
        Icon: GiHorseHead,
        title: 'Horse Racing Betting',
        paras: [
            'Horse racing remains a traditional favorite with classic betting markets such as:',
        ],
        bullets: ['Win', 'Place', 'Exacta-style combinations'],
        closing: 'Live odds and featured race day events provide structured betting opportunities for racing enthusiasts.',
    },
    {
        Icon: MdSportsEsports,
        title: 'FIFA eSports Cup',
        paras: [
            'eSports betting, particularly digital football tournaments like the FIFA eSports Cup, is gaining traction. These competitions attract younger audiences and tech-savvy players.',
            'Betting options include:',
        ],
        bullets: ['Tournament winner', 'Match winner', 'Goal markets'],
        closing: 'With live updates and fast-paced gameplay, eSports adds a modern dimension to sports betting.',
    },
];

const secureTips = [
    'Always use secure and private internet connections.',
    'Never share your login credentials with anyone.',
    'Double-check payment details before confirming transactions.',
    'Keep your KYC and account verification updated.',
    'Contact official support in case of delays or technical issues.',
];

const kycDocs = ['Identity documents', 'Bank details', 'Contact information'];

const TrendingBettingSection = () => {
    return (
        <section className="tb-section">
            <div className="tb-container">

                {/* HEADING */}
                <h2 className="tb-heading">Top Trending Betting Games on Sky Exchange in 2025</h2>
                <p className="tb-para">
                    Sky Exchange offers a broad spectrum of betting options tailored to the distinctive tastes of
                    Indian players. From the unmatched excitement of cricket to the fast-paced thrill of casino
                    games, the platform delivers a balanced mix of variety, simplicity, and real-time engagement.
                </p>
                <p className="tb-para">
                    With real-time odds, easy navigation requiring minimal clicks, and year-round sporting events,
                    Sky Exchange ensures that players always have something exciting to explore—without feeling
                    overwhelmed. Whether you prefer quick bets with simple rules or deeper markets with advanced
                    options, the platform supports both casual players and experienced bettors.
                </p>
                <p className="tb-para tb-para--bottom">
                    Below are the top trending betting games on Sky Exchange in 2025.
                </p>

                {/* CARDS GRID */}
                <div className="tb-grid">
                    {trendingGames.map(({ Icon, title, paras, bullets, closing }) => (
                        <div key={title} className="tb-card">
                            <div className="tb-icon-box">
                                <Icon size={40} color="#111111" />
                            </div>
                            <h3 className="tb-card-title">{title}</h3>
                            {paras.map((p, i) => <p key={i} className="tb-card-text">{p}</p>)}
                            {bullets && (
                                <ul className="tb-list">
                                    {bullets.map((b) => <li key={b}>{b}</li>)}
                                </ul>
                            )}
                            {closing && <p className="tb-card-text">{closing}</p>}
                        </div>
                    ))}
                </div>

                {/* SECURE TRANSACTIONS */}
                <div className="tb-tips">
                    <h2 className="tb-sub-heading">Important Tips for Secure Transactions</h2>
                    <p className="tb-para">
                        To ensure smooth deposits and withdrawals on Sky Exchange, keep the following best practices in mind:
                    </p>
                    <ul className="tb-bullet-list">
                        {secureTips.map((t) => <li key={t}>{t}</li>)}
                    </ul>

                    <h2 className="tb-sub-heading tb-sub-heading--kyc">Important: Keep Your KYC Details Updated</h2>
                    <p className="tb-para">
                        To ensure smooth and uninterrupted withdrawals, it is essential to maintain updated{' '}
                        <strong>KYC (Know Your Customer)</strong> information. Keeping your identity verification
                        details current helps prevent transaction delays and ensures compliance with security
                        protocols.
                    </p>
                    <p className="tb-para">
                        Incomplete or outdated KYC information can slow down the withdrawal process. Make sure your:
                    </p>
                    <ul className="tb-bullet-list">
                        {kycDocs.map((d) => <li key={d}>{d}</li>)}
                    </ul>
                    <p className="tb-para">are always accurate and verified.</p>
                </div>
            </div>

            <style jsx>{`
                .tb-section {
                    background: radial-gradient(ellipse at 10% 10%, #6b0000 0%, #1a0000 40%, #000000 100%);
                    padding: 80px 0 90px;
                }
                .tb-container {
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 0 50px;
                }

                .tb-heading {
                    color: #ffffff;
                    font-size: clamp(1.8rem, 3vw, 2.6rem);
                    font-weight: 800;
                    line-height: 1.2;
                    margin-bottom: 22px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .tb-para {
                    color: #dddddd;
                    font-size: 15px;
                    line-height: 1.85;
                    margin-bottom: 14px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .tb-para--bottom { margin-bottom: 44px; }

                /* GRID */
                .tb-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 22px;
                    margin-bottom: 60px;
                }

                /* CARD */
                .tb-card {
                    background: rgba(20, 5, 5, 0.85);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-radius: 10px;
                    padding: 26px 22px 28px;
                }
                .tb-icon-box {
                    width: 76px;
                    height: 76px;
                    background: #F5C518;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 16px;
                }
                .tb-card-title {
                    color: #F5C518;
                    font-size: 1rem;
                    font-weight: 700;
                    margin-bottom: 12px;
                    line-height: 1.35;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .tb-card-text {
                    color: #cccccc;
                    font-size: 14px;
                    line-height: 1.8;
                    margin-bottom: 8px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .tb-card-text:last-child { margin-bottom: 0; }
                .tb-list {
                    color: #cccccc;
                    font-size: 14px;
                    line-height: 2;
                    padding-left: 20px;
                    margin-bottom: 8px;
                    list-style-type: disc;
                    font-family: 'Poppins', Arial, sans-serif;
                }

                /* TIPS BLOCK */
                .tb-tips { padding-top: 10px; }
                .tb-sub-heading {
                    color: #ffffff;
                    font-size: clamp(1.3rem, 2vw, 1.8rem);
                    font-weight: 800;
                    margin-bottom: 16px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .tb-sub-heading--kyc { margin-top: 44px; }
                .tb-bullet-list {
                    color: #dddddd;
                    font-size: 15px;
                    line-height: 2.2;
                    padding-left: 22px;
                    margin: 10px 0 16px;
                    list-style-type: disc;
                    font-family: 'Poppins', Arial, sans-serif;
                }

                /* RESPONSIVE */
                @media (max-width: 1024px) {
                    .tb-grid { grid-template-columns: repeat(2, 1fr); }
                    .tb-container { padding: 0 40px; }
                }
                @media (max-width: 600px) {
                    .tb-grid { grid-template-columns: 1fr; }
                    .tb-container { padding: 0 20px; }
                }
            `}</style>
        </section>
    );
};

export default TrendingBettingSection;
