import React from 'react';
import Image from 'next/image';

const rightSteps = [
    {
        num: '01',
        title: 'Visit the Official Website',
        paras: ['First, go to the official Sky Exchange website using a secure and trusted link. Make sure you are accessing the correct platform to ensure your personal information stays protected. Always double-check the URL before proceeding.'],
    },
    {
        num: '02',
        title: 'Click on the Sign-Up or Register Button',
        paras: ['Once you land on the homepage, look for the "Sign Up" or "Register" button. This option is usually displayed clearly at the top of the page. Click on it to begin the account creation process.'],
    },
    {
        num: '03',
        title: 'Enter Your Basic Details',
        paras: ['You will be asked to fill in some basic personal information. This typically includes:'],
        bullets: ['Full Name', 'Mobile Number', 'Email Address', 'Username (if required)'],
        closing: 'Make sure all the details you provide are accurate and active, as they will be used for account verification and future communication.',
    },
    {
        num: '04',
        title: 'Verify Your Account',
        paras: ['After submitting your details, you will need to verify your account. The platform will send a One-Time Password (OTP) to your registered mobile number or email address. Enter the OTP in the required field to complete the verification process. This step ensures your account is secure and confirms that your contact details are valid.'],
    },
    {
        num: '05',
        title: 'Set Up a Secure Password',
        paras: ['Next, create a strong and secure password for your account. A good password should:'],
        bullets: ['Include uppercase and lowercase letters', 'Contain numbers', 'Include special characters', 'Be at least 8 characters long'],
        closing: 'Choosing a strong password helps protect your account from unauthorized access.',
    },
    {
        num: '06',
        title: 'Start Betting and Enjoy',
        paras: ['Once your account is fully set up and verified, you are ready to explore everything Sky Exchange has to offer. Browse through the available sports markets, casino games, and other betting options.'],
        bullets: ['Place your first bet on your favourite sport', 'Explore live casino games', 'Claim your welcome bonus', 'Enjoy 24/7 access from any device'],
        closing: 'Sky Exchange makes the entire experience smooth, secure, and enjoyable from start to finish.',
    },
];

const SignUpSection = () => {
    return (
        <section className="signup-section">
            <div className="signup-container">

                {/* LEFT — sticky image */}
                <div className="signup-left">
                    <div className="signup-left-inner">
                        <Image
                            src="/images/5dafafb1-92a5-4f59-bc2b-f4952e7c6dee.jpg"
                            alt="How to Sign Up on Sky Exchange"
                            width={600}
                            height={800}
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                            priority
                        />
                    </div>
                </div>

                {/* RIGHT — scrollable */}
                <div className="signup-right">
                    <h2 className="su-heading">How to Sign Up on Sky Exchange (Step-by-Step Guide)</h2>
                    <p className="su-para">
                        Getting started on Sky Exchange is simple and user-friendly. The registration process is smooth
                        and can be completed in just a few minutes. If you're new to the platform, follow this easy
                        step-by-step guide to create your account and start exploring its features.
                    </p>

                    <div className="su-steps">
                        {rightSteps.map((s) => (
                            <div key={s.num} className="su-step">
                                <div className="su-step-num">{s.num}</div>
                                <div className="su-step-body">
                                    <h3 className="su-step-title">{s.title}</h3>
                                    {s.paras.map((p, i) => <p key={i} className="su-para">{p}</p>)}
                                    {s.bullets && (
                                        <ul className="su-list">
                                            {s.bullets.map((b) => <li key={b}>{b}</li>)}
                                        </ul>
                                    )}
                                    {s.closing && <p className="su-para">{s.closing}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .signup-section {
                    background: #0d0d0d;
                    padding: 80px 0 90px;
                }
                .signup-container {
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 0 40px;
                    display: flex;
                    align-items: flex-start;
                    gap: 60px;
                }

                /* ── LEFT STICKY ── */
                .signup-left {
                    flex: 0 0 44%;
                    max-width: 44%;
                    position: sticky;
                    top: 114px;
                    align-self: flex-start;
                }
                .signup-left-inner {
                    border-radius: 12px;
                    overflow: hidden;
                }

                /* ── RIGHT ── */
                .signup-right { flex: 1; min-width: 0; }
                .su-heading {
                    color: #ffffff;
                    font-size: clamp(1.8rem, 3vw, 2.8rem);
                    font-weight: 800;
                    line-height: 1.2;
                    margin-bottom: 22px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .su-para {
                    color: #cccccc;
                    font-size: 16px;
                    line-height: 1.85;
                    margin-bottom: 14px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .su-steps { display: flex; flex-direction: column; gap: 36px; margin-top: 30px; }
                .su-step { display: flex; gap: 24px; align-items: flex-start; }
                .su-step-num {
                    color: rgba(245,197,24,0.35);
                    font-size: 2.4rem;
                    font-weight: 900;
                    line-height: 1;
                    flex-shrink: 0;
                    width: 56px;
                    font-family: 'Poppins', Arial, sans-serif;
                    padding-top: 4px;
                }
                .su-step-body { flex: 1; }
                .su-step-title {
                    color: #ffffff;
                    font-size: 20px;
                    font-weight: 800;
                    margin-bottom: 10px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .su-list {
                    color: #cccccc;
                    font-size: 15px;
                    line-height: 2;
                    padding-left: 22px;
                    margin-bottom: 10px;
                    font-family: 'Poppins', Arial, sans-serif;
                }

                /* RESPONSIVE */
                @media (max-width: 1024px) {
                    .signup-left { flex: 0 0 40%; max-width: 40%; }
                    .signup-container { gap: 40px; }
                }
                @media (max-width: 768px) {
                    .signup-container { flex-direction: column; padding: 0 20px; gap: 40px; }
                    .signup-left { flex: none; max-width: 100%; width: 100%; position: static; }
                }
            `}</style>
        </section>
    );
};

export default SignUpSection;
