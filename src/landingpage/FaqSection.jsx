import React, { useState } from 'react';

const faqs = [
    {
        q: 'What is Skyexchin?',
        paras: [
            'Skyexchin is an online sports betting and gaming platform that allows users to place bets on various sports events and participate in other online gaming activities. It is designed to provide a smooth user experience with multiple betting markets, competitive odds, and secure transactions.',
            'Skyexchin is popular among users looking for online sports betting options with flexible payment methods and customer support assistance.',
        ],
    },
    {
        q: 'What Steps Should I Follow for Skyexchin Account Registration?',
        intro: 'To create an account on Skyexchin, follow these simple steps:',
        ordered: [
            'Visit the official Skyexchin website.',
            'Click on the "Register" or "Sign Up" button.',
            'Enter your required personal details such as name, mobile number, and email address.',
            'Create a secure username and password.',
            'Complete the verification process, if required.',
        ],
    },
    {
        q: 'What Sports Can I Bet On?',
        intro: 'Skyexchin offers a wide range of sports betting options. Users can typically place bets on:',
        bullets: ['Cricket', 'Football', 'Tennis', 'Basketball', 'Kabaddi', 'Horse Racing', 'Other international and domestic sports events'],
        closing: 'The availability of sports may vary depending on ongoing tournaments and seasons. Live betting options are also commonly available for major sports events.',
    },
    {
        q: 'What Payment Methods Are Accepted?',
        intro: 'Skyexchin generally supports multiple payment options to make deposits convenient for users. Commonly accepted payment methods include:',
        bullets: ['UPI (Unified Payments Interface)', 'Net Banking', 'Bank Transfers', 'E-wallets', 'Other digital payment solutions'],
        closing: 'The available payment methods may vary depending on your location. It is recommended to check the payment section of the platform for updated options.',
    },
    {
        q: 'What Steps Need to Be Taken for Money Withdrawal?',
        intro: 'Withdrawing money from Skyexchin is usually a straightforward process. Follow these steps:',
        ordered: [
            'Log in to your Skyexchin account.',
            'Go to the "Withdrawal" or "Cash Out" section.',
            'Enter the amount you wish to withdraw.',
            'Select your preferred payment method.',
            'Confirm your request.',
        ],
        closing: 'Processing time may vary depending on the payment method selected. Make sure your account is verified to avoid delays in withdrawal approval.',
    },
    {
        q: 'Does Skyexchin Provide Bonus Offers and Promotional Benefits?',
        intro: 'Yes, Skyexchin often provides bonus offers and promotional benefits to its users. These may include:',
        bullets: ['Welcome bonuses for new users', 'Deposit bonuses', 'Cashback offers', 'Referral rewards', 'Special promotions during major sports events'],
        closing: 'Bonus terms and conditions usually apply, so users should carefully read the promotional rules before participating.',
    },
    {
        q: 'What Are the Available Channels to Contact Skyexchin Customer Support?',
        intro: 'Skyexchin typically provides multiple customer support channels to assist users. These may include:',
        bullets: ['Live chat support', 'WhatsApp assistance', 'Email support', 'Telegram support', 'Customer helpline (if available)'],
        closing: 'Support availability may vary depending on time and platform policies. For faster resolution, users should provide accurate account details while contacting support.',
    },
];

const FaqItem = ({ faq, open, onToggle }) => (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
        <button className="faq-trigger" onClick={onToggle} aria-expanded={open}>
            <span className="faq-q">{faq.q}</span>
            <span className="faq-icon">{open ? '−' : '+'}</span>
        </button>

        {open && (
            <div className="faq-body">
                {faq.paras && faq.paras.map((p, i) => <p key={i} className="faq-text">{p}</p>)}
                {faq.intro && <p className="faq-text">{faq.intro}</p>}
                {faq.ordered && (
                    <ol className="faq-list faq-list--ol">
                        {faq.ordered.map((item, i) => <li key={i}>{item}</li>)}
                    </ol>
                )}
                {faq.bullets && (
                    <ul className="faq-list faq-list--ul">
                        {faq.bullets.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                )}
                {faq.closing && <p className="faq-text">{faq.closing}</p>}
            </div>
        )}

        <style jsx>{`
            .faq-item {
                border-bottom: 1px solid rgba(255,255,255,0.07);
            }
            .faq-trigger {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: #1a1828;
                border: none;
                padding: 18px 24px;
                cursor: pointer;
                text-align: left;
                gap: 20px;
            }
            .faq-item--open .faq-trigger {
                background: #1e1c30;
            }
            .faq-q {
                color: #ffffff;
                font-size: 15px;
                font-weight: 500;
                line-height: 1.4;
                font-family: 'Poppins', Arial, sans-serif;
            }
            .faq-icon {
                color: #ffffff;
                font-size: 1.4rem;
                font-weight: 300;
                flex-shrink: 0;
                line-height: 1;
            }
            .faq-body {
                background: #100f1e;
                padding: 20px 24px 24px;
            }
            .faq-text {
                color: #cccccc;
                font-size: 14px;
                line-height: 1.85;
                margin-bottom: 12px;
                font-family: 'Poppins', Arial, sans-serif;
            }
            .faq-text:last-child { margin-bottom: 0; }
            .faq-list {
                color: #cccccc;
                font-size: 14px;
                line-height: 2.1;
                margin-bottom: 12px;
                font-family: 'Poppins', Arial, sans-serif;
            }
            .faq-list--ul { padding-left: 22px; list-style-type: disc; }
            .faq-list--ol { padding-left: 22px; list-style-type: decimal; }
        `}</style>
    </div>
);

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section className="faq-section">
            <div className="faq-container">
                <h2 className="faq-heading">FAQs About Skyexchin</h2>
                <p className="faq-intro">
                    If you are searching for clear and SEO-friendly information about Skyexchin, this guide
                    answers the most common questions in a simple and easy-to-understand format. These FAQs are
                    designed to help users understand how Skyexchin works, including registration, sports betting
                    options, payments, withdrawals, legality, bonuses, and customer support.
                </p>

                <div className="faq-list-wrap">
                    {faqs.map((faq, i) => (
                        <FaqItem
                            key={i}
                            faq={faq}
                            open={openIndex === i}
                            onToggle={() => toggle(i)}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
                .faq-section {
                    background: #0d0b18;
                    padding: 80px 0 100px;
                    border-top: 1px solid #1a1a1a;
                }
                .faq-container {
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 0 50px;
                }
                .faq-heading {
                    color: #ffffff;
                    font-size: clamp(1.8rem, 3vw, 2.6rem);
                    font-weight: 800;
                    margin-bottom: 18px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .faq-intro {
                    color: #cccccc;
                    font-size: 15px;
                    line-height: 1.85;
                    margin-bottom: 48px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .faq-list-wrap {
                    border: 1px solid rgba(255,255,255,0.07);
                    border-radius: 8px;
                    overflow: hidden;
                }

                @media (max-width: 768px) {
                    .faq-container { padding: 0 20px; }
                }
            `}</style>
        </section>
    );
};

export default FaqSection;
