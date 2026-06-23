import React from 'react';
import { MdSportsSoccer, MdSportsTennis, MdSportsBasketball, MdSportsEsports } from 'react-icons/md';
import { GiCricketBat, GiHorseHead, GiSoccerBall } from 'react-icons/gi';
import { FaMoneyBillAlt } from 'react-icons/fa';

const sports = [
    {
        Icon: GiCricketBat,
        title: 'Cricket Betting (IPL, T20, World Cup)',
        intro: 'Cricket remains one of the most popular betting categories on the platform. Users can place bets on major tournaments and international events, including:',
        bullets: ['IPL (Indian Premier League)', 'ICC Cricket World Cup', 'T20 leagues', 'Test matches', 'ODI series'],
        closing: 'Live betting features allow users to wager during matches, offering real-time odds and dynamic markets. This makes cricket betting both interactive and strategic for fans who closely follow the game.',
    },
    {
        Icon: MdSportsSoccer,
        title: 'Football Betting',
        intro: 'Football lovers can explore betting markets across top global leagues and tournaments. Popular options include:',
        bullets: ['English Premier League', 'La Liga', 'UEFA Champions League', 'FIFA World Cup'],
        closing: 'From match winners and total goals to advanced in-play markets, football betting provides multiple opportunities to engage with every match.',
    },
    {
        Icon: MdSportsTennis,
        title: 'Tennis Betting',
        intro: 'Tennis fans can bet on some of the biggest tournaments in the sport, including:',
        bullets: ['Grand Slam events (Australian Open, French Open, Wimbledon, US Open)', 'ATP Tour matches', 'WTA competitions'],
        closing: 'With live betting options available, users can predict match outcomes, set winners, and other key events as the action unfolds.',
    },
    {
        Icon: GiHorseHead,
        title: 'Horse Racing',
        intro: 'Horse racing enthusiasts can access live betting markets covering:',
        bullets: ['Indian racecourses', 'UK racetracks', 'Dubai racing events', 'Other major international venues'],
        closing: 'Real-time updates and competitive odds make horse racing betting fast-paced and exciting.',
    },
    {
        Icon: MdSportsBasketball,
        title: 'Basketball Betting',
        intro: 'Basketball fans have access to betting markets on major competitions such as:',
        bullets: ['NBA', 'EuroLeague', 'International tournaments'],
        closing: 'Users can place bets on match outcomes, point spreads, totals, and more, ensuring a comprehensive betting experience.',
    },
    {
        Icon: MdSportsEsports,
        title: 'Esports Betting',
        intro: 'Esports continues to grow rapidly, and Sky Exchange offers betting on top gaming tournaments, including:',
        bullets: ['CS: GO', 'Dota 2', 'League of Legends', 'Valorant'],
        closing: 'With competitive markets and live wagering features, esports betting provides a modern and dynamic experience for gaming fans.',
    },
    {
        Icon: FaMoneyBillAlt,
        title: 'Other Sports Betting Options',
        intro: 'In addition to mainstream sports, the platform also supports betting on:',
        bullets: ['Hockey', 'Kabaddi', 'Volleyball', 'Baseball', 'Motorsports'],
        closing: 'This variety ensures that users can find betting opportunities across a broad spectrum of sporting events.',
    },
];

const SportsBettingSection = () => {
    return (
        <section className="sb-section">
            <div className="sb-container">
                <h2 className="sb-heading">Sports Betting Options Available on Sky Exchange</h2>
                <p className="sb-intro">
                    Sky Exchange offers a wide range of sports betting opportunities designed for both beginners and
                    experienced bettors. With competitive odds, live betting features, and diverse markets, the
                    platform provides an engaging and secure environment for sports enthusiasts. Below is a detailed
                    overview of the major sports available for betting.
                </p>

                <div className="sb-grid">
                    {sports.map(({ Icon, title, intro, bullets, closing }) => (
                        <div key={title} className="sb-card">
                            <div className="sb-icon-box">
                                <Icon size={40} color="#111111" />
                            </div>
                            <h3 className="sb-card-title">{title}</h3>
                            <p className="sb-card-text">{intro}</p>
                            <ul className="sb-list">
                                {bullets.map((b) => <li key={b}>{b}</li>)}
                            </ul>
                            <p className="sb-card-text">{closing}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .sb-section {
                    background: radial-gradient(ellipse at 10% 10%, #6b0000 0%, #1a0000 40%, #000000 100%);
                    padding: 80px 0 90px;
                }
                .sb-container {
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 0 50px;
                }

                .sb-heading {
                    color: #ffffff;
                    font-size: clamp(1.8rem, 3vw, 2.6rem);
                    font-weight: 800;
                    line-height: 1.2;
                    margin-bottom: 22px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .sb-intro {
                    color: #dddddd;
                    font-size: 16px;
                    line-height: 1.85;
                    margin-bottom: 50px;
                    max-width: 100%;
                    font-family: 'Poppins', Arial, sans-serif;
                }

                /* GRID — 3 columns */
                .sb-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                }

                /* CARD */
                .sb-card {
                    background: rgba(20, 5, 5, 0.85);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-radius: 10px;
                    padding: 28px 26px 30px;
                }

                /* ICON */
                .sb-icon-box {
                    width: 76px;
                    height: 76px;
                    background: #F5C518;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 18px;
                }

                /* CARD TEXT */
                .sb-card-title {
                    color: #F5C518;
                    font-size: 1.05rem;
                    font-weight: 700;
                    margin-bottom: 14px;
                    line-height: 1.3;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .sb-card-text {
                    color: #cccccc;
                    font-size: 14px;
                    line-height: 1.8;
                    margin-bottom: 10px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .sb-card-text:last-child { margin-bottom: 0; }
                .sb-list {
                    color: #cccccc;
                    font-size: 14px;
                    line-height: 2;
                    padding-left: 20px;
                    margin-bottom: 10px;
                    list-style-type: disc;
                    font-family: 'Poppins', Arial, sans-serif;
                }

                /* RESPONSIVE */
                @media (max-width: 1024px) {
                    .sb-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 600px) {
                    .sb-grid { grid-template-columns: 1fr; }
                    .sb-container { padding: 0 20px; }
                }
            `}</style>
        </section>
    );
};

export default SportsBettingSection;
