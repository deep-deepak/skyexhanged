import React from 'react';
import { FaBitcoin, FaCreditCard, FaUniversity, FaWallet, FaMobileAlt } from 'react-icons/fa';

const payments = [
    {
        Icon: FaMobileAlt,
        iconColor: '#4CAF50',
        title: 'UPI Payments (Google Pay, PhonePe, Paytm, BHIM)',
        intro: 'Unified Payments Interface (UPI) is one of the fastest and most widely used payment systems in India. Sky Exchange supports popular UPI apps, including:',
        bullets: ['Google Pay', 'PhonePe', 'Paytm', 'BHIM'],
    },
    {
        Icon: FaUniversity,
        iconColor: '#E65100',
        title: 'Bank Transfers (NEFT, IMPS, RTGS)',
        intro: 'For users who prefer traditional banking methods, Sky Exchange allows direct bank transfers through:',
        bullets: ['NEFT (National Electronic Funds Transfer)', 'IMPS (Immediate Payment Service)', 'RTGS (Real-Time Gross Settlement)'],
    },
    {
        Icon: FaWallet,
        iconColor: '#1976D2',
        title: 'E-Wallets (Skrill, Neteller, AstroPay)',
        intro: 'Digital wallets are becoming increasingly popular due to their speed and security. Sky Exchange accepts trusted international e-wallet services such as:',
        bullets: ['Skrill', 'Neteller', 'AstroPay'],
    },
    {
        Icon: FaBitcoin,
        iconColor: '#F7931A',
        title: 'Cryptocurrency (Bitcoin, Ethereum, USDT)',
        intro: 'Sky Exchange also supports cryptocurrency payments for users who prefer decentralized and digital assets. Accepted cryptocurrencies include:',
        bullets: ['Bitcoin (BTC)', 'Ethereum (ETH)', 'USDT (Tether).'],
    },
    {
        Icon: FaCreditCard,
        iconColor: '#1565C0',
        title: 'Debit and Credit Cards (Visa, Mastercard, RuPay)',
        intro: 'For quick and hassle-free deposits, Sky Exchange accepts major debit and credit cards, including:',
        bullets: ['Visa', 'Mastercard', 'RuPay'],
    },
];

const PaymentMethodsSection = () => {
    return (
        <section className="pm-section">
            <div className="pm-container">
                <h2 className="pm-heading" data-aos="fade-up">Accepted Payment Methods on Sky Exchange</h2>
                <p className="pm-para">
                    Sky Exchange provides users with multiple secure and convenient payment options to deposit and
                    withdraw funds smoothly. Whether you prefer traditional banking methods or modern digital
                    wallets, the platform supports a wide range of trusted payment solutions to ensure safe and
                    fast transactions.
                </p>
                <p className="pm-para pm-para--gap">
                    Below is a detailed overview of the approved payment methods available on Sky Exchange.
                </p>

                <div className="pm-grid">
                    {payments.map(({ Icon, iconColor, title, intro, bullets }, index) => (
                        <div key={title} className="pm-card" data-aos="fade-up" data-aos-delay={String((index % 4) * 100)}>
                            <div className="pm-icon-wrap">
                                <Icon size={36} color={iconColor} />
                            </div>
                            <h3 className="pm-card-title">{title}</h3>
                            <p className="pm-card-text">{intro}</p>
                            <ul className="pm-list">
                                {bullets.map((b) => <li key={b}>{b}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* FOOTER TEXT */}
                <div className="pm-footer">
                    <h2 className="pm-footer-heading">Safe and Flexible Transactions on Sky Exchange</h2>
                    <p className="pm-para">
                        Sky Exchange ensures that all payment methods are processed through secure systems to
                        protect user data and financial information. With multiple payment choices available,
                        users can select the option that best fits their convenience and financial preferences.
                    </p>
                    <p className="pm-para">
                        Whether you prefer UPI, bank transfers, e-wallets, cryptocurrency, or debit/credit cards,
                        Sky Exchange offers flexibility and efficiency in every transaction.
                    </p>

                    <h2 className="pm-footer-heading pm-footer-heading--note">Important Note</h2>
                    <p className="pm-para">
                        Before making any deposits or withdrawals, users should carefully review the latest
                        payment policies, processing times, and applicable terms. Payment guidelines may change
                        periodically, so staying updated ensures a smooth and secure transaction experience.
                    </p>
                </div>
            </div>

            <style jsx>{`
                .pm-section {
                    background: #0f0f0f;
                    padding: 80px 0 90px;
                }
                .pm-container {
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 0 50px;
                }

                .pm-heading {
                    color: #ffffff;
                    font-size: clamp(1.8rem, 3vw, 2.6rem);
                    font-weight: 800;
                    line-height: 1.2;
                    margin-bottom: 20px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .pm-para {
                    color: #cccccc;
                    font-size: 15px;
                    line-height: 1.85;
                    margin-bottom: 10px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .pm-para--gap { margin-bottom: 44px; }

                /* GRID — 3 col */
                .pm-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                    margin-bottom: 60px;
                }

                /* CARD */
                .pm-card {
                    background: #1a2235;
                    border-radius: 10px;
                    padding: 28px 24px 30px;
                }
                .pm-icon-wrap {
                    width: 72px;
                    height: 72px;
                    background: #ffffff;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 18px;
                }
                .pm-card-title {
                    color: #F5C518;
                    font-size: 1rem;
                    font-weight: 700;
                    margin-bottom: 12px;
                    line-height: 1.35;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .pm-card-text {
                    color: #cccccc;
                    font-size: 14px;
                    line-height: 1.8;
                    margin-bottom: 10px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .pm-list {
                    color: #cccccc;
                    font-size: 14px;
                    line-height: 2.1;
                    padding-left: 20px;
                    margin: 0;
                    list-style-type: disc;
                    font-family: 'Poppins', Arial, sans-serif;
                }

                /* FOOTER */
                .pm-footer { padding-top: 10px; }
                .pm-footer-heading {
                    color: #ffffff;
                    font-size: clamp(1.3rem, 2vw, 1.8rem);
                    font-weight: 800;
                    margin-bottom: 16px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .pm-footer-heading--note { margin-top: 40px; }

                /* RESPONSIVE */
                @media (max-width: 1024px) {
                    .pm-grid { grid-template-columns: repeat(2, 1fr); }
                    .pm-container { padding: 0 40px; }
                }
                @media (max-width: 600px) {
                    .pm-grid { grid-template-columns: 1fr; }
                    .pm-container { padding: 0 20px; }
                }
            `}</style>
        </section>
    );
};

export default PaymentMethodsSection;
