import React from 'react';
import Image from 'next/image';

const bonuses = [
    {
        title: 'Welcome Bonus',
        para: 'The Welcome Bonus is specially designed for new users. When you create an account and make your first deposit, you receive bonus funds to kick-start your betting or casino journey. This bonus gives you additional value right from the beginning, allowing you to explore sports betting markets or casino games with extra balance. It\'s a great way to start your experience on Skyexchange with added confidence.',
    },
    {
        title: 'Deposit Bonus',
        para: 'Sky Exchange provides deposit bonuses that reward you every time you add funds to your account. With a matched bonus structure, you receive a percentage of your deposit as extra betting credit. For example, when you deposit a certain amount, Skyexchange adds a bonus amount to increase your total balance. This gives you more opportunities to place bets and try different games without using only your own funds. Deposit bonuses are ideal for regular players who want to boost their betting power and maximize value on every transaction.',
    },
    {
        title: 'Cashback Offers',
        para: 'Cashback promotions help reduce potential losses by returning a percentage of your losing bets. These offers make selected sports bets less risky because even if your bet doesn\'t win, you still receive part of your stake back. Cashback deals are especially useful during major sporting events when players place multiple bets. This type of bonus provides added security and helps maintain your balance over time. With Sky Exchange cashback offers, you can continue enjoying your betting experience while minimizing losses.',
    },
    {
        title: 'Free Bets & Free Spins',
        para: 'Skyexchange regularly rewards players with free bets and free spins. Free Bets allow you to place sports wagers without using your main balance. If the bet wins, you keep the profit. Free Spins are available for selected slot games, giving you chances to win real rewards without spending your own funds. These promotions are perfect for trying new betting markets or exploring different casino games. They add excitement and increase your chances of winning without additional investment.',
    },
    {
        title: 'Referral Bonus',
        para: 'The Referral Bonus program rewards you for inviting friends to join Sky Exchange. When someone registers using your referral link and makes their first deposit, you receive bonus rewards. This promotion benefits both you and the new member. Your friend gets access to Skyexchange offers, and you earn extra rewards for helping grow the platform community. It\'s a simple way to earn additional bonuses while sharing your gaming experience with others.',
    },
    {
        title: 'VIP & Loyalty Rewards',
        paras: [
            'For regular and high-activity players, Sky Exchange offers a VIP & Loyalty Program. Members of the Sky Exchange VIP Club receive exclusive benefits that are not available to standard users.',
            'VIP advantages may include:',
        ],
        bullets: ['Special deposit bonuses', 'Higher cashback percentages', 'Personalized promotions', 'Faster withdrawals', 'Dedicated customer support'],
        closing: 'The more you play, the more rewards you unlock. This loyalty system ensures long-term players receive continuous value and premium treatment.',
    },
];

const PromotionsSection = () => {
    return (
        <section className="promo-section">
            <div className="promo-container">

                {/* LEFT — sticky image */}
                <div className="promo-left">
                    <div className="promo-left-inner">
                        <Image
                            src="/images/f548224f-af0c-48c6-9a3e-ce13e651db3b.jpg"
                            alt="Sky Exchange Promotions and Bonuses"
                            width={600}
                            height={800}
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                            priority
                        />
                    </div>
                </div>

                {/* RIGHT — scrollable text */}
                <div className="promo-right">
                    <h2 className="promo-heading">
                        Sky Exchange Promotions &amp; Bonuses: Maximize Your Rewards
                    </h2>
                    <p className="promo-para">
                        Sky Exchange offers a wide range of promotions and bonus deals designed to enhance your
                        betting and gaming experience. Whether you are a beginner or an experienced player,
                        Skyexchange provides valuable rewards that help you get more from every deposit and every
                        bet.
                    </p>
                    <p className="promo-para">
                        By taking advantage of these offers, you can increase your balance, reduce risk, and enjoy
                        extended gameplay. Below are the main promotions and bonuses available at Sky Exchange.
                    </p>

                    <div className="promo-bonuses">
                        {bonuses.map(({ title, para, paras, bullets, closing }) => (
                            <div key={title} className="promo-bonus">
                                <h3 className="promo-bonus-title">{title}</h3>
                                {para && <p className="promo-para">{para}</p>}
                                {paras && paras.map((p, i) => <p key={i} className="promo-para">{p}</p>)}
                                {bullets && (
                                    <ul className="promo-list">
                                        {bullets.map((b) => <li key={b}>{b}</li>)}
                                    </ul>
                                )}
                                {closing && <p className="promo-para">{closing}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .promo-section {
                    background: #0d0d0d;
                    padding: 80px 0 90px;
                    border-top: 1px solid #1a1a1a;
                }
                .promo-container {
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 0 40px;
                    display: flex;
                    align-items: flex-start;
                    gap: 60px;
                }

                /* LEFT — sticky */
                .promo-left {
                    flex: 0 0 44%;
                    max-width: 44%;
                    position: sticky;
                    top: 114px;
                    align-self: flex-start;
                }
                .promo-left-inner {
                    border-radius: 12px;
                    overflow: hidden;
                }

                /* RIGHT — text */
                .promo-right { flex: 1; min-width: 0; }

                .promo-heading {
                    color: #ffffff;
                    font-size: clamp(1.8rem, 3vw, 2.8rem);
                    font-weight: 800;
                    line-height: 1.2;
                    margin-bottom: 20px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .promo-para {
                    color: #cccccc;
                    font-size: 15px;
                    line-height: 1.85;
                    margin-bottom: 12px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .promo-para:last-child { margin-bottom: 0; }

                /* BONUS ITEMS */
                .promo-bonuses {
                    display: flex;
                    flex-direction: column;
                    gap: 28px;
                    margin-top: 28px;
                }
                .promo-bonus { border-top: 1px solid #222222; padding-top: 24px; }
                .promo-bonus:first-child { border-top: none; padding-top: 0; }

                .promo-bonus-title {
                    color: #F5C518;
                    font-size: 1.05rem;
                    font-weight: 700;
                    margin-bottom: 12px;
                    font-family: 'Poppins', Arial, sans-serif;
                    line-height: 1.3;
                }
                .promo-list {
                    color: #cccccc;
                    font-size: 14px;
                    line-height: 2.1;
                    padding-left: 20px;
                    margin-bottom: 10px;
                    list-style-type: disc;
                    font-family: 'Poppins', Arial, sans-serif;
                }

                /* RESPONSIVE */
                @media (max-width: 1024px) {
                    .promo-left { flex: 0 0 40%; max-width: 40%; }
                    .promo-container { gap: 40px; }
                }
                @media (max-width: 768px) {
                    .promo-container { flex-direction: column; padding: 0 20px; gap: 40px; }
                    .promo-left { flex: none; max-width: 100%; width: 100%; position: static; }
                }
            `}</style>
        </section>
    );
};

export default PromotionsSection;
