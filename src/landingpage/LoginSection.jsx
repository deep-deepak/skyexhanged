import React from 'react';
import Image from 'next/image';

const steps = [
    {
        num: '01',
        title: 'Visit the Official Sky Exchange Website',
        para: 'Open your browser and go to the official Sky Exchange website. Always ensure you are visiting the correct and verified website to avoid phishing or fake platforms.',
    },
    {
        num: '02',
        title: 'Click on the "Login" Button',
        para: 'Once you are on the homepage, locate the "Login" button. It is usually placed at the top-right corner of the website for easy access.',
    },
    {
        num: '03',
        title: 'Enter Your Login Credentials',
        para: 'Provide your registered username and password in the required fields. Make sure the details are entered correctly to avoid login errors.',
    },
    {
        num: '04',
        title: 'Complete the Verification Process (If Required)',
        para: 'For enhanced security, some accounts may require additional verification. You may need to enter a One-Time Password (OTP) sent to your registered mobile number or email address. This step ensures complete protection of your account.',
    },
    {
        num: '05',
        title: 'Click on "Submit" or "Login"',
        para: 'After entering your credentials and completing verification (if required), click on the "Submit" or "Login" button. You will be redirected instantly to your account dashboard.',
    },
    {
        num: '06',
        title: 'Start Betting & Gaming',
        para: 'Once logged in successfully, you can explore all available features, including:',
        bullets: ['Sports betting', 'Live casino games', 'Ongoing promotions and bonuses', 'Account management options'],
        closing: 'You are now ready to enjoy the full Sky Exchange experience.',
    },
];

const LoginSection = () => {
    return (
        <section className="login-section">
            <div className="login-container">

                {/* LEFT — scrollable text */}
                <div className="login-left" data-aos="fade-right">
                    <h2 className="login-heading" data-aos="fade-up">Sky Exchange Login – Step-by-Step Secure Access</h2>
                    <p className="login-para">
                        Accessing your Sky Exchange account is a quick and secure process designed to protect your
                        information while giving you instant entry to betting and gaming features. Whether you are
                        logging in from desktop or mobile, following the correct steps ensures smooth access without
                        any issues.
                    </p>

                    <div className="login-steps">
                        {steps.map((s) => (
                            <div key={s.num} className="login-step">
                                <div className="ls-num">{s.num}</div>
                                <div className="ls-body">
                                    <h3 className="ls-title">{s.title}</h3>
                                    <p className="ls-para">{s.para}</p>
                                    {s.bullets && (
                                        <ul className="ls-list">
                                            {s.bullets.map((b) => <li key={b}>{b}</li>)}
                                        </ul>
                                    )}
                                    {s.closing && <p className="ls-para">{s.closing}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT — sticky image */}
                <div className="login-right" data-aos="fade-left">
                    <div className="login-right-inner">
                        <Image
                            src="/images/skyexchangeapp-img-06.webp"
                            alt="Sky Exchange Login Step-by-Step"
                            width={600}
                            height={800}
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                            priority
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
                .login-section {
                    background: #0d0d0d;
                    padding: 80px 0 90px;
                }
                .login-container {
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 0 40px;
                    display: flex;
                    align-items: flex-start;
                    gap: 60px;
                }

                /* LEFT — text */
                .login-left { flex: 1; min-width: 0; }

                .login-heading {
                    color: #ffffff;
                    font-size: clamp(1.8rem, 3vw, 2.8rem);
                    font-weight: 800;
                    line-height: 1.2;
                    margin-bottom: 22px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .login-para {
                    color: #cccccc;
                    font-size: 16px;
                    line-height: 1.85;
                    margin-bottom: 14px;
                    font-family: 'Poppins', Arial, sans-serif;
                }

                /* STEPS */
                .login-steps {
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                    margin-top: 30px;
                }
                .login-step {
                    display: flex;
                    gap: 22px;
                    align-items: flex-start;
                }
                .ls-num {
                    color: rgba(245, 197, 24, 0.35);
                    font-size: 2.4rem;
                    font-weight: 900;
                    line-height: 1;
                    flex-shrink: 0;
                    width: 56px;
                    font-family: 'Poppins', Arial, sans-serif;
                    padding-top: 2px;
                }
                .ls-body { flex: 1; }
                .ls-title {
                    color: #ffffff;
                    font-size: 19px;
                    font-weight: 800;
                    margin-bottom: 8px;
                    line-height: 1.3;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .ls-para {
                    color: #cccccc;
                    font-size: 15px;
                    line-height: 1.8;
                    margin-bottom: 10px;
                    font-family: 'Poppins', Arial, sans-serif;
                }
                .ls-para:last-child { margin-bottom: 0; }
                .ls-list {
                    color: #cccccc;
                    font-size: 15px;
                    line-height: 2;
                    padding-left: 22px;
                    margin-bottom: 10px;
                    font-family: 'Poppins', Arial, sans-serif;
                }

                /* RIGHT — sticky image */
                .login-right {
                    flex: 0 0 44%;
                    max-width: 44%;
                    position: sticky;
                    top: 114px;
                    align-self: flex-start;
                }
                .login-right-inner {
                    border-radius: 12px;
                    overflow: hidden;
                }

                /* RESPONSIVE */
                @media (max-width: 1024px) {
                    .login-right { flex: 0 0 40%; max-width: 40%; }
                    .login-container { gap: 40px; }
                }
                @media (max-width: 768px) {
                    .login-container { flex-direction: column-reverse; padding: 0 20px; gap: 40px; }
                    .login-right { flex: none; max-width: 100%; width: 100%; position: static; }
                }
            `}</style>
        </section>
    );
};

export default LoginSection;
