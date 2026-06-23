import React from 'react';

const depositSteps = [
    {
        step: 'Step 1',
        title: 'Login to Your Account',
        para: 'Start by visiting the official Sky Exchange platform and enter your login credentials (username and password). Always ensure you are accessing the correct website to maintain account security.',
    },
    {
        step: 'Step 2',
        title: 'Go to the Deposit Section',
        para: 'After logging in, navigate to your dashboard. From there, click on the "Deposit" option. This section allows you to choose your preferred payment method and enter the amount you wish to add.',
    },
    {
        step: 'Step 3',
        title: 'Select Your Preferred Payment Method',
        para: 'Sky Exchange provides multiple secure payment options to suit different user preferences. You can choose from:',
        bullets: ['UPI (Unified Payments Interface)', 'Bank Transfer', 'E-wallets', 'Cryptocurrency'],
        closing: 'Select the method that is most convenient for you.',
    },
    {
        step: 'Step 4',
        title: 'Enter Deposit Amount',
        para: 'Enter the amount you want to deposit into your account. Make sure the amount matches your transaction limits, if any.',
    },
    {
        step: 'Step 5',
        title: 'Complete the Payment Process',
        para: 'Follow the instructions provided based on your selected payment method.',
        bullets: [
            'For UPI, confirm the payment via your UPI app.',
            'For bank transfers, complete the transaction through your banking platform.',
            'For e-wallets or cryptocurrency, follow the on-screen verification steps.',
        ],
    },
    {
        step: 'Step 6',
        title: 'Funds Credited Instantly',
        para: 'Once the transaction is successfully completed, the funds are typically credited to your Sky Exchange account instantly or within a few minutes, depending on the payment method used.',
    },
];


const StepCard = ({ step, title, para, bullets, closing }) => (
    <div className="dw-card">
        <div className="dw-step-bar">{step}</div>
        <div className="dw-card-body">
            <h3 className="dw-card-title">{title}</h3>
            {para && <p className="dw-card-text">{para}</p>}
            {bullets && (
                <ul className="dw-list">
                    {bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
            )}
            {closing && <p className="dw-card-text">{closing}</p>}
        </div>
        <style jsx>{`
            .dw-card {
                background: #1a2235;
                border-radius: 10px;
                overflow: hidden;
            }
            .dw-step-bar {
                background: #F5C518;
                color: #111111;
                font-size: 0.95rem;
                font-weight: 700;
                padding: 10px 20px;
                font-family: 'Poppins', Arial, sans-serif;
            }
            .dw-card-body { padding: 22px 22px 26px; }
            .dw-card-title {
                color: #F5C518;
                font-size: 1.05rem;
                font-weight: 700;
                margin-bottom: 12px;
                line-height: 1.3;
                font-family: 'Poppins', Arial, sans-serif;
            }
            .dw-card-text {
                color: #cccccc;
                font-size: 14px;
                line-height: 1.8;
                margin-bottom: 10px;
                font-family: 'Poppins', Arial, sans-serif;
            }
            .dw-card-text:last-child { margin-bottom: 0; }
            .dw-list {
                color: #cccccc;
                font-size: 14px;
                line-height: 2.1;
                padding-left: 20px;
                margin-bottom: 10px;
                list-style-type: disc;
                font-family: 'Poppins', Arial, sans-serif;
            }
        `}</style>
    </div>
);

const DepositWithdrawalSection = () => {
    return (
        <section id="deposit" className="dw-section">
            <div className="dw-container">

                {/* MAIN HEADING */}
                <h2 className="dw-heading" data-aos="fade-up">Deposit and Withdrawal Money from Sky Exchange Account</h2>
                <p className="dw-para">
                    Managing your account balance smoothly is essential for a hassle-free experience. Sky Exchange
                    offers secure, fast, and user-friendly options to deposit and withdraw funds. This step-by-step
                    guide explains the complete process in a clear and SEO-friendly format, making it easy for both
                    users and search engines to understand.
                </p>

                {/* DEPOSIT */}
                <h3 className="dw-sub-heading">How to Deposit Funds in Sky Exchange</h3>
                <p className="dw-para dw-para--gap">
                    Depositing money into your Sky Exchange account is simple and secure. Follow these steps to
                    complete your transaction without any confusion:
                </p>
                <div className="dw-grid">
                    {depositSteps.map((s, index) => (
                        <div key={s.step + '-dep'} data-aos="fade-up" data-aos-delay={String((index % 4) * 100)}>
                            <StepCard {...s} />
                        </div>
                    ))}
                </div>


            </div>

            <style jsx>{`
                .dw-section {
                    background: #0d0d0d;
                    padding: 80px 0 90px;
                    border-top: 1px solid #1a1a1a;
                }
                .dw-container {
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 0 50px;
                }
                .dw-heading {
                    color: #ffffff;
                    font-size: clamp(1.8rem, 3vw, 2.6rem);
                    font-weight: 800;
                    line-height: 1.2;
                    margin-bottom: 20px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .dw-sub-heading {
                    color: #ffffff;
                    font-size: clamp(1.2rem, 2vw, 1.6rem);
                    font-weight: 800;
                    margin-bottom: 14px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .dw-para {
                    color: #cccccc;
                    font-size: 15px;
                    line-height: 1.85;
                    margin-bottom: 10px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .dw-para--gap { margin-bottom: 30px; }
                .dw-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                }

                @media (max-width: 1024px) {
                    .dw-grid { grid-template-columns: repeat(2, 1fr); }
                    .dw-container { padding: 0 40px; }
                }
                @media (max-width: 600px) {
                    .dw-grid { grid-template-columns: 1fr; }
                    .dw-container { padding: 0 20px; }
                }
            `}</style>
        </section>
    );
};

export default DepositWithdrawalSection;
