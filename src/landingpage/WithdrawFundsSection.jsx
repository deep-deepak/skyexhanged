import React from 'react';

const steps = [
    {
        step: 'Step 01',
        title: 'Access Your Account',
        para: 'Login to your Sky Exchange account using your registered credentials.',
    },
    {
        step: 'Step 02',
        title: 'Navigate to the Withdrawal Section',
        para: 'From your dashboard, click on the "Withdraw" option. This will open the withdrawal request page.',
    },
    {
        step: 'Step 03',
        title: 'Choose Withdrawal Method',
        para: 'Select your preferred withdrawal method. Usually, the available methods include:',
        bullets: ['Bank Transfer', 'UPI', 'E-wallet'],
        closing: 'Make sure your selected payment method is properly linked and verified with your account.',
    },
    {
        step: 'Step 04',
        title: 'Enter Withdrawal Amount',
        para: 'Input the amount you wish to withdraw. Double-check the amount before proceeding to avoid errors.',
    },
    {
        step: 'Step 05',
        title: 'Submit Withdrawal Request',
        para: 'After confirming the amount and payment details, submit your withdrawal request. Some platforms may require additional verification such as OTP confirmation for security purposes.',
    },
    {
        step: 'Step 06',
        title: 'Processing Time',
        para: 'Once submitted, your withdrawal request will be processed. Processing times may vary depending on the selected payment method, but most transactions are completed quickly.',
    },
];

const secureTips = [
    'Always use secure and private internet connections.',
    'Never share your login credentials with anyone.',
    'Double-check payment details before confirming transactions.',
    'Keep your KYC and account verification updated.',
    'Contact official support in case of delays or technical issues.',
];

const kycItems = ['Identity documents', 'Bank details', 'Contact information'];

const WithdrawFundsSection = () => {
    return (
        <section id="withdraw" className="wf-section">
            <div className="wf-container">

                <h2 className="wf-heading" data-aos="fade-up">How to Withdraw Funds from Sky Exchange</h2>
                <p className="wf-para wf-para--gap">
                    Withdrawing money from your Sky Exchange account is just as easy and secure as depositing
                    funds. Follow the steps below to process your withdrawal request smoothly.
                </p>

                {/* STEP CARDS */}
                <div className="wf-grid">
                    {steps.map(({ step, title, para, bullets, closing }, index) => (
                        <div key={step} className="wf-card" data-aos="fade-up" data-aos-delay={String((index % 4) * 100)}>
                            <span className="wf-badge">{step}</span>
                            <h3 className="wf-card-title">{title}</h3>
                            <p className="wf-card-text">{para}</p>
                            {bullets && (
                                <ul className="wf-list">
                                    {bullets.map((b) => <li key={b}>{b}</li>)}
                                </ul>
                            )}
                            {closing && <p className="wf-card-text">{closing}</p>}
                        </div>
                    ))}
                </div>

                {/* IMPORTANT TIPS */}
                <div className="wf-tips">
                    <h2 className="wf-tips-heading">Important Tips for Secure Transactions</h2>
                    <p className="wf-para">
                        To ensure smooth deposits and withdrawals on Sky Exchange, keep the following best
                        practices in mind:
                    </p>
                    <ul className="wf-bullet-list">
                        {secureTips.map((t) => <li key={t}>{t}</li>)}
                    </ul>

                    <h2 className="wf-tips-heading wf-tips-heading--mt">
                        Important: Keep Your KYC Details Updated
                    </h2>
                    <p className="wf-para">
                        To ensure smooth and uninterrupted withdrawals, it is essential to maintain updated{' '}
                        <strong>KYC (Know Your Customer)</strong> information. Keeping your identity verification
                        details current helps prevent transaction delays and ensures compliance with security
                        protocols.
                    </p>
                    <p className="wf-para">
                        Incomplete or outdated KYC information can slow down the withdrawal process. Make sure your:
                    </p>
                    <ul className="wf-bullet-list">
                        {kycItems.map((d) => <li key={d}>{d}</li>)}
                    </ul>
                    <p className="wf-para">are always accurate and verified.</p>
                </div>
            </div>

            <style jsx>{`
                .wf-section {
                    background: radial-gradient(ellipse at 10% 10%, #6b0000 0%, #1a0000 40%, #000000 100%);
                    padding: 80px 0 90px;
                }
                .wf-container {
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 0 50px;
                }

                .wf-heading {
                    color: #ffffff;
                    font-size: clamp(1.8rem, 3vw, 2.6rem);
                    font-weight: 800;
                    line-height: 1.2;
                    margin-bottom: 18px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .wf-para {
                    color: #cccccc;
                    font-size: 15px;
                    line-height: 1.85;
                    margin-bottom: 12px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .wf-para--gap { margin-bottom: 36px; }

                /* GRID */
                .wf-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 22px;
                    margin-bottom: 60px;
                }

                /* CARD */
                .wf-card {
                    background: rgba(20, 5, 5, 0.82);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-radius: 12px;
                    padding: 22px 22px 28px;
                    position: relative;
                }

                /* PILL BADGE */
                .wf-badge {
                    display: inline-block;
                    background: #F5C518;
                    color: #111111;
                    font-size: 0.8rem;
                    font-weight: 700;
                    padding: 5px 14px;
                    border-radius: 6px;
                    margin-bottom: 18px;
                    font-family: 'Poppins', Arial, sans-serif;
                }

                .wf-card-title {
                    color: #F5C518;
                    font-size: 1.05rem;
                    font-weight: 700;
                    margin-bottom: 12px;
                    line-height: 1.3;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .wf-card-text {
                    color: #cccccc;
                    font-size: 14px;
                    line-height: 1.8;
                    margin-bottom: 10px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .wf-card-text:last-child { margin-bottom: 0; }
                .wf-list {
                    color: #cccccc;
                    font-size: 14px;
                    line-height: 2.1;
                    padding-left: 20px;
                    margin-bottom: 10px;
                    list-style-type: disc;
                    font-family: 'Poppins', Arial, sans-serif;
                }

                /* TIPS */
                .wf-tips { padding-top: 10px; }
                .wf-tips-heading {
                    color: #ffffff;
                    font-size: clamp(1.3rem, 2vw, 1.8rem);
                    font-weight: 800;
                    margin-bottom: 16px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .wf-tips-heading--mt { margin-top: 44px; }
                .wf-bullet-list {
                    color: #cccccc;
                    font-size: 15px;
                    line-height: 2.2;
                    padding-left: 22px;
                    margin: 12px 0 16px;
                    list-style-type: disc;
                    font-family: 'Poppins', Arial, sans-serif;
                }

                @media (max-width: 1024px) {
                    .wf-grid { grid-template-columns: repeat(2, 1fr); }
                    .wf-container { padding: 0 40px; }
                }
                @media (max-width: 600px) {
                    .wf-grid { grid-template-columns: 1fr; }
                    .wf-container { padding: 0 20px; }
                }
            `}</style>
        </section>
    );
};

export default WithdrawFundsSection;
