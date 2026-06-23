import React, { useState } from 'react';

const faqs = [
    {
        q: 'What is Sky Exchange?',
        paras: [
            'Sky Exchange is a trusted Online Cricket Exchange platform that offers users a seamless and secure experience for live sports exchange. Our platform provides real-time updates, fast access, and reliable support for sports enthusiasts.',
        ],
    },
    {
        q: 'Why is Sky Exchange considered a trusted Cricket Exchange Platform?',
        paras: [
            'Sky Exchange is recognized as a reliable Cricket Exchange Platform because it offers secure transactions, fast performance, live match updates, and dedicated customer support to ensure a smooth user experience.',
        ],
    },
    {
        q: 'What services does Sky Exchange offer as a Sports Exchange Platform?',
        paras: [
            'As a leading Sports Exchange Platform, Sky Exchange provides access to live cricket exchange services, real-time match information, and a user-friendly platform designed for sports fans.',
        ],
    },
    {
        q: 'How can I get an Online Cricket ID on Sky Exchange?',
        paras: [
            'Getting an Online Cricket ID on Sky Exchange is quick and easy. Simply contact our support team, complete the registration process, and start accessing the platform securely.',
        ],
    },
    {
        q: 'What makes Sky Exchange the best Cricket Exchange Platform?',
        paras: [
            'Sky Exchange is considered one of the Best Cricket Exchange Platforms due to its advanced technology, secure environment, instant support, and seamless user experience for cricket enthusiasts.',
        ],
    },
    {
        q: 'Does Sky Exchange provide Live Cricket Exchange services?',
        paras: [
            'Yes, Sky Exchange offers Live Cricket Exchange services with real-time updates, fast access, and a smooth interface to enhance your overall experience.',
        ],
    },
    {
        q: 'Why choose Sky Exchange over other Online Sports Exchange platforms?',
        paras: [
            'Sky Exchange stands out among Online Sports Exchange platforms because of its reliability, responsive customer support, user-friendly design, and commitment to delivering a premium experience.',
        ],
    },
    {
        q: 'Is Sky Exchange a trusted platform for Cricket Exchange services?',
        paras: [
            'Yes, Sky Exchange is a Trusted Cricket Exchange platform that prioritizes user security, fast performance, and excellent customer support.',
        ],
    },
    {
        q: 'Can I access multiple sports on Sky Exchange?',
        paras: [
            'Yes, Sky Exchange is a comprehensive Sports Exchange Platform that aims to provide users with a seamless experience across various sports along with live cricket updates.',
        ],
    },
    {
        q: 'How does Sky Exchange ensure a secure Cricket Betting Exchange experience?',
        paras: [
            'Sky Exchange focuses on platform security, data protection, and a smooth user interface to provide a secure and reliable Cricket Betting Exchange experience.',
        ],
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
        <section id="faq" className="faq-section">
            <div className="faq-container">
                <h2 className="faq-heading" data-aos="fade-up">FAQs About Skyexchange</h2>
                <p className="faq-intro">
                    If you are searching for clear and SEO-friendly information about Skyexchange, this guide
                    answers the most common questions in a simple and easy-to-understand format. These FAQs are
                    designed to help users understand how Skyexchange works, including registration, sports betting
                    options, payments, withdrawals, legality, bonuses, and customer support.
                </p>

                <div className="faq-list-wrap" data-aos="fade-up">
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
